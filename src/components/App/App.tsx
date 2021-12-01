import { h } from 'preact'
import { Route, Router } from 'preact-router'
import { createHashHistory } from 'history'

import { baseRoute } from '../../baseRoute'
import NotFound from '../../routes/NotFound'
import ViewDay from '../../routes/ViewDay'
import { Header } from '../Header'
import style from './style.css'
import { useEffect } from 'preact/hooks'
import { resetStore } from '../../store'

export const App = () => {
  const history = createHashHistory()
  useEffect(() => {
    const unlisten = history.listen(() => resetStore())
    return () => unlisten()
  }, [history])
  return (
    <div id="preact_root">
      <Header />
      <div class={style.container}>
        <Router history={history as any}>
          <Route path={`${baseRoute}/:day?`} component={ViewDay} />
          <NotFound default />
        </Router>
      </div>
    </div>
  )
}
