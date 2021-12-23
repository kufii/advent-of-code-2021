import { h } from 'preact'
import { Answer } from '/components'
import input from './input'
import {
  dijkstra,
  getAdjacent,
  iterate2dArray,
  keyToPoint,
  min,
  parse2dArray,
  Point,
  pointToKey,
  range,
  sortBy
} from '../util'

enum Cells {
  WALL = '#'
}

interface Amphipod extends Point {
  type: string
}

const parseInput = () => parse2dArray(input, String)

const slots: Record<string, number> = {
  A: 3,
  B: 5,
  C: 7,
  D: 9
}

const energy: Record<string, number> = {
  A: 1,
  B: 10,
  C: 100,
  D: 1000
}

const getAmphipods = (grid: string[][]) => {
  const array: Amphipod[] = []
  for (const { x, y, value } of iterate2dArray(grid)) {
    if (value.match(/[A-Z]/iu)) array.push({ x, y, type: value })
  }
  return array
}

const getPathsBetween = (grid: string[][], spots: Record<string, Point>) =>
  Object.entries(spots).reduce(
    (acc, [id, { x, y }]) => ({
      ...acc,
      [id]: Object.entries(spots)
        .filter(([, k]) => !(k.x === x && k.y === y))
        .reduce(
          (acc, [id, k]) => ({
            ...acc,
            [id]: dijkstra(pointToKey({ x, y }), pointToKey(k), (k) =>
              getAdjacent(keyToPoint(k))
                .filter(({ x, y }) => grid[y][x] !== Cells.WALL)
                .map(pointToKey)
            )
          }),
          {} as Record<string, ReturnType<typeof dijkstra>>
        )
    }),
    {} as Record<string, Record<string, ReturnType<typeof dijkstra>>>
  )

const traverse = (grid: string[][]) => {
  const maxY = grid.length - 2

  const spots = [
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 4, y: 1 },
    { x: 6, y: 1 },
    { x: 8, y: 1 },
    { x: 10, y: 1 },
    { x: 11, y: 1 },
    ...[3, 5, 7, 9].flatMap((x) => range(2, maxY).map((y) => ({ x, y })))
  ].reduce(
    (acc, { x, y }, id) => ({ ...acc, [id]: { x, y } }),
    {} as Record<string, { x: number; y: number }>
  )

  const getSpotAt = ({ x, y }: Point) =>
    Object.keys(spots).find((id) => spots[id].x === x && spots[id].y === y)!

  const pathsBetween = getPathsBetween(grid, spots)

  const cache = new Map<string, number>()
  const recurse = (
    positions: Record<string, { type: string; x: number; y: number }>,
    distance = 0
  ) => {
    const isAmphipodAt = ({ x, y }: Point, type?: string) =>
      Object.values(positions).some(
        (p) => p.x === x && p.y === y && (!type || p.type === type)
      )

    const canTraverse = (from: string, to: string) =>
      !pathsBetween[from][to]
        .path!.slice(1)
        .some((k) => isAmphipodAt(keyToPoint(k)))

    const isInPlace = (id: string) => {
      const { x, y, type } = positions[id]
      const targetX = slots[type]

      if (x === targetX && y === maxY) return true
      return (
        x === targetX &&
        range(y + 1, maxY).every((y) => isAmphipodAt({ x: targetX, y }, type))
      )
    }

    while (true) {
      let found = false
      const notInPlace = Object.entries(positions).filter(
        ([id]) => !isInPlace(id)
      )
      for (const [id, pos] of notInPlace) {
        const targetX = slots[pos.type]
        const targetY = range(2, maxY)
          .reverse()
          .find((y) => !isAmphipodAt({ x: targetX, y }, pos.type))!
        const from = getSpotAt(pos)
        const to = getSpotAt({ x: targetX, y: targetY })
        if (canTraverse(from, to)) {
          found = true
          positions[id].x = targetX
          positions[id].y = targetY
          distance += pathsBetween[from][to].distance! * energy[pos.type]
        }
      }
      if (!found) break
    }

    if (Object.values(positions).every(({ type, x }) => slots[type] === x)) {
      return distance
    }

    const cacheKey = Object.entries(positions)
      .sort(sortBy(([key]) => Number(key)))
      .map(([key, value]) => `${key},${value.x},${value.y}`)
      .join('\n')

    if (cache.has(cacheKey)) return cache.get(cacheKey)! + distance

    const distances: number[] = []
    const notInHallway = Object.entries(positions).filter(
      (p) => p[1].y !== 1 && !isInPlace(p[0])
    )
    for (const [id, pos] of notInHallway) {
      const from = getSpotAt(pos)
      const hallways = Object.keys(spots).filter(
        (id) => spots[id].y === 1 && canTraverse(from, id)
      )
      for (const hallway of hallways) {
        const newPos = JSON.parse(JSON.stringify(positions))
        newPos[id] = {
          ...newPos[id],
          x: spots[hallway].x,
          y: spots[hallway].y
        }
        distances.push(
          recurse(
            newPos,
            distance + pathsBetween[from][hallway].distance! * energy[pos.type]
          )
        )
      }
    }

    const result = distances.reduce(min, Infinity)
    cache.set(cacheKey, result - distance)
    return result
  }

  return recurse(
    getAmphipods(grid).reduce(
      (acc, p, i) => ({ ...acc, [i]: p }),
      {} as Record<string, Amphipod>
    ),
    0
  )
}

export const Part1 = () => {
  const input = parseInput()
  const result = traverse(input)
  return (
    <p>
      The least energy required to organize the amphipods is{' '}
      <Answer>{result}</Answer>.
    </p>
  )
}

export const Part2 = () => {
  const input = parseInput()
  input.splice(3, 0, ...['  #D#C#B#A#', '  #D#B#A#C#'].map((s) => [...s]))
  const result = traverse(input)
  return (
    <p>
      The least energy required to organize the amphipods after unfolding the
      diagram is <Answer>{result}</Answer>.
    </p>
  )
}
