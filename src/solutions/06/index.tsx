import { h } from 'preact'
import { Answer } from '/components'
import { nTimes, range, sum } from '../util'
import input from './input'

const parseInput = () => input.split(',').map(Number)

const simulateFish = (fish: number[], days: number) => {
  const map = new Map(
    range(0, 8).map((n) => [n, fish.filter((timer) => timer === n).length])
  )
  const getCycle = (n: number) => n % 9
  nTimes(days, (n) => {
    const addTo = getCycle(n + 7)
    map.set(addTo, map.get(addTo)! + map.get(getCycle(n))!)
  })
  return [...map.values()].reduce(sum)
}

export const Part1 = () => {
  const result = simulateFish(parseInput(), 80)
  return (
    <p>
      After 80 days there will be <Answer>{result}</Answer> lanternfish.
    </p>
  )
}

export const Part2 = () => {
  const result = simulateFish(parseInput(), 256)
  return (
    <p>
      After 256 days there will be <Answer>{result}</Answer> lanternfish.
    </p>
  )
}
