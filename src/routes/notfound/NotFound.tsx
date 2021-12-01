import { FunctionalComponent, h } from 'preact'
import { Link } from 'preact-router/match'

export const NotFound: FunctionalComponent = () => (
  <div>
    <h1>Error 404</h1>
    <p>That page doesn&apos;t exist.</p>
    <Link href="/">Back to Home</Link>
  </div>
)
