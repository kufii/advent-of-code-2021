import { h } from 'preact'
import { useState } from 'preact/hooks'
import { Icon } from '../Icon'
import { Portal } from '../Portal'

interface Props {
  children: JSX.Element
}

export const HamburgerMenu = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      <Icon name="menu" />
      {isOpen ? <Portal>{children}</Portal> : null}
    </button>
  )
}
