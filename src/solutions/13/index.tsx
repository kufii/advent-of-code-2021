import { h, Fragment } from 'preact'
import { Answer, Visualization } from '/components'
import input from './input'
import { InfiniteGrid, output2dArray } from '../util'
import { useEffect, useState } from 'preact/hooks'

enum CELL {
  Empty = ' ',
  Dot = '█'
}

enum AXIS {
  X = 'x',
  Y = 'y'
}

interface Instruction {
  axis: AXIS
  n: number
}

const parseInput = () => {
  const [coords, inst] = input.split('\n\n')
  return {
    instructions: inst
      .split('\n')
      .map((str) => str.match(/^fold along (?<axis>.)=(?<n>\d+)$/u)!.groups!)
      .map(({ axis, n }) => ({ axis: axis as AXIS, n: Number(n) })),
    paper: coords
      .split('\n')
      .map((line) => line.split(',').map(Number))
      .reduce(
        (grid, [x, y]) => (grid.set(x, y, CELL.Dot), grid),
        new InfiniteGrid(CELL.Empty)
      )
  }
}

const fold = (paper: InfiniteGrid<CELL>, axis: string, n: number) => {
  paper.cells
    .filter(
      ({ x, y, value }) =>
        value === CELL.Dot && (axis === AXIS.X ? x < n : y > n)
    )
    .forEach(({ x, y }) => {
      const [foldX, foldY] =
        axis === AXIS.X ? [n + (n - x), y] : [x, n + (n - y)]
      paper.set(foldX, foldY, CELL.Dot)
    })
  const { min, max } = paper.bounds
  const [minFold, maxFold] =
    axis === AXIS.X
      ? [{ x: n + 1, y: min.y }, max]
      : [min, { x: max.x, y: n - 1 }]
  return new InfiniteGrid(CELL.Empty, paper.toArray(minFold, maxFold))
}

const iterateFolds = function* (
  paper: InfiniteGrid<CELL>,
  instructions: Instruction[]
) {
  yield paper
  for (const { axis, n } of instructions) {
    paper = fold(paper, axis, n)
    yield paper
  }
}

const outputPaper = (paper: InfiniteGrid<CELL>) =>
  output2dArray(paper.toArray().map((line) => line.reverse()))

export const Part1 = () => {
  const { instructions, paper } = parseInput()
  const { axis, n } = instructions[0]
  const result = fold(paper, axis, n).cells.filter(
    ({ value }) => value === CELL.Dot
  ).length

  return (
    <p>
      After the first fold there are <Answer>{result}</Answer> visible dots on
      the transparent paper.
    </p>
  )
}

export const Part2 = () => {
  const [output, setOutput] = useState<string>()
  const [done, setDone] = useState(false)

  useEffect(() => {
    const { instructions, paper } = parseInput()
    const gen = iterateFolds(paper, instructions)

    const interval = setInterval(() => {
      const { value, done } = gen.next()
      if (done) {
        setDone(true)
        clearInterval(interval)
      } else if (value) {
        setOutput(outputPaper(value))
      }
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      {done && (
        <p>
          The code to activate the infrared thermal imaging camera system is:
        </p>
      )}
      <Visualization forced>{output}</Visualization>
    </>
  )
}
