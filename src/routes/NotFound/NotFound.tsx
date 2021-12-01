import { FunctionalComponent, h } from 'preact'
import { Link } from 'preact-router/match'
import { baseRoute } from '../../baseRoute'

export const NotFound: FunctionalComponent = () => (
  <div>
    <h1>Error 404</h1>
    <p>That page doesn&apos;t exist.</p>
    <Link href={`${baseRoute}/`}>Back to Home</Link>
  </div>
)
