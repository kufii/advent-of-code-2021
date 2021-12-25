import { h } from 'preact'
import { Answer } from '/components'
import structuredClone from '@ungap/structured-clone'
import { iterate2dArray, parse2dArray } from '../util'
import input from './input'

const parseInput = () => parse2dArray(input, String)

export const Part1 = () => {
  let grid = parseInput()

  const step = () => {
    let moved = false
    const move = (dir: string) => {
      const newGrid = structuredClone(grid)
      for (const { x, y, value } of iterate2dArray(grid)) {
        if (value !== dir) continue
        const [nextX, nextY] =
          dir === '>'
            ? [(x + 1) % grid[y].length, y]
            : [x, (y + 1) % grid.length]
        if (grid[nextY][nextX] === '.') {
          newGrid[y][x] = '.'
          newGrid[nextY][nextX] = dir
          moved = true
        }
      }
      grid = newGrid
    }
    move('>')
    move('v')
    return moved
  }

  let n = 0
  do {
    n++
  } while (step())

  return (
    <p>
      Hello world <Answer>{n}</Answer>
    </p>
  )
}
