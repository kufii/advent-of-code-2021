import { h } from 'preact'
import { Answer } from '/components'
import { sortStr, sum } from '../util'
import input from './input'

const parseInput = () =>
  input
    .split('\n')
    .map((line) => line.split(' | '))
    .map(([patterns, output]) => ({
      patterns: patterns.split(' '),
      output: output.split(' ')
    }))

const decodeWiring = (digits: string[]) => {
  digits = digits.map((str) => sortStr(str))
  const map: Record<number, string> = { 8: 'abcdefg' }
  const addToMap = (
    n: number,
    length: number,
    includes?: [number] | [number, number]
  ) =>
    (map[n] = digits.find(
      (str) =>
        !Object.values(map).includes(str) &&
        str.length === length &&
        (!includes ||
          [...str].filter((c) => map[includes[0]].includes(c)).length ===
            (includes[1] ?? map[includes[0]].length))
    )!)
  addToMap(1, 2)
  addToMap(4, 4)
  addToMap(7, 3)
  addToMap(3, 5, [7])
  addToMap(5, 5, [4, 3])
  addToMap(2, 5)
  addToMap(9, 6, [3])
  addToMap(6, 6, [5])
  addToMap(0, 6)
  return new Map(Object.entries(map).map(([n, wiring]) => [wiring, n]))
}

export const Part1 = () => {
  const input = parseInput()
  const result = input.flatMap(({ output }) =>
    output.filter((str) => [2, 3, 4, 7].includes(str.length))
  ).length
  return (
    <p>
      The numbers 1, 4, 7, and 8 appear in the output values{' '}
      <Answer>{result}</Answer> times.
    </p>
  )
}

export const Part2 = () => {
  const input = parseInput()
  const result = input
    .map(({ patterns, output }) => {
      const map = decodeWiring(patterns)
      return Number(output.map((s) => map.get(sortStr(s))).join(''))
    })
    .reduce(sum)

  return (
    <p>
      The sum of all the output values is <Answer>{result}</Answer>.
    </p>
  )
}
