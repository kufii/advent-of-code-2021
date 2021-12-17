import { h } from 'preact'
import { Answer } from '/components'
import input from './input'
import { maxBy, Point, range } from '../util'

const parseInput = () => {
  const { xFrom, xTo, yFrom, yTo } = input.match(
    /^target area: x=(?<xFrom>[-\d]+)\.\.(?<xTo>[-\d]+), y=(?<yFrom>[-\d]+)\.\.(?<yTo>[-\d]+)$/iu
  )!.groups!
  return {
    from: { x: Number(xFrom), y: Number(yFrom) },
    to: { x: Number(xTo), y: Number(yTo) }
  }
}

interface Trajectory {
  dx: number
  dy: number
  maxY: number
}

const launch = (dx: number, dy: number, from: Point, to: Point) => {
  const pos = { x: 0, y: 0 }
  let maxY = 0
  while (pos.x <= to.x && pos.y >= from.y) {
    pos.x += dx
    pos.y += dy
    maxY = Math.max(maxY, pos.y)
    dy--
    if (dx) dx > 0 ? dx-- : dx++
    if (pos.y <= to.y && pos.y >= from.y && pos.x >= from.x && pos.x <= to.x) {
      return maxY
    }
  }
}

const getTrajectories = (from: Point, to: Point) => {
  const matches: Trajectory[] = []
  for (const dy of range(from.y, 1000)) {
    for (const dx of range(
      Math.min(from.x, to.x, 0),
      Math.max(from.x, to.x, 0)
    )) {
      const maxY = launch(dx, dy, from, to)
      if (maxY != null) matches.push({ dx, dy, maxY })
    }
  }
  return matches
}

export const Part1 = () => {
  const { from, to } = parseInput()
  const { dx, dy, maxY } = getTrajectories(from, to).reduce(
    maxBy((t) => t.maxY)
  )
  return (
    <p>
      The probe reaches a y position of <Answer>{maxY}</Answer> with initial
      velocity{' '}
      <strong>
        {dx},{dy}
      </strong>
      .
    </p>
  )
}

export const Part2 = () => {
  const { from, to } = parseInput()
  const trajectories = getTrajectories(from, to)
  return (
    <p>
      The probe reaches the target area with{' '}
      <Answer>{trajectories.length}</Answer> different trajectories.
    </p>
  )
}
