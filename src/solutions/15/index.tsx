import { h } from 'preact'
import { Answer } from '/components'
import input from './input'
import {
  dijkstra,
  getAdjacent,
  keyToPoint,
  parse2dArray,
  pointToKey
} from '../util'

const parseInput = () => parse2dArray(input, Number)

const getPath = (map: number[][], factor = 1) => {
  const size = { x: map[0].length * factor, y: map.length * factor }
  return dijkstra(
    pointToKey({ x: 0, y: 0 }),
    pointToKey({ x: size.x - 1, y: size.y - 1 }),
    (key) => {
      const [x, y] = key.split(',').map(Number)
      return [...getAdjacent({ x, y }, size)].map(pointToKey)
    },
    (key) => {
      const { x, y } = keyToPoint(key)
      const n =
        map[y % map.length][x % map[0].length] +
        Math.floor(x / map[0].length) +
        Math.floor(y / map.length)
      return n - Math.floor(n / 10) * 9
    }
  )
}

export const Part1 = () => {
  const map = parseInput()
  const { distance } = getPath(map)

  return (
    <p>
      The risk level from the top left to the bottom right is{' '}
      <Answer>{distance!}</Answer>.
    </p>
  )
}

export const Part2 = () => {
  const map = parseInput()
  const { distance } = getPath(map, 5)

  return (
    <p>
      The risk level from the top left to the bottom right is{' '}
      <Answer>{distance!}</Answer> when the cave is 5 times larger.
    </p>
  )
}
