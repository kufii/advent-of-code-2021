import { h } from 'preact'
import { Answer } from '../../components/Answer'
import { range } from '../util'
import input from './input'

const parseInput = () => input.split('\n').map(Number)

const getSum = (numbers: number[], i: number, count = 3) =>
  range(0, count - 1).reduce((acc, n) => acc + numbers[i - n], 0)

export const Part1 = () => {
  const nums = parseInput()
  const result = nums.filter((n, i) => i > 0 && n > nums[i - 1]).length
  return (
    <p>
      <Answer>{result}</Answer> measurements are larger than the previous
      measurement.
    </p>
  )
}

export const Part2 = () => {
  const nums = parseInput()
  const result = nums.filter(
    (_, i) => i > 2 && getSum(nums, i) > getSum(nums, i - 1)
  ).length
  return (
    <p>
      <Answer>{result}</Answer> sums are larger than the previous sum.
    </p>
  )
}
