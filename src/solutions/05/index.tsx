import { h, Fragment } from 'preact'
import { Answer } from '/components'
import { InfiniteGrid, Point } from '../util'
import { Visualize } from './components'
import input from './input'

interface Line {
  start: Point
  end: Point
}

const parseInput = () =>
  input
    .split('\n')
    .map(
      (line) =>
        line.match(/^(?<x1>\d+),(?<y1>\d+) -> (?<x2>\d+),(?<y2>\d+)$/iu)!
          .groups!
    )
    .map(({ x1, x2, y1, y2 }) => ({
      start: { x: Number(x1), y: Number(y1) },
      end: { x: Number(x2), y: Number(y2) }
    }))

const iterateLine = function* (start: Point, end: Point) {
  const [dx, dy] = [end.x - start.x, end.y - start.y].map(
    (n) => n && n / Math.abs(n)
  )
  for (
    let x = start.x, y = start.y;
    x !== end.x + dx || y !== end.y + dy;
    x += dx, y += dy
  ) {
    yield { x, y }
  }
}

const drawLines = (lines: Line[]) => {
  const grid = new InfiniteGrid(0)
  lines.forEach(({ start, end }) => {
    for (const { x, y } of iterateLine(start, end)) {
      grid.set(x, y, grid.get(x, y) + 1)
    }
  })
  return grid
}

const getIntersections = (grid: InfiniteGrid<number>) =>
  grid.cells.filter((cell) => cell.value > 1).length

export const Part1 = () => {
  const lines = parseInput().filter(
    ({ start, end }) => start.x === end.x || start.y === end.y
  )
  const grid = drawLines(lines)
  const result = getIntersections(grid)
  return (
    <>
      <p>
        Without diagonals, the lines intersect at <Answer>{result}</Answer>{' '}
        points.
      </p>
      <Visualize grid={grid} />
    </>
  )
}

export const Part2 = () => {
  const lines = parseInput()
  const grid = drawLines(lines)
  const result = getIntersections(grid)
  return (
    <>
      <p>
        With diagonals, the lines interest at <Answer>{result}</Answer> points.
      </p>
      <Visualize grid={grid} />
    </>
  )
}
