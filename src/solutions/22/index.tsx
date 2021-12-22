import { h } from 'preact'
import { Answer } from '/components'
import input from './input'
import { sum } from '../util'

const parseInput = () =>
  input
    .split('\n')
    .map(
      (s) =>
        s.match(
          /^(?<type>on|off) x=(?<xFrom>[-\d]+)\.\.(?<xTo>[-\d]+),y=(?<yFrom>[-\d]+)\.\.(?<yTo>[-\d]+),z=(?<zFrom>[-\d]+)\.\.(?<zTo>[-\d]+)$/iu
        )!.groups!
    )
    .map(({ type, xFrom, xTo, yFrom, yTo, zFrom, zTo }) => ({
      type,
      x: { from: Number(xFrom), to: Number(xTo) },
      y: { from: Number(yFrom), to: Number(yTo) },
      z: { from: Number(zFrom), to: Number(zTo) }
    }))

const key = (x: number, y: number, z: number) => `${x},${y},${z}`

type Range = [
  { x: number; y: number; z: number },
  { x: number; y: number; z: number }
]

interface Point {
  x: number
  y: number
  z: number
}

const rangeIntersects = (range1: Range, range: Range) =>
  ((range1[0].x <= range[0].x && range[0].x <= range1[1].x) ||
    (range[0].x <= range1[0].x && range1[0].x <= range[1].x)) &&
  ((range1[0].y <= range[0].y && range[0].y <= range1[1].y) ||
    (range[0].y <= range1[0].y && range1[0].y <= range[1].y)) &&
  ((range1[0].z <= range[0].z && range[0].z <= range1[1].z) ||
    (range[0].z <= range1[0].z && range1[0].z <= range[1].z))

const pointInRange = ([from, to]: Range, point: Point) =>
  point.x >= from.x &&
  point.x <= to.x &&
  point.y >= from.y &&
  point.y <= to.y &&
  point.z >= from.z &&
  point.z <= to.z

const getRanges = () => {
  const input = parseInput()
  const ranges: Range[] = []
  for (const { type, x, y, z } of input) {
    const range: Range = [
      { x: x.from, y: y.from, z: z.from },
      { x: x.to, y: y.to, z: z.to }
    ]
    for (let i = 0; i < ranges.length; i++) {
      const r = ranges[i]
      if (!rangeIntersects(r, range)) continue

      const newRanges: Range[] = []
      if (range[0].y > r[0].y)
        newRanges.push([r[0], { ...r[1], y: range[0].y - 1 }])
      if (range[1].y < r[1].y)
        newRanges.push([{ ...r[0], y: range[1].y + 1 }, r[1]])
      if (range[0].x > r[0].x)
        newRanges.push([
          { ...r[0], y: Math.max(r[0].y, range[0].y) },
          { ...r[1], y: Math.min(r[1].y, range[1].y), x: range[0].x - 1 }
        ])
      if (range[1].x < r[1].x)
        newRanges.push([
          { ...r[0], y: Math.max(r[0].y, range[0].y), x: range[1].x + 1 },
          { ...r[1], y: Math.min(r[1].y, range[1].y) }
        ])
      if (range[0].z > r[0].z)
        newRanges.push([
          {
            ...r[0],
            y: Math.max(r[0].y, range[0].y),
            x: Math.max(r[0].x, range[0].x)
          },
          {
            y: Math.min(r[1].y, range[1].y),
            x: Math.min(r[1].x, range[1].x),
            z: range[0].z - 1
          }
        ])
      if (range[1].z < r[1].z)
        newRanges.push([
          {
            x: Math.max(r[0].x, range[0].x),
            y: Math.max(r[0].y, range[0].y),
            z: range[1].z + 1
          },
          {
            ...r[1],
            x: Math.min(r[1].x, range[1].x),
            y: Math.min(r[1].y, range[1].y)
          }
        ])

      ranges.splice(i, 1, ...newRanges)
      if (!newRanges.length) i--
    }
    if (type === 'on') {
      ranges.push(range)
    }
  }
  return ranges
}

export const Part1 = () => {
  const ranges = getRanges()

  let numOn = 0
  for (let x = -50; x <= 50; x++) {
    for (let y = -50; y <= 50; y++) {
      for (let z = -50; z <= 50; z++) {
        if (ranges.some((r) => pointInRange(r, { x, y, z }))) numOn++
      }
    }
  }

  return (
    <p>
      Hello world <Answer>{numOn}</Answer>
    </p>
  )
}

export const Part2 = () => {
  const ranges = getRanges()

  return (
    <p>
      Hello world{' '}
      <Answer>
        {ranges
          .map(
            ([from, to]) =>
              (to.x - from.x + 1) * (to.y - from.y + 1) * (to.z - from.z + 1)
          )
          .reduce(sum)}
      </Answer>
    </p>
  )
}
