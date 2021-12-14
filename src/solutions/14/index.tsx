import { h } from 'preact'
import { Answer } from '/components'
import input from './input'
import { maxBy, minBy, nTimes } from '../util'

const parseInput = () => {
  const [str, rules] = input.split('\n\n')
  return {
    str,
    rules: rules
      .split('\n')
      .map((line) => line.match(/(?<from>[a-z]+) -> (?<to>[a-z]+)/iu)!.groups!)
      .reduce(
        (map, { from, to }) => (map.set(from, to), map),
        new Map<string, string>()
      )
  }
}

const stringToPairs = (str: string) => {
  const pairs = new Map<string, number>()
  for (let i = 0; i < str.length - 1; i++) {
    const pair = str[i] + str[i + 1]
    pairs.set(pair, (pairs.get(pair) ?? 0) + 1)
  }
  return pairs
}

const pairsToElementCounts = (
  pairs: Map<string, number>,
  initialString: string
) => {
  const counts = new Map<string, number>()
  for (const [pair, num] of pairs) {
    counts.set(pair[1], (counts.get(pair[1]) ?? 0) + num)
  }
  const first = initialString[0]
  counts.set(first, (counts.get(first) ?? 0) + 1)
  return counts
}

const expandString = (
  str: string,
  rules: Map<string, string>,
  times: number
) => {
  let pairs = stringToPairs(str)

  nTimes(times, () => {
    const newPairs = new Map<string, number>(pairs)
    for (const [pair, num] of pairs.entries()) {
      const replace = rules.get(pair)
      if (replace) {
        newPairs.set(pair, (newPairs.get(pair) ?? 0) - num)
        ;[pair[0] + replace, replace + pair[1]].forEach((pair) =>
          newPairs.set(pair, (newPairs.get(pair) ?? 0) + num)
        )
      }
    }
    pairs = newPairs
  })

  return pairsToElementCounts(pairs, str)
}

const getMostAndLeastCommon = (elementCounts: Map<string, number>) => {
  const letters = [...elementCounts.keys()]
  const cb = (c: string) => elementCounts.get(c) ?? 0
  const most = letters.reduce(maxBy(cb))
  const least = letters.reduce(minBy(cb))
  return { most, least }
}

interface OutputProps {
  steps: number
  most: string
  least: string
  counts: Map<string, number>
}

const Output = ({ steps, most, least, counts }: OutputProps) => (
  <p>
    After {steps} steps, the most common element is <strong>{most}</strong>,
    appearing <strong>{counts.get(most)}</strong> times, and the least common
    element is <strong>{least}</strong>, appearing{' '}
    <strong>{counts.get(least)}</strong> times. The difference is{' '}
    <Answer>{counts.get(most)! - counts.get(least)!}</Answer>.
  </p>
)

export const Part1 = () => {
  const { str, rules } = parseInput()
  const counts = expandString(str, rules, 10)
  const { most, least } = getMostAndLeastCommon(counts)
  return <Output steps={10} most={most} least={least} counts={counts} />
}

export const Part2 = () => {
  const { str, rules } = parseInput()
  const counts = expandString(str, rules, 40)
  const { most, least } = getMostAndLeastCommon(counts)
  return <Output steps={40} most={most} least={least} counts={counts} />
}
