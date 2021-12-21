import { h } from 'preact'
import { Answer } from '/components'
import input from './input'
import { memoize, nestedLoop, nTimes, range } from '../util'

const parseInput = () =>
  input
    .split('\n')
    .map((s) => s.match(/\d+$/u)!)
    .map((n) => Number(n) - 1)

const runDeterministic = (players: number[]) => {
  const board = range(1, 10)
  const scores = [0, 0]
  let die = 1
  let player = 0

  while (scores.every((n) => n < 1000)) {
    nTimes(3, () => {
      players[player] += die
      players[player] %= board.length
      die++
    })
    scores[player] += board[players[player]]
    player = player === 0 ? 1 : 0
  }

  return { scores, die: die - 1 }
}

const runQuantum = (players: number[]) => {
  const board = range(1, 10)

  const recurse = memoize(
    (positions: number[], scores: number[], player) => {
      if (scores.some((n) => n >= 21)) {
        const lastPlayer = player === 0 ? 1 : 0
        return lastPlayer === 0 ? [1, 0] : [0, 1]
      }

      const wins = [0, 0]
      for (const [d1, d2, d3] of nestedLoop(3, 1, 3)) {
        const newPos = positions.slice()
        const newScores = scores.slice()
        newPos[player] += d1 + d2 + d3
        newPos[player] %= board.length
        newScores[player] += board[newPos[player]]
        const [wins1, wins2] = recurse(newPos, newScores, player === 0 ? 1 : 0)
        wins[0] += wins1
        wins[1] += wins2
      }
      return wins
    },
    (positions, scores, players) => [...positions, ...scores, players].join(',')
  )
  return recurse(players, [0, 0], 0)
}

export const Part1 = () => {
  const { scores, die } = runDeterministic(parseInput())
  const result = Math.min(...scores) * die
  const [score1, score2] = scores
  return (
    <p>
      After rolling the deterministic die {die} times, player 1 ended with{' '}
      {score1} points, and player 2 ended with {score2} points. The result is{' '}
      <Answer>{result}</Answer>.
    </p>
  )
}

export const Part2 = () => {
  const wins = runQuantum(parseInput())
  const [wins1, wins2] = wins
  const winner = wins1 > wins2 ? 1 : 2
  const loser = winner === 2 ? 1 : 2
  return (
    <p>
      When using the quantum die, player {winner} wins in{' '}
      <Answer>{Math.max(...wins)}</Answer> universes, and player{loser} wins in{' '}
      {Math.min(...wins)} universes.
    </p>
  )
}
