import { h, Fragment } from 'preact'
import { make2dArray } from '../util'
import { Answer } from '/components'
import { Bingo } from './components'
import input from './input'

const parseInput = () => {
  const [nums, ...boards] = input.split('\n\n')
  return {
    nums: nums.split(',').map(Number),
    boards: boards.map((board) =>
      board.split('\n').map((line) => line.split(/ +/gu).map(Number))
    )
  }
}

const isWin = (board: string[][]) =>
  board.some((line) => line.every(Boolean)) ||
  board[0].some((_, x) => board.every((line) => line[x]))

const getScore = (board: number[][], marks: string[][], n: number) =>
  marks.reduce(
    (acc, line, y) =>
      (acc += line.reduce((acc, cell, x) => acc + (cell ? 0 : board[y][x]), 0)),
    0
  ) * n

const play = (nums: number[], boards: number[][][], firstWin = true) => {
  const bingos = boards.map(() => make2dArray(5, 5, ''))
  const wins = new Map<number, number>()
  let lastWin = -1
  for (const n of nums) {
    boards.forEach((board, i) => {
      if (wins.has(i)) return
      for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
          if (board[y][x] === n) {
            bingos[i][y][x] = 'x'
            if (isWin(bingos[i])) {
              lastWin = i
              wins.set(i, n)
            }
          }
        }
      }
    })
    if (firstWin && wins.size > 0) break
  }
  const board = boards[lastWin]
  const marks = bingos[lastWin]
  const score = getScore(board, marks, wins.get(lastWin)!)
  return { board, marks, score }
}

export const Part1 = () => {
  const { nums, boards } = parseInput()
  const { board, marks, score } = play(nums, boards)
  return (
    <>
      <p>
        The following board was the first board to win, with a score of{' '}
        <Answer>{score}</Answer>:
      </p>
      <Bingo board={board} marks={marks} />
    </>
  )
}

export const Part2 = () => {
  const { nums, boards } = parseInput()
  const { board, marks, score } = play(nums, boards, false)
  return (
    <>
      <p>
        The following board was the last board to win, with a score of{' '}
        <Answer>{score}</Answer>:
      </p>
      <Bingo board={board} marks={marks} />
    </>
  )
}
