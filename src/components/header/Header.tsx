import { h } from 'preact'
import { Link } from 'preact-router/match'
import { useState } from 'preact/hooks'
import { baseRoute } from '../../baseRoute'
import { classNames } from '../../shared/web-utilities/util'
import { Icon } from '../Icon'
import { Portal } from '../Portal'
import style from './style.css'

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const closeNav = () => setIsNavOpen(false)

  return (
    <header onClick={closeNav} class={style.header}>
      <Link onClick={closeNav} class={style.logo} href={`${baseRoute}/`}>
        advent of code 2021
      </Link>
      <nav>
        <button
          class={style.navBtn}
          onClick={(e) => {
            setIsNavOpen(!isNavOpen)
            e.stopImmediatePropagation()
          }}
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
                  href={`${baseRoute}/`}
                >
                  Day 1
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeNav}
                  activeClassName={style.active}
                  href={`${baseRoute}/2`}
                >
                  Day 2
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeNav}
                  activeClassName={style.active}
                  href={`${baseRoute}/3`}
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
