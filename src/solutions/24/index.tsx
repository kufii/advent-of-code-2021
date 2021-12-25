import { h } from 'preact'
import { Answer } from '/components'
import { maxBy, minBy, range } from '../util'
import input from './input'

const parseInput = () =>
  input
    .split('inp w')
    .map((s) => s.trim())
    .filter(Boolean)

const analyze = (blocks: string[]) => {
  const offsets = []
  const differences = []
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]
    if (block.match(/div z 26/u)) {
      const { offset } = block.match(/div z 26\nadd x (?<offset>[-\d]+)/u)!
        .groups!
      const { index, n } = offsets.pop()!
      differences.push({
        from: index,
        to: i,
        difference: Number(offset) + n
      })
    } else {
      const { offset } = block.match(/add y w\nadd y (?<offset>[-\d]+)/u)!
        .groups!
      offsets.push({ index: i, n: Number(offset) })
    }
  }
  return differences
}

const getModels = (
  differences: { from: number; to: number; difference: number }[]
) => {
  let models = ['']
  for (const i of range(0, 13)) {
    const { from, difference } = differences.find(
      (d) => d.from === i || d.to === i
    )!
    models =
      i === from
        ? models.flatMap((s) =>
            range(
              difference < 0 ? Math.abs(difference) + 1 : 1,
              difference < 0 ? 9 : 9 - difference
            ).map((n) => s + n)
          )
        : models.map((s) => s + (Number(s[from]) + difference))
  }
  return models
}

export const Part1 = () => {
  const input = parseInput()
  const max = getModels(analyze(input)).reduce(maxBy(Number))

  return (
    <p>
      The largest model number accepted by MONAD is <Answer>{max}</Answer>.
    </p>
  )
}

export const Part2 = () => {
  const input = parseInput()
  const min = getModels(analyze(input)).reduce(minBy(Number))

  return (
    <p>
      The largest model number accepted by MONAD is <Answer>{min}</Answer>.
    </p>
  )
}
