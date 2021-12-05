import { h } from 'preact'
import { useEffect } from 'preact/hooks'
import { Route, Router } from 'preact-router'
import { createHashHistory, UnregisterCallback } from 'history'

import { resetStore } from '/store'
import { Header, Nav } from '/components'
import NotFound from '/routes/NotFound'
import ViewDay from '/routes/ViewDay'
import style from './style.css'

export const App = () => {
  const history =
    typeof window !== 'undefined' ? createHashHistory() : undefined
  useEffect(() => {
    let unlisten: UnregisterCallback | undefined
    if (history) unlisten = history.listen(() => resetStore())
    return () => unlisten?.()
  }, [history])
  return (
    <div id="preact_root" class={style.container}>
      <Header />
      <Nav />
      <main class={style.pageContainer}>
        <Router history={history}>
          <Route path="/:day?" component={ViewDay} />
          <NotFound default />
        </Router>
      </main>
    </div>
  )
}
