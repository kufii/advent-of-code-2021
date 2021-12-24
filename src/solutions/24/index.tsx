import { h } from 'preact'
import { Answer } from '/components'
import { maxBy, minBy, range } from '../util'

// only for my input
const getModels = () => {
  const good: string[] = []
  for (const d0 of range(5, 9)) {
    for (const d1 of range(1, 7)) {
      for (const d2 of range(6, 9)) {
        const d3 = 1
        const d4 = 9
        for (const d5 of range(3, 9)) {
          for (const d6 of range(3, 9)) {
            const d7 = d6 - 2
            for (const d8 of range(1, 2)) {
              const d9 = d8 + 7
              const d10 = d5
              const d11 = d2 - 5
              const d12 = d1 + 2
              const d13 = d0 - 4
              good.push(
                [
                  d0,
                  d1,
                  d2,
                  d3,
                  d4,
                  d5,
                  d6,
                  d7,
                  d8,
                  d9,
                  d10,
                  d11,
                  d12,
                  d13
                ].join('')
              )
            }
          }
        }
      }
    }
  }
  return good
}

export const Part1 = () => {
  const max = getModels().reduce(maxBy(Number))

  return (
    <p>
      The largest model number accepted by MONAD is <Answer>{max}</Answer>.
    </p>
  )
}

export const Part2 = () => {
  const min = getModels().reduce(minBy(Number))

  return (
    <p>
      The smallest model number accepted by MONAD is <Answer>{min}</Answer>.
    </p>
  )
}
