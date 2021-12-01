import { h } from 'preact'
import { Icon } from '/components'
import { setNavOpen, useStore } from '/store'
import style from './style.css'

export const Header = () => {
  const { navOpen } = useStore()
  return (
    <header class={style.header}>
      <a class={style.logo} href="#/">
        advent of code 2021
      </a>
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
