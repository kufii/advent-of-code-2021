import { h } from 'preact'
import { Button } from '../Button'
import { Icon } from '../Icon'

interface Props {
  children: string | number
}

export const Answer = ({ children }: Props) => (
  <span>
    <strong>{children}</strong>
    <Button
      onClick={() => navigator.clipboard.writeText(children.toString())}
      plain
      compact
      ariaLabel="copy answer to clipboard"
    >
      <Icon name="clipboard" />
    </Button>
  </span>
)
