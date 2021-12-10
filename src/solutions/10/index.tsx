import { h } from 'preact'
import { Answer } from '/components'
import input from './input'
import { sortNum, sum, truthy } from '../util'

const parseInput = () => input.split('\n')

const brackets: Record<string, string> = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>'
}

const validate = (str: string) => {
  const stack: string[] = []
  for (const c of str) {
    if (Object.keys(brackets).includes(c)) {
      stack.push(c)
    } else {
      const last = stack.pop()
      if (!last || brackets[last] !== c) return { error: c }
    }
  }
  return { completionString: stack.reverse().map((c) => brackets[c]) }
}

const getScore = (chars: string[]) => {
  const scores: Record<string, number> = {
    ')': 1,
    ']': 2,
    '}': 3,
    '>': 4
  }
  return chars.reduce((acc, c) => acc * 5 + scores[c], 0)
}

export const Part1 = () => {
  const scores: Record<string, number> = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137
  }
  const lines = parseInput()
  const result = lines
    .map((str) => validate(str).error)
    .filter(truthy)
    .map((err) => scores[err])
    .reduce(sum)
  return (
    <p>
      The total syntax error score is <Answer>{result}</Answer>.
    </p>
  )
}

export const Part2 = () => {
  const lines = parseInput()
  const scores = lines
    .map((s) => validate(s).completionString)
    .filter(truthy)
    .map(getScore)
    .sort(sortNum)
  const result = scores[Math.floor(scores.length / 2)]
  return (
    <p>
      The median completion string score is <Answer>{result}</Answer>.
    </p>
  )
}
