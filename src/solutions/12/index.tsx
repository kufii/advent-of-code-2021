import { h } from 'preact'
import { Answer } from '/components'
import input from './input'

const parseInput = () =>
  input
    .split('\n')
    .map((line) => line.split('-'))
    .reduce((acc, [from, to]) => {
      if (!acc[from]) acc[from] = new Set()
      if (!acc[to]) acc[to] = new Set()
      if (to !== 'start') acc[from].add(to)
      if (from !== 'start') acc[to].add(from)
      return acc
    }, {} as Record<string, Set<string>>)

const isSmallCave = (cave: string) =>
  cave !== 'start' && cave !== 'end' && Boolean(cave.match(/[a-z]/u))

interface TraverseOptions {
  hasVisitedSmallCave?: boolean
  canVisitTwice?: boolean
}

const traverse = (
  caves: Record<string, Set<string>>,
  { hasVisitedSmallCave, canVisitTwice }: TraverseOptions = {}
) => {
  let pathsCount = 0
  const recurse = (
    node: string,
    prevVisited: Set<string> = new Set(),
    visitedTwice = false
  ) => {
    const visited = new Set(prevVisited)
    visited.add(node)
    if (prevVisited.has(node) && isSmallCave(node)) visitedTwice = true

    if (node === 'end') {
      if (!hasVisitedSmallCave || [...visited.keys()].some(isSmallCave))
        pathsCount++
      return
    }

    for (const cave of caves[node].values()) {
      if (
        !(
          (!canVisitTwice || visitedTwice) &&
          visited.has(cave) &&
          isSmallCave(cave)
        )
      )
        recurse(cave, visited, visitedTwice)
    }
  }
  recurse('start')
  return pathsCount
}

export const Part1 = () => {
  const caves = parseInput()
  const numPaths = traverse(caves, { hasVisitedSmallCave: true })
  return (
    <p>
      There are <Answer>{numPaths}</Answer> paths through the cave system that
      visit small caves at least once.
    </p>
  )
}

export const Part2 = () => {
  const caves = parseInput()
  const numPaths = traverse(caves, { canVisitTwice: true })
  return (
    <p>
      There are <Answer>{numPaths}</Answer> paths through the cave system when
      allowing to pass through a small cave twice.
    </p>
  )
}
