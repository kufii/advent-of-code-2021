import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import { setCode, useStore } from '/store'
import style from './style.css'

interface Props {
  day: number
}

export const CodeViewer = ({ day }: Props) => {
  const { showCode, code } = useStore()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!showCode || code) return
    const loadCode = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/kufii/advent-of-code-2021@main/src/solutions/${day
            .toString()
            .padStart(2, '0')}/index.tsx`
        )
        const text = await response.text()
        setCode(text)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err)
        setCode('Not Found')
      } finally {
        setLoading(false)
      }
    }
    loadCode()
  }, [day, code, showCode])

  if (!showCode) return null

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre class={style.container} data-lang="React TSX">
          <code
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: highlight(code, languages.typescript, 'typescript')
            }}
          />
        </pre>
      )}
    </div>
  )
}
