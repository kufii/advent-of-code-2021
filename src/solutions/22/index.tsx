import { h } from 'preact'
import { Answer } from '/components'
import input from './input'
import { sum } from '../util'

interface Point {
  x: number
  y: number
  z: number
}

interface Range {
  from: Point
  to: Point
}

interface Step extends Range {
  type: string
}

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
      from: { x: Number(xFrom), y: Number(yFrom), z: Number(zFrom) },
      to: { x: Number(xTo), y: Number(yTo), z: Number(zTo) }
    }))

const rangeIntersects = (range1: Range, range2: Range) =>
  ((range1.from.x <= range2.from.x && range2.from.x <= range1.to.x) ||
    (range2.from.x <= range1.from.x && range1.from.x <= range2.to.x)) &&
  ((range1.from.y <= range2.from.y && range2.from.y <= range1.to.y) ||
    (range2.from.y <= range1.from.y && range1.from.y <= range2.to.y)) &&
  ((range1.from.z <= range2.from.z && range2.from.z <= range1.to.z) ||
    (range2.from.z <= range1.from.z && range1.from.z <= range2.to.z))

const getRangeSize = ({ from, to }: Range) =>
  (to.x - from.x + 1) * (to.y - from.y + 1) * (to.z - from.z + 1)

const toSubRange = ({ from, to }: Range, constrain: Range) => ({
  from: {
    x: Math.max(from.x, constrain.from.x),
    y: Math.max(from.y, constrain.from.y),
    z: Math.max(from.z, constrain.from.z)
  },
  to: {
    x: Math.min(to.x, constrain.to.x),
    y: Math.min(to.y, constrain.to.y),
    z: Math.min(to.z, constrain.to.z)
  }
})

const getRanges = (steps: Step[]) => {
  const ranges: Range[] = []
  for (const { type, from, to } of steps) {
    for (let i = 0; i < ranges.length; i++) {
      const r = ranges[i]
      if (!rangeIntersects(r, { from, to })) continue

      const newRanges: Range[] = []
      if (from.y > r.from.y)
        newRanges.push({ from: r.from, to: { ...r.to, y: from.y - 1 } })
      if (to.y < r.to.y)
        newRanges.push({ from: { ...r.from, y: to.y + 1 }, to: r.to })
      if (from.x > r.from.x)
        newRanges.push({
          from: { ...r.from, y: Math.max(r.from.y, from.y) },
          to: { ...r.to, x: from.x - 1, y: Math.min(r.to.y, to.y) }
        })
      if (to.x < r.to.x)
        newRanges.push({
          from: { ...r.from, x: to.x + 1, y: Math.max(r.from.y, from.y) },
          to: { ...r.to, y: Math.min(r.to.y, to.y) }
        })
      if (from.z > r.from.z)
        newRanges.push({
          from: {
            ...r.from,
            x: Math.max(r.from.x, from.x),
            y: Math.max(r.from.y, from.y)
          },
          to: {
            x: Math.min(r.to.x, to.x),
            y: Math.min(r.to.y, to.y),
            z: from.z - 1
          }
        })
      if (to.z < r.to.z)
        newRanges.push({
          from: {
            x: Math.max(r.from.x, from.x),
            y: Math.max(r.from.y, from.y),
            z: to.z + 1
          },
          to: {
            ...r.to,
            x: Math.min(r.to.x, to.x),
            y: Math.min(r.to.y, to.y)
          }
        })

      ranges.splice(i, 1, ...newRanges)
      i += newRanges.length - 1
    }
    if (type === 'on') {
      ranges.push({ from, to })
    }
  }
  return ranges
}

export const Part1 = () => {
  const ranges = getRanges(parseInput())
  const rangeToCheck = {
    from: { x: -50, y: -50, z: -50 },
    to: { x: 50, y: 50, z: 50 }
  }
  const subRanges = ranges
    .filter((r) => rangeIntersects(r, rangeToCheck))
    .map((range) => toSubRange(range, rangeToCheck))
  const numOn = subRanges.map(getRangeSize).reduce(sum)

  return (
    <p>
      After the reboot steps, <Answer>{numOn}</Answer> cubes are on in the
      initialization procedure region.
    </p>
  )
}

export const Part2 = () => {
  const ranges = getRanges(parseInput())
  const numOn = ranges.map(getRangeSize).reduce(sum)

  return (
    <p>
      After the reboot steps, <Answer>{numOn}</Answer> cubes are on.
    </p>
  )
}
