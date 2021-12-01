import { h } from 'preact'
import { classNames } from '../../shared/web-utilities/util'
import style from './style.css'

interface Props {
  primary?: boolean
  plain?: boolean
  ariaLabel?: string
  onClick(): void
  children: JSX.Element | string
}

export const Button = ({
  primary,
  plain,
  ariaLabel,
  onClick,
  children
}: Props) => (
  <button
    class={classNames(
      style.button,
      primary && style.primary,
      plain && style.plain
    )}
    onClick={onClick}
    aria-label={ariaLabel}
  >
    {children}
  </button>
)
