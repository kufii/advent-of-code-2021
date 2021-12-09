import { ComponentChild, h } from 'preact'
import style from './style.css'
import { classNames } from '/shared/web-utilities/util'

interface Props {
  class?: string
  children: ComponentChild
}

export const Visualization = ({ class: className, children }: Props) => (
  <pre class={classNames(style.container, className)}>{children}</pre>
)
