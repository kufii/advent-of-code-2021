import { ComponentChild, h, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import { classNames } from '/shared/web-utilities/util'
import style from './style.css'
import { Button, Icon } from '..'

interface Props {
  class?: string
  children: ComponentChild
}

export const Visualization = ({ class: className, children }: Props) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <div>
        <Button onClick={() => setShow(!show)} plain compact>
          <Icon name={show ? 'eye-off' : 'eye'} />
          {show ? 'Hide' : 'Show'} visualization
        </Button>
      </div>
      {show && (
        <pre class={classNames(style.container, className)}>{children}</pre>
      )}
    </>
  )
}
