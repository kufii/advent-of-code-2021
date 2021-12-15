import { h, Fragment } from 'preact'
import { Answer, Visualization } from '/components'
import {
  getAdjacent,
  iterate2dArray,
  parse2dArray,
  Point,
  pointToKey
} from '../util'
import input from './input'
import { useStore } from '/store'
import { useEffect, useState } from 'preact/hooks'
import { setIntervalImmediate } from '/shared/web-utilities/util'

const parseInput = () => parse2dArray(input, Number)

const simulate = function* (map: number[][]) {
  while (true) {
    const flashed = new Set<string>()
    const up = (point: Point) => {
      const key = pointToKey(point)
      if (flashed.has(key)) return
      const { x, y } = point
      map[y][x]++
      if (map[y][x] > 9) {
        flashed.add(key)
        map[y][x] = 0
        getAdjacent(point, map, true).forEach(up)
      }
    }
    for (const { x, y } of iterate2dArray(map)) {
      up({ x, y })
    }
    yield { map, flashes: flashed.size }
  }
}

const Visualize = ({ map }: { map?: number[][] }) => (
  <Visualization>
    {map?.map((line, y) => (
      <Fragment key={`y=${y}`}>
        {line.map((c) => c || <strong>{c}</strong>)}
        <br />
      </Fragment>
    ))}
  </Visualization>
)

const useSimulation = (times?: number) => {
  const showVisualization = useStore((s) => s.showVisualization)
  const [map, setMap] = useState<number[][]>()
  const [flashes, setFlashes] = useState<number>()
  const [n, setN] = useState<number>()
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDone(false)
    const map = parseInput()
    const sim = simulate(map)
    let n = 0
    let totalFlashes = 0
    let id: NodeJS.Timer

    const tick = () => {
      n++
      const { map, flashes } = sim.next().value
      totalFlashes += flashes
      const done = n === times || flashes === map.length * map[0].length
      if (showVisualization || done) {
        setN(n)
        setFlashes(totalFlashes)
        setMap(map)
      }
      if (done) {
        setDone(true)
        clearInterval(id)
        return true
      }
    }
    if (showVisualization) id = setIntervalImmediate(tick, 100)
    else while (true) if (tick()) break

    return () => {
      clearInterval(id)
    }
  }, [times, showVisualization])

  return { map, flashes, n, done }
}

export const Part1 = () => {
  const { map, flashes, done } = useSimulation(100)
  return (
    <>
      {flashes != null && done && (
        <p>
          The octopuses flash <Answer>{flashes}</Answer> times after 100 steps.
        </p>
      )}
      <Visualize map={map} />
    </>
  )
}

export const Part2 = () => {
  const { map, n, done } = useSimulation()
  return (
    <>
      {n != null && done && (
        <p>
          At step <Answer>{n}</Answer> all the octopuses flash at the same time.
        </p>
      )}
      <Visualize map={map} />
    </>
  )
}
