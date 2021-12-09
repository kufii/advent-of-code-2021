import { h, Fragment } from 'preact'
import { Visualization } from '/components'
import style from './style.css'

interface Props {
  board: number[][]
  marks: string[][]
}

export const Bingo = ({ board, marks }: Props) => (
  <Visualization>
    <div class={style.bingo}>
      {board.map((line, y) => (
        <Fragment key={y}>
          {line.map((cell, x) =>
            marks[y][x] ? <strong>{cell}</strong> : <span>{cell}</span>
          )}
        </Fragment>
      ))}
    </div>
  </Visualization>
)
