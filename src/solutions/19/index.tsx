import { h } from 'preact'
import { Answer } from '/components'
import input from './input'
import { max, nestedLoop } from '../util'
import { useEffect, useState } from 'preact/hooks'

type Axis = 'x' | 'y' | 'z'

type Coord = number[]

interface Mapping {
  map: Axis
  dir: number
}

interface Direction {
  x: Mapping
  y: Mapping
  z: Mapping
}

const parseInput = () =>
  input.split('\n\n').map((block) =>
    block
      .split('\n')
      .slice(1)
      .map((line) => line.split(',').map(Number))
  )

const key = (coord: Coord) => coord.join(',')

const getPermutations = function* () {
  for (const [dirX, dirY, dirZ] of nestedLoop(3, 0, 1)) {
    for (const mapTo of nestedLoop(3, 'x'.charCodeAt(0), 'z'.charCodeAt(0))) {
      if (new Set(mapTo).size !== 3) continue
      const [x, y, z] = mapTo.map((c) => String.fromCharCode(c) as Axis)
      const direction: Direction = {
        x: { map: x, dir: dirX || -1 },
        y: { map: y, dir: dirY || -1 },
        z: { map: z, dir: dirZ || -1 }
      }
      yield direction
    }
  }
}

const transform = ([x, y, z]: Coord, { x: tx, y: ty, z: tz }: Direction) => {
  const obj: Record<string, number> = { x, y, z }
  return [obj[tx.map] * tx.dir, obj[ty.map] * ty.dir, obj[tz.map] * tz.dir]
}

export const locateScanners = function* ([
  firstScanner,
  ...scanners
]: Coord[][]) {
  const beacons = new Set(firstScanner.map(key))
  const scannerCoords = [[0, 0, 0]]
  const permutations = [...getPermutations()]
  console.log(permutations)

  const findMatch = () => {
    for (let i = 0; i < scanners.length; i++) {
      const scanner = scanners[i]
      for (const perm of permutations) {
        const points = scanner.map((point) => transform(point, perm))
        for (const coord of beacons) {
          const [bx, by, bz] = coord.split(',').map(Number)
          for (const [x, y, z] of points) {
            const [dx, dy, dz] = [bx - x, by - y, bz - z]
            const notMatches = points
              .map(([x, y, z]) => key([x + dx, y + dy, z + dz]))
              .filter((point) => !beacons.has(point))
            if (points.length - notMatches.length >= 12) {
              notMatches.forEach((point) => beacons.add(point))
              scanners.splice(i, 1)
              scannerCoords.push([dx, dy, dz])
              return
            }
          }
        }
      }
    }
  }
  while (scanners.length) {
    findMatch()
    yield
  }

  yield { beacons, scannerCoords }
}

const getLargestManhattanDistance = (scanners: number[][]) =>
  scanners
    .flatMap(([x, y, z]) =>
      scanners.map(
        ([x2, y2, z2]) => Math.abs(x2 - x) + Math.abs(y2 - y) + Math.abs(z2 - z)
      )
    )
    .reduce(max)

const useSolution = () => {
  const [running, setRunning] = useState(true)
  const [beacons, setBeacons] = useState<Set<string> | undefined>()
  const [scannerCoords, setScannerCoords] = useState<Coord[]>()

  useEffect(() => {
    const input = parseInput()
    const gen = locateScanners(input)
    const id = setInterval(() => {
      const { value } = gen.next()
      if (value) {
        setBeacons(value.beacons)
        setScannerCoords(value.scannerCoords)
        setRunning(false)
        clearInterval(id)
      }
    }, 0)
    return () => clearInterval(id)
  }, [])

  return { running, beacons, scannerCoords }
}

export const Part1 = () => {
  const { beacons } = useSolution()

  if (!beacons) return <p>Running... This takes a very long time...</p>

  return (
    <p>
      There are a total of <Answer>{beacons.size}</Answer> beacons.
    </p>
  )
}

export const Part2 = () => {
  const { scannerCoords } = useSolution()

  if (!scannerCoords) return <p>Running... This takes a very long time...</p>

  return (
    <p>
      The greatest distance between scannerCoords is{' '}
      <Answer>{getLargestManhattanDistance(scannerCoords)}</Answer>.
    </p>
  )
}
