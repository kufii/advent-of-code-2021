import { h } from 'preact'
import { Route, Router } from 'preact-router'

import { baseRoute } from '../../baseRoute'
import Home from '../../routes/Home'
import NotFound from '../../routes/NotFound'
import { Header } from '../Header'
import style from './style.css'

export const App = () => (
  <div id="preact_root">
    <Header />
    <div class={style.container}>
      <Router>
        <Route path={`${baseRoute}/`} component={Home} />
        <NotFound default />
      </Router>
    </div>
  </div>
)
