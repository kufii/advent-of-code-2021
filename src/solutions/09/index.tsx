import { h, Fragment } from 'preact'
import { Answer } from '/components'
import {
  getAdjacent,
  iterate2dArray,
  parse2dArray,
  Point,
  pointToKey,
  product,
  sortNum,
  sum
} from '../util'
import input from './input'
import { Visualize } from './components'

const parseInput = () => parse2dArray(input, Number)

const getLowPoints = function* (map: number[][]) {
  for (const { x, y, value } of iterate2dArray(map)) {
    if (getAdjacent(map, { x, y }).every((pos) => map[pos.y][pos.x] > value)) {
      yield { x, y }
    }
  }
}

const getBasin = (arr: number[][], point: Point) => {
  const basin = new Set<string>()
  const recursive = (point: Point) => {
    basin.add(pointToKey(point))
    getAdjacent(arr, point)
      .filter(({ x, y }) => arr[y][x] < 9 && arr[y][x] > arr[point.y][point.x])
      .forEach(recursive)
  }
  recursive(point)
  return basin
}

export const Part1 = () => {
  const map = parseInput()
  const lowPoints = [...getLowPoints(map)]
  const result = lowPoints.map(({ x, y }) => map[y][x] + 1).reduce(sum)
  return (
    <>
      <p>
        the sum of the risk levels of all low points is{' '}
        <Answer>{result}</Answer>.
      </p>
      <Visualize
        map={map}
        highlightCoords={new Set(lowPoints.map(pointToKey))}
      />
    </>
  )
}

export const Part2 = () => {
  const map = parseInput()
  const basins = [...getLowPoints(map)].map((point) => getBasin(map, point))
  const largestBasins = basins
    .map((basin) => basin.size)
    .sort(sortNum)
    .slice(-3)
  const result = largestBasins.reduce(product)
  return (
    <>
      <p>
        The sizes of the 3 largest basins are {largestBasins.join(', ')}, which
        multiply to <Answer>{result}</Answer>.
      </p>
      <Visualize
        map={map}
        highlightCoords={
          new Set(basins.flatMap((basin) => [...basin.values()]))
        }
      />
    </>
  )
}
