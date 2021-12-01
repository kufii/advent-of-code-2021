import { h } from 'preact'
import { useEffect } from 'preact/hooks'
import { Route, Router } from 'preact-router'
import { createHashHistory } from 'history'

import { resetStore } from '/store'
import { Header, Nav } from '/components'
import NotFound from '/routes/NotFound'
import ViewDay from '/routes/ViewDay'
import style from './style.css'

export const App = () => {
  const history = createHashHistory()
  useEffect(() => {
    const unlisten = history.listen(() => resetStore())
    return () => unlisten()
  }, [history])
  return (
    <div id="preact_root" class={style.container}>
      <Header />
      <Nav />
      <main class={style.pageContainer}>
        <Router history={history as any}>
          <Route path="/:day?" component={ViewDay} />
          <NotFound default />
        </Router>
      </main>
    </div>
  )
}
