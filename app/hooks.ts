import { RpcError } from "grpc-web"
import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { FarcasterClient } from "../proto/FarcasterServiceClientPb"
import ConnectionContext from "./connection-provider"
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

// Custom hook to access the global connection state of the application
export function useConnected(): [boolean | null,  RpcError?] {
  const { connected, error } = useContext(ConnectionContext)
  return [connected, error]
}

// Custom hook to access the global connection functions of the application
export function useOnConnection(): [() => void, (err?: RpcError) => void] {
  const { onConnect, onError } = useContext(ConnectionContext)
  return [onConnect, onError]
}

// Custom hook that creates an gRPC Farcaster Client based on settings
export function useRpcService(): FarcasterClient {
  const [settings] = useSettings()
  return useMemo(() => {
    const endpoint = getRpcEndpoint(settings.grpcHost, settings.grpcPort)
    return new FarcasterClient(endpoint)
  }, [settings.grpcHost, settings.grpcPort])
}

// Return the RPC URL based on host and port
function getRpcEndpoint(grpcHost: string, grpcPort: string): string {
  return `http://${grpcHost}:${grpcPort}`
}

// Definition of a result callback handler used to intercept client errors
export type ResultCallbackHandler = <T>(success?: (res: T) => void, error?: (err: RpcError) => void) => (err: RpcError, res: T) => void

// Custom hook that creates an gRPC Farcaster Client based on settings and
// return an array containing the client, the state of the connection (connected
// or not), and a result callback handler to intercept client errors.
export function useRpc(): [FarcasterClient, ResultCallbackHandler] {
  const [settings] = useSettings()
  const [onConnect, onError] = useOnConnection()

  const fcd = useMemo(() => {
    const endpoint = getRpcEndpoint(settings.grpcHost, settings.grpcPort)
    return new FarcasterClient(endpoint)
  }, [settings.grpcHost, settings.grpcPort])

  const res = useCallback<ResultCallbackHandler>((success, error) => {
    return (err, res) => {
      if (err) {
        onError(err)
        if (error) error(err)
        return
      }
      onConnect()
      if (success) success(res)
    }
  }, [onConnect, onError])

  return [fcd, res]
}
