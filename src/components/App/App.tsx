import { h } from 'preact'
import { Route, Router } from 'preact-router'

import { baseRoute } from '../../baseRoute'
import NotFound from '../../routes/NotFound'
import ViewDay from '../../routes/ViewDay'
import { Header } from '../Header'
import style from './style.css'

export const App = () => (
  <div id="preact_root">
    <Header />
    <div class={style.container}>
      <Router>
        <Route path={`${baseRoute}/:day?`} component={ViewDay} />
        <NotFound default />
      </Router>
    </div>
  </div>
)
