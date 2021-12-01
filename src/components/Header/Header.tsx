import { h } from 'preact'
import { Link } from 'preact-router/match'
import { useState } from 'preact/hooks'
import { classNames } from '/shared/web-utilities/util'
import { Icon, Portal } from '/components'
import style from './style.css'

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const closeNav = () => setIsNavOpen(false)

  return (
    <header onClick={closeNav} class={style.header}>
      <Link onClick={closeNav} class={style.logo} href="#">
        advent of code 2021
      </Link>
      <nav>
        <button
          class={style.navBtn}
          onClick={(e) => {
            setIsNavOpen(!isNavOpen)
            e.stopImmediatePropagation()
          }}
          aria-label="open navigation menu"
        >
          <Icon name="menu" />
        </button>
      </nav>
      <Portal>
        <div
          class={classNames(style.sideNav, isNavOpen && style.active)}
          onClick={closeNav}
        >
          <nav
            onClick={(e) => {
              e.stopImmediatePropagation()
            }}
          >
            <ul>
              <li>
                <Link
                  onClick={closeNav}
                  activeClassName={style.active}
                  href="#/1"
                  tabIndex={isNavOpen ? undefined : -1}
                >
                  Day 1
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeNav}
                  activeClassName={style.active}
                  href="#/2"
                  tabIndex={isNavOpen ? undefined : -1}
                >
                  Day 2
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeNav}
                  activeClassName={style.active}
                  href="#/3"
                  tabIndex={isNavOpen ? undefined : -1}
                >
                  Day 3
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Portal>
    </header>
  )
}
