import { h, Fragment } from 'preact'
import { Button, CodeViewer, Icon, Solution } from '/components'
import days, { Solution as SolutionType } from '/solutions'
import { setDay, setPart, setShowCode, useStore } from '/store'
import style from './style.css'
import NotFound from '../NotFound'
import { newTab } from '/shared/web-utilities/util'
import { useEffect } from 'preact/hooks'

interface Props {
  day?: string
}

const parseDay = (dayString?: string) => {
  if (!(dayString || '').match(/^\d*$/u)) return null
  const day = Number(dayString || '1')
  if (day < 1 || day > 25) return null
  return day
}

export const ViewDay = ({ day: dayString }: Props) => {
  const day = parseDay(dayString)
  const { part, showCode } = useStore()

  useEffect(() => {
    if (day) setDay(day)
  }, [day])

  if (!day) return <NotFound />
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
