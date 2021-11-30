import { FunctionalComponent, h } from 'preact'
import { Route, Router } from 'preact-router'

import { baseRoute } from '../baseRoute'
import Home from '../routes/home'
import Profile from '../routes/profile'
import NotFoundPage from '../routes/notfound'
import Header from './header'

const App: FunctionalComponent = () => (
  <div id="preact_root">
    <Header />
    <Router>
      <Route path={`${baseRoute}/`} component={Home} />
      <Route path={`${baseRoute}/profile/`} component={Profile} user="me" />
      <Route path={`${baseRoute}/profile/:user`} component={Profile} />
      <NotFoundPage default />
    </Router>
  </div>
)

export default App
