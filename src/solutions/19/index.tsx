import { h } from 'preact'
import { Answer } from '/components'
import input from './input'
import { max } from '../util'
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

const permutations: Direction[] = [
  ['x', 'y', 'z'],
  ['y', '-x', 'z'],
  ['-x', '-y', 'z'],
  ['-y', 'x', 'z'],
  ['z', 'y', '-x'],
  ['y', '-z', '-x'],
  ['-z', '-y', '-x'],
  ['-y', 'z', '-x'],
  ['z', '-x', '-y'],
  ['-x', '-z', '-y'],
  ['-z', 'x', '-y'],
  ['x', 'z', '-y'],
  ['z', '-y', 'x'],
  ['-y', '-z', 'x'],
  ['-z', 'y', 'x'],
  ['y', 'z', 'x'],
  ['z', 'x', 'y'],
  ['x', '-z', 'y'],
  ['-z', '-x', 'y'],
  ['-x', 'z', 'y'],
  ['-x', 'y', '-z'],
  ['y', 'x', '-z'],
  ['x', '-y', '-z'],
  ['-y', '-x', '-z']
]
  .map((coord) =>
    coord.map((num) => ({
      map: (num.startsWith('-') ? num.charAt(1) : num) as Axis,
      dir: num.startsWith('-') ? -1 : 1
    }))
  )
  .map(([x, y, z]) => ({ x, y, z }))

const transform = ([x, y, z]: Coord, { x: tx, y: ty, z: tz }: Direction) => {
  const obj: Record<string, number> = { x, y, z }
  return [obj[tx.map] * tx.dir, obj[ty.map] * ty.dir, obj[tz.map] * tz.dir]
}

const transformScanner = (scanner: Coord[]) => {
  const array: Coord[][] = []
  for (const p of permutations) {
    array.push(scanner.map((coord) => transform(coord, p)))
  }
  return array
}

export const locateScanners = function* ([
  firstScanner,
  ...scanners
]: Coord[][]) {
  const beacons = new Set(firstScanner.map(key))
  const transformedScanners = scanners.map(transformScanner)
  const scannerCoords = [[0, 0, 0]]

  const findMatch = () => {
    for (let i = 0; i < transformedScanners.length; i++) {
      const scanner = transformedScanners[i]
      for (const points of scanner) {
        for (const coord of beacons) {
          const [bx, by, bz] = coord.split(',').map(Number)
          for (const [x, y, z] of points) {
            const [dx, dy, dz] = [bx - x, by - y, bz - z]
            const notMatches = points
              .map(([x, y, z]) => key([x + dx, y + dy, z + dz]))
              .filter((point) => !beacons.has(point))
            if (points.length - notMatches.length >= 12) {
              notMatches.forEach((point) => beacons.add(point))
              transformedScanners.splice(i, 1)
              scannerCoords.push([dx, dy, dz])
              return
            }
          }
        }
      }
    }
  }
  while (transformedScanners.length) {
    yield { numLeft: transformedScanners.length }
    findMatch()
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
  const [numLeft, setNumLeft] = useState<number | undefined>()
  const [beacons, setBeacons] = useState<Set<string> | undefined>()
  const [scannerCoords, setScannerCoords] = useState<Coord[]>()

  useEffect(() => {
    const input = parseInput()
    const gen = locateScanners(input)

    const id = setInterval(() => {
      const { value } = gen.next()
      setNumLeft(value?.numLeft)
      if (value?.beacons) {
        const { beacons, scannerCoords } = value
        setBeacons(beacons)
        setScannerCoords(scannerCoords)
        setRunning(false)
        clearInterval(id)
      }
    }, 0)

    return () => clearInterval(id)
  }, [])

  return { running, numLeft, beacons, scannerCoords }
}

export const Part1 = () => {
  const { numLeft, beacons } = useSolution()

  if (!beacons)
    return (
      <p>
        {numLeft == null
          ? 'Locating scanners'
          : `${numLeft} scanners left to locate`}
        ... This takes a very long time...
      </p>
    )

  return (
    <p>
      There are a total of <Answer>{beacons.size}</Answer> beacons.
    </p>
  )
}

export const Part2 = () => {
  const { scannerCoords, numLeft } = useSolution()

  if (!scannerCoords)
    return (
      <p>
        {numLeft == null
          ? 'Locating scanners'
          : `${numLeft} scanners left to locate`}
        ... This takes a very long time...
      </p>
    )

  return (
    <p>
      The greatest distance between scannerCoords is{' '}
      <Answer>{getLargestManhattanDistance(scannerCoords)}</Answer>.
    </p>
  )
}
