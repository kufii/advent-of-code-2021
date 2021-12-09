import { h } from 'preact'
import { InfiniteGrid, output2dArray } from '/solutions/util'
import { Visualization } from '/components'
import style from './style.css'

interface Props {
  grid: InfiniteGrid<number>
}

export const Visualize = ({ grid }: Props) => (
  <Visualization class={style.container}>
    {output2dArray(
      grid
        .toArray()
        .map((line) =>
          line.map((cell) =>
            cell > 2 ? '▓' : cell === 2 ? '▒' : cell === 1 ? '░' : ' '
          )
        )
    )}
  </Visualization>
)
