import { h, Fragment } from 'preact'
import { Answer, Visualization } from '/components'
import structuredClone from '@ungap/structured-clone'
import { iterate2dArray, output2dArray, parse2dArray } from '../util'
import { useEffect, useState } from 'preact/hooks'
import { setIntervalImmediate } from '/shared/web-utilities/util'
import { useStore } from '/store'
import input from './input'

const parseInput = () => parse2dArray(input, String)

const simulate = function* (grid: string[][]) {
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
  do {
    yield grid
  } while (step())
}

export const Part1 = () => {
  const showVisualization = useStore((s) => s.showVisualization)
  const [steps, setSteps] = useState(0)
  const [done, setDone] = useState(false)
  const [output, setOutput] = useState('')

  useEffect(() => {
    const grid = parseInput()
    setSteps(0)
    setDone(false)
    let n = 0
    const sim = simulate(grid)

    const id = setIntervalImmediate(
      () => {
        const { value, done } = sim.next()
        setSteps(n)
        n++
        if (value && showVisualization) setOutput(output2dArray(value))
        if (done) {
          setDone(true)
          clearInterval(id)
        }
      },
      showVisualization ? 100 : 0
    )

    return () => clearInterval(id)
  }, [showVisualization])

  return (
    <>
      <p>
        {done ? (
          <>
            The first step where no sea cucumbers move is{' '}
            <Answer>{steps}</Answer>.
          </>
        ) : (
          'Running...'
        )}
      </p>
      <Visualization>{output}</Visualization>
    </>
  )
}
