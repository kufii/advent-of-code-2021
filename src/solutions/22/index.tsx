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

const rangeIntersects = (a: Range, b: Range) =>
  (['x', 'y', 'z'] as const).every((axis) =>
    [
      [a, b],
      [b, a]
    ].some(
      ([a, b]) => a.from[axis] <= b.from[axis] && b.from[axis] <= a.to[axis]
    )
  )

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

const removeRange = (range: Range, remove: Range) => {
  const newRanges = []

  if (remove.from.y > range.from.y)
    newRanges.push({
      from: range.from,
      to: { ...range.to, y: remove.from.y - 1 }
    })
  if (remove.to.y < range.to.y)
    newRanges.push({
      from: { ...range.from, y: remove.to.y + 1 },
      to: range.to
    })
  if (remove.from.x > range.from.x)
    newRanges.push({
      from: { ...range.from, y: Math.max(range.from.y, remove.from.y) },
      to: {
        ...range.to,
        x: remove.from.x - 1,
        y: Math.min(range.to.y, remove.to.y)
      }
    })
  if (remove.to.x < range.to.x)
    newRanges.push({
      from: {
        ...range.from,
        x: remove.to.x + 1,
        y: Math.max(range.from.y, remove.from.y)
      },
      to: { ...range.to, y: Math.min(range.to.y, remove.to.y) }
    })
  if (remove.from.z > range.from.z)
    newRanges.push({
      from: {
        ...range.from,
        x: Math.max(range.from.x, remove.from.x),
        y: Math.max(range.from.y, remove.from.y)
      },
      to: {
        x: Math.min(range.to.x, remove.to.x),
        y: Math.min(range.to.y, remove.to.y),
        z: remove.from.z - 1
      }
    })
  if (remove.to.z < range.to.z)
    newRanges.push({
      from: {
        x: Math.max(range.from.x, remove.from.x),
        y: Math.max(range.from.y, remove.from.y),
        z: remove.to.z + 1
      },
      to: {
        ...range.to,
        x: Math.min(range.to.x, remove.to.x),
        y: Math.min(range.to.y, remove.to.y)
      }
    })

  return newRanges
}

const getRanges = (steps: Step[]) => {
  const ranges: Range[] = []
  for (const { type, ...range } of steps) {
    for (let i = 0; i < ranges.length; i++) {
      const r = ranges[i]
      if (!rangeIntersects(r, range)) continue

      const newRanges = removeRange(r, range)
      ranges.splice(i, 1, ...newRanges)
      i += newRanges.length - 1
    }
    if (type === 'on') {
      ranges.push(range)
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
