import { FunctionalComponent, h } from 'preact'
import style from './style.css'

export const NotFound: FunctionalComponent = () => (
  <div class={style.container}>
    <h1>Error 404</h1>
    <p>That page doesn&apos;t exist.</p>
    <a href="#">Back to Home</a>
  </div>
)
