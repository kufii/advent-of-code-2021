import { h, render } from 'preact'
import { useEffect, useRef } from 'preact/hooks'

interface Props {
  children: JSX.Element
}

export const Portal = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    ref.current = div
    return () => {
      render(null, div)
      div.remove()
    }
  }, [])

  useEffect(() => {
    if (!ref.current) return
    render(children, ref.current)
  }, [children])
  return null
}
