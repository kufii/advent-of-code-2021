import { ComponentChildren, h } from 'preact'
import { classNames, newTab } from '/shared/web-utilities/util'
import style from './style.css'

interface Props {
  primary?: boolean
  plain?: boolean
  compact?: boolean
  disabled?: boolean
  ariaLabel?: string
  onClick?(): void
  href?: string
  openInNewTab?: boolean
  class?: string
  children: ComponentChildren
}

export const Button = ({
  primary,
  plain,
  compact,
  disabled,
  ariaLabel,
  onClick,
  href,
  openInNewTab,
  class: className,
  children
}: Props) => {
  const props = {
    class: classNames(
      style.button,
      primary && style.primary,
      plain && style.plain,
      compact && style.compact,
      className
    ),
    disabled,
    onClick: disabled ? undefined : onClick,
    href: disabled ? undefined : href,
    'aria-label': ariaLabel,
    ...(openInNewTab && newTab)
  }
  return href && !disabled ? (
    <a {...props}>{children}</a>
  ) : (
    <button {...props}>{children}</button>
  )
}
