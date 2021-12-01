import { h } from 'preact'
import feather, { FeatherAttributes } from 'feather-icons'
import style from './style.css'

interface Props extends FeatherAttributes {
  name: string
}

export const Icon = ({ name, ...props }: Props) => (
  <span
    class={style.container}
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: feather.icons[name].toSvg(props) }}
  />
)
