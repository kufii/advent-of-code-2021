import { h } from 'preact'
import { Link } from 'preact-router/match'
import { baseRoute } from '../../baseRoute'
import style from './style.css'

export const Header = () => (
  <header class={style.header}>
    <Link class={style.logo} href={`${baseRoute}/`}>
      advent of code 2021
    </Link>
    <nav>
      <Link activeClassName={style.active} href={`${baseRoute}/`}>
        Home
      </Link>
    </nav>
  </header>
)
