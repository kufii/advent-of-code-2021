import { h, Fragment } from 'preact'
import style from './style.css'

interface Props {
  board: number[][]
  marks: string[][]
}

export const Bingo = ({ board, marks }: Props) => (
  <div>
    <div class={style.bingo}>
      {board.map((line, y) => (
        <Fragment key={y}>
          {line.map((cell, x) =>
            marks[y][x] ? <strong>{cell}</strong> : <span>{cell}</span>
          )}
        </Fragment>
      ))}
    </div>
  </div>
)
