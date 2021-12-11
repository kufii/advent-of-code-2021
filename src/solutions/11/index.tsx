import { h } from 'preact'
import { Answer } from '/components'
import {
  getAdjacent,
  iterate2dArray,
  nTimes,
  parse2dArray,
  Point,
  pointToKey
} from '../util'
import input from './input'

const parseInput = () => parse2dArray(input, Number)

const simulate = function* (map: number[][]) {
  while (true) {
    const flashed = new Set<string>()
    const up = (point: Point) => {
      const key = pointToKey(point)
      if (flashed.has(key)) return
      const { x, y } = point
      map[y][x]++
      if (map[y][x] > 9) {
        flashed.add(key)
        map[y][x] = 0
        getAdjacent(map, point, true).forEach(up)
      }
    }
    for (const { x, y } of iterate2dArray(map)) {
      up({ x, y })
    }
    yield { map, flashes: flashed.size }
  }
}

export const Part1 = () => {
  const map = parseInput()
  const sim = simulate(map)
  let totalFlashes = 0
  nTimes(100, () => (totalFlashes += sim.next().value.flashes))
  return (
    <p>
      The octopuses flash <Answer>{totalFlashes}</Answer> times after 100 steps.
    </p>
  )
}

export const Part2 = () => {
  const map = parseInput()
  let n = 0
  for (const { flashes } of simulate(map)) {
    n++
    if (flashes === map.length * map[0].length) break
  }
  return (
    <p>
      At step <Answer>{n}</Answer> all the octopuses flash at the same time.
    </p>
  )
}
