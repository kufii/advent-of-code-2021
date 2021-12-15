import { h } from 'preact'
import { Array2d, Visualization } from '/components'
import { pointToKey } from '/solutions/util'

interface Props {
  map: number[][]
  highlightCoords: Set<string>
}

export const Visualize = ({ map, highlightCoords }: Props) => (
  <Visualization>
    <Array2d
      array={map.map((line, y) =>
        line.map((cell, x) =>
          highlightCoords.has(pointToKey({ x, y })) ? (
            <strong>{cell}</strong>
          ) : (
            cell
          )
        )
      )}
    />
  </Visualization>
)
