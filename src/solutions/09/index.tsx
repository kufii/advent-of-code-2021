import { h, Fragment } from 'preact'
import { Answer } from '/components'
import { parse2dArray, Point, pointToKey, product, sortNum, sum } from '../util'
import input from './input'
import { Visualize } from './components'

const parseInput = () => parse2dArray(input, Number)

const getAdjacent = function* (map: number[][], { x, y }: Point) {
  if (x > 0) yield { x: x - 1, y }
  if (x < map[y].length - 1) yield { x: x + 1, y }
  if (y > 0) yield { x, y: y - 1 }
  if (y < map.length - 1) yield { x, y: y + 1 }
}

const getLowPoints = function* (map: number[][]) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (
        [...getAdjacent(map, { x, y })].every(
          (pos) => map[y][x] < map[pos.y][pos.x]
        )
      ) {
        yield { x, y }
      }
    }
  }
}

const getBasins = (arr: number[][], point: Point) => {
  const basin = new Set<string>()
  const recursive = (point: Point) => {
    basin.add(pointToKey(point))
    ;[...getAdjacent(arr, point)]
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
  const basins = [...getLowPoints(map)].map((point) => getBasins(map, point))
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
