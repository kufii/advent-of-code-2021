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
  const map = new Map<string, number>()

  const strIncludes = (str: string, n: number, length?: number) => {
    const [key] = [...map.entries()].find(([, value]) => value === n)!
    return (
      [...key].filter((c) => str.includes(c)).length === (length ?? key.length)
    )
  }
  const addToMap = (n: number, length: number, includes?: [number, number?]) =>
    map.set(
      digits.find(
        (str) =>
          !map.has(str) &&
          str.length === length &&
          (!includes || strIncludes(str, ...includes))
      )!,
      n
    )

  addToMap(1, 2)
  addToMap(4, 4)
  addToMap(7, 3)
  addToMap(8, 7)
  addToMap(3, 5, [7])
  addToMap(5, 5, [4, 3])
  addToMap(2, 5)
  addToMap(9, 6, [3])
  addToMap(6, 6, [5])
  addToMap(0, 6)
  return map
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
