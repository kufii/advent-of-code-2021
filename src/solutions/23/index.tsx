import { h, Fragment } from 'preact'
import structuredClone from '@ungap/structured-clone'
import { Answer, Visualization } from '/components'
import input from './input'
import {
  dijkstra,
  getAdjacent,
  iterate2dArray,
  keyToPoint,
  minBy,
  output2dArray,
  parse2dArray,
  Point,
  pointToKey,
  range,
  sortBy
} from '../util'
import { useEffect, useRef, useState } from 'preact/hooks'
import { setIntervalImmediate } from '/shared/web-utilities/util'
import { useStore } from '/store'

enum Cells {
  WALL = '#',
  EMPTY = '.'
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

type TraverseReturn = { distance: number; path: [string, string][] }

type Paths = Record<string, Record<string, ReturnType<typeof dijkstra>>>

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
    {} as Paths
  )

const traverse = function* (grid: string[][], yieldEvery = 1000) {
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
    {} as Record<string, Point>
  )

  const getSpotAt = ({ x, y }: Point) =>
    Object.keys(spots).find((id) => spots[id].x === x && spots[id].y === y)!

  const pathsBetween = getPathsBetween(grid, spots)

  const cache = new Map<string, TraverseReturn>()
  const recurse = function* (
    positions: Record<string, Amphipod>,
    path: [string, string][] = [],
    distance = 0
  ): Generator<TraverseReturn | undefined> {
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
          path.push([from, to])
        }
      }
      if (!found) break
    }

    if (Object.values(positions).every(({ type, x }) => slots[type] === x)) {
      return yield { distance, path }
    }

    const cacheKey = Object.entries(positions)
      .sort(sortBy(([key]) => Number(key)))
      .map(([key, value]) => `${key},${value.x},${value.y}`)
      .join('\n')

    if (cache.has(cacheKey)) {
      const c = cache.get(cacheKey)!
      return yield {
        distance: distance + c.distance,
        path: [...path, ...c.path]
      }
    }

    const distances: TraverseReturn[] = []
    const notInHallway = Object.entries(positions).filter(
      (p) => p[1].y !== 1 && !isInPlace(p[0])
    )
    for (const [id, pos] of notInHallway) {
      const from = getSpotAt(pos)
      const hallways = Object.keys(spots).filter(
        (id) => spots[id].y === 1 && canTraverse(from, id)
      )
      for (const hallway of hallways) {
        const newPos = structuredClone(positions)
        newPos[id] = {
          ...newPos[id],
          x: spots[hallway].x,
          y: spots[hallway].y
        }
        for (const out of recurse(
          newPos,
          [...path, [from, hallway]],
          distance + pathsBetween[from][hallway].distance! * energy[pos.type]
        )) {
          yield
          if (out) {
            distances.push(out)
            break
          }
        }
      }
    }

    const result = distances.reduce(
      minBy((d) => d.distance),
      { distance: Infinity, path }
    )
    cache.set(cacheKey, {
      distance: result.distance - distance,
      path: result.path.slice(path.length)
    })
    yield result
  }

  let i = 0
  let result: TraverseReturn | undefined
  for (const out of recurse(
    getAmphipods(grid).reduce(
      (acc, p, i) => ({ ...acc, [i]: p }),
      {} as Record<string, Amphipod>
    )
  )) {
    i++
    if (i % yieldEvery === 0) yield
    if (out) result = out
  }
  if (result) yield { ...result, pathsBetween }
}

const useSolution = (grid: string[][]) => {
  const gridRef = useRef(grid)
  const showVisualization = useStore((s) => s.showVisualization)
  const [distance, setDistance] = useState<number>()
  const [result, setResult] = useState<
    TraverseReturn & { pathsBetween: Paths }
  >()
  const [visualization, setVisualization] = useState<string>()

  useEffect(() => {
    setResult(undefined)
    setDistance(undefined)

    const gen = traverse(gridRef.current)
    const id = setIntervalImmediate(() => {
      const { value, done } = gen.next()
      if (value) {
        setResult(value)
        setDistance(value.distance)
      }
      if (done) clearInterval(id)
    }, 0)

    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    setVisualization(undefined)
    if (!showVisualization || !result) return
    const grid = structuredClone(gridRef.current)
    const { path, pathsBetween } = result

    const visualize = function* () {
      yield output2dArray(grid)
      for (const [from, to] of path) {
        const steps = pathsBetween[from][to].path!
        let prev = keyToPoint(steps[0])
        for (const step of steps.slice(1)) {
          const point = keyToPoint(step)
          const type = grid[prev.y][prev.x]
          grid[prev.y][prev.x] = Cells.EMPTY
          prev = point
          grid[point.y][point.x] = type
          yield output2dArray(grid)
        }
      }
    }
    const gen = visualize()
    const id = setIntervalImmediate(() => {
      const { value, done } = gen.next()
      if (value) setVisualization(value)
      if (done) clearInterval(id)
    }, 200)

    return () => clearInterval(id)
  }, [showVisualization, result])

  return { distance, visualization }
}

export const Part1 = () => {
  const input = parseInput()
  const { distance, visualization } = useSolution(input)
  if (!distance) return <p>Running... This takes a long time...</p>
  return (
    <>
      <p>
        The least energy required to organize the amphipods is{' '}
        <Answer>{distance}</Answer>.
      </p>
      <Visualization>{visualization}</Visualization>
    </>
  )
}

export const Part2 = () => {
  const input = parseInput()
  input.splice(3, 0, ...['  #D#C#B#A#', '  #D#B#A#C#'].map((s) => [...s]))
  const { distance, visualization } = useSolution(input)
  if (!distance) return <p>Running... This takes a long time...</p>
  return (
    <>
      <p>
        The least energy required to organize the amphipods after unfolding the
        diagram is <Answer>{distance}</Answer>.
      </p>
      <Visualization>{visualization}</Visualization>
    </>
  )
}
