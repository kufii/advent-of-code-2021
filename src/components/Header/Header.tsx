import { h } from 'preact'
import { Icon } from '/components'
import { setNavOpen, useStore } from '/store'
import { newTab } from '/shared/web-utilities/util'
import style from './style.css'

export const Header = () => {
  const navOpen = useStore((s) => s.navOpen)
  return (
    <header class={style.header}>
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
      <a class={style.logo} href="#/">
        advent of code 2021
      </a>
      <a
        class={style.navBtn}
        href="https://github.com/kufii/advent-of-code-2021"
        aria-label="open github repository"
        {...newTab}
      >
        <Icon name="github" />
      </a>
    </header>
  )
}
