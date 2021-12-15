import { h, Fragment } from 'preact'
import { Answer, Array2d, Visualization } from '/components'
import input from './input'
import {
  dijkstra,
  getAdjacent,
  iterate2dArray,
  keyToPoint,
  make2dArray,
  parse2dArray,
  Point,
  pointToKey
} from '../util'

const parseInput = () => parse2dArray(input, Number)

const getRiskLevel = (map: number[][], { x, y }: Point) => {
  const n =
    map[y % map.length][x % map[0].length] +
    Math.floor(x / map[0].length) +
    Math.floor(y / map.length)
  return n - Math.floor(n / 10) * 9
}

const getPath = (map: number[][], factor = 1) => {
  const size = { x: map[0].length * factor, y: map.length * factor }
  return dijkstra(
    pointToKey({ x: 0, y: 0 }),
    pointToKey({ x: size.x - 1, y: size.y - 1 }),
    (key) => {
      const [x, y] = key.split(',').map(Number)
      return [...getAdjacent({ x, y }, size)].map(pointToKey)
    },
    (key) => getRiskLevel(map, keyToPoint(key))
  )
}

interface VisualizeProps {
  map: number[][]
  path: Set<string>
  factor?: number
}

const Visualize = ({ map, path, factor = 1 }: VisualizeProps) => {
  const array = make2dArray<number | JSX.Element>(
    map.length * factor,
    map[0].length * factor
  )
  for (const { x, y } of iterate2dArray(array)) {
    const n = getRiskLevel(map, { x, y })
    array[y][x] = path.has(pointToKey({ x, y })) ? <strong>{n}</strong> : n
  }
  return (
    <Visualization>
      <Array2d array={array} />
    </Visualization>
  )
}

export const Part1 = () => {
  const map = parseInput()
  const { distance, path } = getPath(map)

  return (
    <>
      <p>
        The risk level from the top left to the bottom right is{' '}
        <Answer>{distance!}</Answer>.
      </p>
      <Visualize map={map} path={new Set(path!)} />
    </>
  )
}

export const Part2 = () => {
  const map = parseInput()
  const { distance, path } = getPath(map, 5)

  return (
    <>
      <p>
        The risk level from the top left to the bottom right is{' '}
        <Answer>{distance!}</Answer> when the cave is 5 times larger.
      </p>
      <Visualize map={map} path={new Set(path!)} factor={5} />
    </>
  )
}
