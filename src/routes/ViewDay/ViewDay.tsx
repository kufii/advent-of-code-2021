import { h } from 'preact'
import { Button } from '../../components/Button'
import { Solution } from '../../components/Solution'
import days, { Solution as SolutionType } from '../../solutions'
import { setPart, useStore } from '../../store'
import style from './style.css'

interface Props {
  day?: number
}

export const ViewDay = ({ day }: Props) => {
  day = day || 1
  const part = useStore((s) => s.part)
  const solution = days[day - 1] as SolutionType | undefined
  return (
    <div>
      <h1>Day {day}</h1>
      {!solution?.Part1 && !solution?.Part2 ? (
        <p>Day {day} is not yet implemented</p>
      ) : (
        <div class={style.container}>
          <div class={style.buttons}>
            {solution?.Part1 && (
              <Button onClick={() => setPart(1)}>Part 1</Button>
            )}
            {solution?.Part2 && (
              <Button onClick={() => setPart(2)}>Part 2</Button>
            )}
          </div>
          {solution && part ? (
            <Solution solution={solution} part={part} />
          ) : null}
        </div>
      )}
    </div>
  )
}
