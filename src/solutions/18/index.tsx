import { h } from 'preact'
import { Answer } from '/components'
import input from './input'

interface Token {
  n: number
  depth: number
}

const parseInput = () =>
  input
    .split('\n')
    .map((s) =>
      s
        .split(/(\d+|.)/gu)
        .filter(Boolean)
        .filter((s) => s !== ',')
    )
    .map((tokens) => {
      const nums: Token[] = []
      let depth = -1
      for (const token of tokens) {
        if (token === '[') depth++
        else if (token === ']') depth--
        else nums.push({ n: Number(token), depth })
      }
      return nums
    })

const explode = (tokens: Token[]) => {
  for (let i = 0; i < tokens.length; i++) {
    const { n, depth } = tokens[i]
    if (depth === 4) {
      if (i > 0) tokens[i - 1].n += n
      const right = tokens[i + 2]
      if (right) tokens[i + 2].n += tokens[i + 1].n
      tokens[i] = { n: 0, depth: depth - 1 }
      tokens.splice(i + 1, 1)
      return tokens
    }
  }
}

const split = (tokens: Token[]) => {
  for (let i = 0; i < tokens.length; i++) {
    const { n, depth } = tokens[i]
    if (n >= 10) {
      tokens.splice(
        i,
        1,
        { n: Math.floor(n / 2), depth: depth + 1 },
        { n: Math.ceil(n / 2), depth: depth + 1 }
      )
      return tokens
    }
  }
}

const reduce = (tokens: Token[]) => {
  while (true) {
    const newTokens = explode(tokens) ?? split(tokens)
    if (newTokens) tokens = newTokens
    else return tokens
  }
}

const add = (tokens: Token[][]) =>
  tokens.reduce((a, b) =>
    reduce([...a, ...b].map(({ n, depth }) => ({ n, depth: depth + 1 })))
  )

const getMagnitude = (tokens: Token[]) => {
  while (tokens.length > 1) {
    const i = tokens.findIndex(({ depth }, i) => tokens[i + 1]?.depth === depth)
    tokens.splice(i, 2, {
      n: 3 * tokens[i].n + 2 * tokens[i + 1].n,
      depth: tokens[i].depth - 1
    })
  }
  return tokens[0].n
}

const getLargestMagnitude = (tokens: Token[][]) => {
  let max = 0
  for (let a = 0; a < tokens.length; a++) {
    for (let b = 0; b < tokens.length; b++) {
      if (a === b) continue
      max = Math.max(max, getMagnitude(add([tokens[a], tokens[b]])))
    }
  }
  return max
}

export const Part1 = () => {
  const tokens = parseInput()
  const result = getMagnitude(add(tokens))
  return (
    <p>
      The magnitude of the final sum is <Answer>{result}</Answer>.
    </p>
  )
}

export const Part2 = () => {
  const tokens = parseInput()
  const result = getLargestMagnitude(tokens)
  return (
    <p>
      The largest magnitude of any sum of two different snailfish numbers is{' '}
      <Answer>{result}</Answer>.
    </p>
  )
}
