import { h } from 'preact'
import { fastMax, fastMin, minBy, range, sum } from '../util'
import input from './input'
import { Answer } from '/components'

const parseInput = () => input.split(',').map(Number)

const nthTriangular = (n: number) => (n * n + n) / 2

const getAlignment = (
  crabs: number[],
  fuelCb: (source: number, target: number) => number
) =>
  range(fastMin(crabs), fastMax(crabs))
    .map((n) => [crabs.map((pos) => fuelCb(pos, n)).reduce(sum), n])
    .reduce(minBy(([result]) => result))

export const Part1 = () => {
  const crabs = parseInput()
  const [result, pos] = getAlignment(crabs, (source, target) =>
    Math.abs(source - target)
  )
  return (
    <p>
      All crabs can be aligned to horizontal position {pos} by spending{' '}
      <Answer>{result}</Answer> fuel.
    </p>
  )
}

export const Part2 = () => {
  const crabs = parseInput()
  const [result, pos] = getAlignment(crabs, (source, target) =>
    nthTriangular(Math.abs(source - target))
  )
  return (
    <p>
      Using the proper fuel calculations, all crabs can be aligned to horizontal
      position {pos} by spending <Answer>{result}</Answer> fuel.
    </p>
  )
}
