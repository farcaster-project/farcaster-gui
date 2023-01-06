import { ReactNode, useRef } from 'react'
import { toast } from 'react-toastify'

export function Copy({ data, extra, btn }: { data: ReactNode; extra?: ReactNode; btn: ReactNode }) {
  const code = useRef<HTMLElement | null>(null)

  const copy = async () => {
    if (code.current) {
      await navigator.clipboard.writeText(code.current.innerText)
      toast('Copied to clipboard', { autoClose: 1500, progress: undefined, theme: 'colored' })
    }
  }

  return (
    <div className="flex items-center relative space-x-2">
      <code ref={code}>{data}</code>
      <div>{extra}</div>
      <button className="absolue top-0 right-0" onClick={copy}>
        {btn}
      </button>
    </div>
  )
}
