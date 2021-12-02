import { h, Fragment } from 'preact'
import { Button, CodeViewer, Icon, Solution } from '/components'
import days, { Solution as SolutionType } from '/solutions'
import { setPart, setShowCode, useStore } from '/store'
import style from './style.css'
import NotFound from '../NotFound'
import { newTab } from '/shared/web-utilities/util'

interface Props {
  day?: string
}

export const ViewDay = ({ day: dayString }: Props) => {
  const day = Number(dayString || '1')
  const { part, showCode } = useStore()
  if (!Number.isInteger(day) || day < 1 || day > 25) return <NotFound />
  const solution = days[day - 1] as SolutionType | undefined
  return (
    <div class={style.container}>
      <h1>
        Day {day}{' '}
        <a
          class={style.link}
          href={`https://adventofcode.com/2021/day/${day}`}
          {...newTab}
          aria-label="open advent of code problem"
        >
          <Icon name="external-link" />
        </a>
      </h1>
      {!solution?.Part1 && !solution?.Part2 ? (
        <p>Day {day} is not yet implemented</p>
      ) : (
        <>
          <div class={style.buttons}>
            {solution?.Part1 && (
              <Button onClick={() => setPart(1)}>Part 1</Button>
            )}
            {solution?.Part2 && (
              <Button onClick={() => setPart(2)}>Part 2</Button>
            )}
            <Button onClick={() => setShowCode(!showCode)} plain>
              {showCode ? 'Hide code' : 'Show code'}
            </Button>
          </div>
          <CodeViewer day={day} />
          {solution && part ? (
            <Solution solution={solution} part={part} />
          ) : null}
        </>
      )}
    </div>
  )
}
