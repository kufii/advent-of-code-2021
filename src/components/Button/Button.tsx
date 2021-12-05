import { h } from 'preact'
import { classNames, newTab } from '/shared/web-utilities/util'
import style from './style.css'

interface Props {
  primary?: boolean
  plain?: boolean
  compact?: boolean
  ariaLabel?: string
  onClick?(): void
  href?: string
  openInNewTab?: boolean
  children: JSX.Element | string
}

export const Button = ({
  primary,
  plain,
  compact,
  ariaLabel,
  onClick,
  href,
  openInNewTab,
  children
}: Props) => {
  const props = {
    class: classNames(
      style.button,
      primary && style.primary,
      plain && style.plain,
      compact && style.compact
    ),
    onClick,
    href,
    'aria-label': ariaLabel,
    ...(openInNewTab && newTab)
  }
  return href ? (
    <a {...props}>{children}</a>
  ) : (
    <button {...props}>{children}</button>
  )
}
