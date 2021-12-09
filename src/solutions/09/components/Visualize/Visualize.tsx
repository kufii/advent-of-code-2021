import { h, Fragment } from 'preact'
import { Visualization } from '/components'
import { pointToKey } from '/solutions/util'

interface Props {
  map: number[][]
  highlightCoords: Set<string>
}

export const Visualize = ({ map, highlightCoords }: Props) => (
  <Visualization>
    {map.map((line, y) => (
      <Fragment key={`y=${y}`}>
        {line.map((cell, x) =>
          highlightCoords.has(pointToKey({ x, y })) ? (
            <strong>{cell}</strong>
          ) : (
            cell
          )
        )}
        <br />
      </Fragment>
    ))}
  </Visualization>
)
