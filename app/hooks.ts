import { useContext, useEffect } from "react"
import SettingsContext, { Settings } from "./settings-provider"

export function useRefresh(callback: () => void, rate: number) {
  useEffect(() => {
    callback()
    const handle = setInterval(() => {
      callback()
    }, rate)
    return () => clearInterval(handle)
  }, [callback, rate])
}

// Custom hook to access the global settings of the application
export function useSettings(): [Settings, (settings: Settings) => void] {
  const { settings, saveSettings } = useContext(SettingsContext)
  return [settings, saveSettings]
}
