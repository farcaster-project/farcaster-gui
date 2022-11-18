import { useContext, useEffect, useMemo } from "react"
import { getRpcEndpoint } from "../components/utils"
import { FarcasterClient } from "../proto/FarcasterServiceClientPb"
import SettingsContext, { Settings } from "./settings-provider"

// Custom hook to fire a callback at a certain rate.
// Note: The callback probably needs to be wrapped into a useCallback
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

// Custom hook that creates an gRPC Farcaster Client based on settings
export function useRpcService(): FarcasterClient {
  const [settings, _] = useSettings()
  return useMemo(() => {
    const endpoint = getRpcEndpoint(settings)
    return new FarcasterClient(endpoint)
  }, [settings])
}
