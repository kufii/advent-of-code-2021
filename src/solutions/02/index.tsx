import { h } from 'preact'
import input from './input'
import { Answer } from '/components'

const parseInput = () =>
  input
    .split('\n')
    .map((line) => line.split(' '))
    .map(([direction, value]) => ({ direction, value: Number(value) }))

export const Part1 = () => {
  const directions = parseInput()
  const { x, depth } = directions.reduce(
    (acc, { direction, value }) => {
      if (direction === 'forward') acc.x += value
      else acc.depth += value * (direction === 'up' ? -1 : 1)
      return acc
    },
    {
      x: 0,
      depth: 0
    }
  )
  return (
    <p>
      The horizontal position is {x} and the depth is {depth}. The final result
      is <Answer>{depth * x}</Answer>.
    </p>
  )
}

export const Part2 = () => {
  const directions = parseInput()
  const { x, depth } = directions.reduce(
    (acc, { direction, value }) => {
      if (direction === 'forward') {
        acc.x += value
        acc.depth += value * acc.aim
      } else acc.aim += value * (direction === 'up' ? -1 : 1)
      return acc
    },
    {
      x: 0,
      depth: 0,
      aim: 0
    }
  )
  return (
    <p>
      The horizontal position is {x} and the depth is {depth}. The final result
      is <Answer>{depth * x}</Answer>.
    </p>
  )
}
