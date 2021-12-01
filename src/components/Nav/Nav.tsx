import { h } from 'preact'
import { classNames } from '/shared/web-utilities/util'
import { setNavOpen, useStore } from '/store'
import style from './style.css'
import { Link } from 'preact-router'
import { useGlobalEvent } from '/shared/web-utilities/hooks/use-dom-event'

export const Nav = () => {
  const { navOpen } = useStore()
  useGlobalEvent('click', () => setNavOpen(false), {
    disabled: !navOpen
  })
  return (
    <div class={classNames(style.sideNav, navOpen && style.active)}>
      <nav
        onClick={(e) => {
          e.stopImmediatePropagation()
        }}
      >
        <ul>
          <li>
            <Link
              activeClassName={style.active}
              href="/1"
              tabIndex={navOpen ? undefined : -1}
            >
              Day 1
            </Link>
          </li>
          <li>
            <Link
              activeClassName={style.active}
              href="/2"
              tabIndex={navOpen ? undefined : -1}
            >
              Day 2
            </Link>
          </li>
          <li>
            <Link
              activeClassName={style.active}
              href="/3"
              tabIndex={navOpen ? undefined : -1}
            >
              Day 3
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
