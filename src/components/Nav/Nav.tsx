import { h } from 'preact'
import { classNames } from '/shared/web-utilities/util'
import { setNavOpen, useStore } from '/store'
import style from './style.css'
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
            <a href="#/1" tabIndex={navOpen ? undefined : -1}>
              Day 1
            </a>
          </li>
          <li>
            <a href="#/2" tabIndex={navOpen ? undefined : -1}>
              Day 2
            </a>
          </li>
          <li>
            <a href="#/3" tabIndex={navOpen ? undefined : -1}>
              Day 3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
