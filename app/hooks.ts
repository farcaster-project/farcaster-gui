import { useEffect } from "react"

export function useRefresh(callback: () => void, rate: number) {
  useEffect(() => {
    callback()
    const handle = setInterval(() => {
      callback()
    }, rate)
    return () => clearInterval(handle)
  }, [callback, rate])
}
