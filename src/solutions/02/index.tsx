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
  let x = 0,
    depth = 0
  for (const { direction, value } of directions) {
    if (direction === 'up') depth -= value
    else if (direction === 'down') depth += value
    else x += value
  }
  return (
    <p>
      The horizontal position is {x} and the depth is {depth}. The final result
      is <Answer>{depth * x}</Answer>.
    </p>
  )
}

export const Part2 = () => {
  const directions = parseInput()
  let x = 0,
    depth = 0,
    aim = 0
  for (const { direction, value } of directions) {
    if (direction === 'up') aim -= value
    else if (direction === 'down') aim += value
    else {
      x += value
      depth += aim * value
    }
  }
  return (
    <p>
      The horizontal position is {x} and the depth is {depth}. The final result
      is <Answer>{depth * x}</Answer>.
    </p>
  )
}
