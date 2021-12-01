import { h } from 'preact'
import { Link } from 'preact-router/match'
import { Icon } from '/components'
import { setNavOpen, useStore } from '/store'
import style from './style.css'

export const Header = () => {
  const { navOpen } = useStore()
  return (
    <header class={style.header}>
      <Link class={style.logo} href="/">
        advent of code 2021
      </Link>
      <div class={style.nav}>
        <button
          class={style.navBtn}
          onClick={(e) => {
            setNavOpen(!navOpen)
            e.stopImmediatePropagation()
          }}
          aria-label="open navigation menu"
        >
          <Icon name="menu" />
        </button>
      </div>
    </header>
  )
}
