import { ComponentChild, h, Fragment } from 'preact'
import { classNames } from '/shared/web-utilities/util'
import style from './style.css'
import { Button, Icon } from '..'
import { setShowVisualization, useStore } from '/store'

interface Props {
  class?: string
  children: ComponentChild
}

export const Visualization = ({ class: className, children }: Props) => {
  const showVisualization = useStore((s) => s.showVisualization)
  return (
    <>
      <div>
        <Button
          onClick={() => setShowVisualization(!showVisualization)}
          plain
          compact
        >
          <Icon name={showVisualization ? 'eye-off' : 'eye'} />
          {showVisualization ? 'Hide' : 'Show'} visualization
        </Button>
      </div>
      {showVisualization && (
        <pre class={classNames(style.container, className)}>{children}</pre>
      )}
    </>
  )
}
