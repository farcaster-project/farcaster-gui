'use client'

import { RpcError, StatusCode } from 'grpc-web'
import { createContext, ReactNode, useCallback, useState } from 'react'

// Interface for the connection provider. Contains the connection state and
// a setter.
interface ConnectionProvider {
  // if null we are trying to connect, if true a request did succeed, false we
  // received an error
  connected: boolean | null
  error?: RpcError
  onConnect: () => void
  onError: (err?: RpcError) => void
}

// Create the context with the default value and an empty setter function.
const ConnectionContext = createContext<ConnectionProvider>({
  connected: null,
  error: undefined,
  onConnect: () => {},
  onError: () => {},
})

// Create the connection provider that passes the connected state value and the
// last registered error with onConnect and onError functions.
export function ConnectionProvider({ children }: { children: ReactNode }) {
  const [connected, connectedSet] = useState<boolean | null>(null)
  const [error, errorSet] = useState<RpcError | undefined>(undefined)

  const onConnect = useCallback(() => {
    errorSet(undefined)
    connectedSet(true)
  }, [connectedSet, errorSet])

  const onError = useCallback(
    (err?: RpcError) => {
      if (err?.code === StatusCode.UNKNOWN) {
        // type of error received on network errors (e.g. CORS errors)
        errorSet(undefined)
        connectedSet(false)
      } else {
        // we are connected and received an error from the service
        errorSet(err)
        connectedSet(true)
      }
    },
    [connectedSet, errorSet]
  )

  return (
    <ConnectionContext.Provider value={{ connected, error, onConnect, onError }}>{children}</ConnectionContext.Provider>
  )
}

// Export the consumer for the connection context, use to create the
// useConnected custom hook
export const ConnectionConsumer = ConnectionContext.Consumer

export default ConnectionContext
