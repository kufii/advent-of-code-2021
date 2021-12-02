import { h } from 'preact'
import { classNames } from '/shared/web-utilities/util'
import { setNavOpen, useStore } from '/store'
import style from './style.css'
import { range } from '/solutions/util'

export const Nav = () => {
  const { navOpen } = useStore()
  const currentDay =
    location.hash.match(/#\/(?<day>[^/]+)/iu)?.groups?.day || '1'
  return (
    <div
      onClick={() => setNavOpen(false)}
      class={classNames(style.sideNav, navOpen && style.active)}
    >
      <nav
        onClick={(e) => {
          e.stopImmediatePropagation()
        }}
      >
        <ul>
          {range(1, 25).map((day) => (
            <li key={day}>
              <a
                href={`#/${day}`}
                class={classNames(
                  day.toString() === currentDay && style.active
                )}
                tabIndex={navOpen ? undefined : -1}
              >
                Day {day}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
