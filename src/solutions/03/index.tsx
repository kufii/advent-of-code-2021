import { h } from 'preact'
import input from './input'
import { Answer } from '/components'

const parseInput = () => input.split('\n')

const count = (strings: string[], i: number, char: string) =>
  strings.filter((s) => s.charAt(i) === char).length

const getMostCommon = (strings: string[], i: number) =>
  count(strings, i, '0') > count(strings, i, '1') ? '0' : '1'

const getLeastCommon = (strings: string[], i: number) =>
  getMostCommon(strings, i) === '0' ? '1' : '0'

const flipBits = (num: number, digits: number) =>
  ~num & (Math.pow(2, digits) - 1)

export const Part1 = () => {
  const input = parseInput()
  const gamma = parseInt(
    [...input[0]].map((_, i) => getMostCommon(input, i)).join(''),
    2
  )
  const epsilon = flipBits(gamma, input[0].length)
  const result = gamma * epsilon
  return (
    <p>
      The submarine has a gamma rate of {gamma} and an epsilon rate of {epsilon}
      , resulting in a power consumption of <Answer>{result}</Answer>.
    </p>
  )
}

export const Part2 = () => {
  const input = parseInput()
  let oxygenArr = input.slice()
  let co2Arr = input.slice()
  for (let i = 0; i < input[0].length; i++) {
    if (oxygenArr.length > 1)
      oxygenArr = oxygenArr.filter(
        (s) => s.charAt(i) === getMostCommon(oxygenArr, i)
      )
    if (co2Arr.length > 1)
      co2Arr = co2Arr.filter((s) => s.charAt(i) === getLeastCommon(co2Arr, i))
  }
  const oxygen = parseInt(oxygenArr[0], 2)
  const co2 = parseInt(co2Arr[0], 2)
  const result = oxygen * co2

  return (
    <p>
      The submarine has an oxygen generator rating of {oxygen} and a CO2
      scrubber rating of {co2}, resulting in a life support rating of{' '}
      <Answer>{result}</Answer>.
    </p>
  )
}
