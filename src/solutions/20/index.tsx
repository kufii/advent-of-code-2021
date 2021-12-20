import { h, Fragment } from 'preact'
import { Answer, Visualization } from '/components'
import input from './input'
import { InfiniteGrid, output2dArray, parse2dArray, range } from '../util'
import { useStore } from '/store'
import { useEffect, useState } from 'preact/hooks'
import { setIntervalImmediate } from '/shared/web-utilities/util'

const parseInput = () => {
  const [alg, image] = input.split('\n\n')
  return {
    alg: [...alg],
    image: parse2dArray(image, String)
  }
}

const getEnhancementBit = (grid: InfiniteGrid<string>, x: number, y: number) =>
  range(y - 1, y + 1)
    .flatMap((y) =>
      range(x - 1, x + 1).map((x) => (grid.get(x, y) === '#' ? 1 : 0))
    )
    .join('')

export const enhance = function* (
  image: string[][],
  alg: string[],
  times: number
) {
  let grid = new InfiniteGrid('.', image)
  yield grid
  for (let n = 0; n < times; n++) {
    const fill = alg[0] === '#' ? (grid.fill === '#' ? '.' : '#') : '.'
    const newGrid = new InfiniteGrid(fill)
    const { min, max } = grid.bounds
    for (let y = min.y - 1; y <= max.y + 1; y++) {
      for (let x = min.x - 1; x <= max.x + 1; x++) {
        const cell = alg[parseInt(getEnhancementBit(grid, x, y), 2)]
        if (cell !== fill) newGrid.set(x, y, cell)
      }
    }
    grid = newGrid
    yield grid
  }
}

const getNumOn = (grid: InfiniteGrid<string>) =>
  grid.cells.flat().filter((n) => n.value === '#').length

const useSolution = (times: number) => {
  const showVisualization = useStore((s) => s.showVisualization)
  const [done, setDone] = useState(false)
  const [n, setN] = useState(0)
  const [grid, setGrid] = useState<InfiniteGrid<string>>()

  useEffect(() => {
    setDone(false)
    setN(0)
    setGrid(undefined)
    const { image, alg } = parseInput()
    const gen = enhance(image, alg, times)
    let n = 0
    const id = setIntervalImmediate(
      () => {
        const { value, done } = gen.next()
        setN(n)
        n++
        if (value) setGrid(value)
        if (done) {
          setDone(true)
          clearInterval(id)
        }
      },
      showVisualization ? 200 : 0
    )
    return () => clearInterval(id)
  }, [showVisualization, times])

  return { done, grid, n }
}

export const Part1 = () => {
  const { grid, done, n } = useSolution(2)

  return (
    <>
      {!done && <p>Image enhanced {n} times</p>}
      {done && grid && (
        <p>
          After 2 enhancements, <Answer>{getNumOn(grid)}</Answer> pixels are
          lit.
        </p>
      )}
      <Visualization>{grid && output2dArray(grid.toArray())}</Visualization>
    </>
  )
}

export const Part2 = () => {
  const { grid, done, n } = useSolution(50)

  return (
    <>
      {!done && <p>Image enhanced {n} times</p>}
      {done && grid && (
        <p>
          After 50 enhancements, <Answer>{getNumOn(grid)}</Answer> pixels are
          lit.
        </p>
      )}
      <Visualization>{grid && output2dArray(grid.toArray())}</Visualization>
    </>
  )
}
