'use client'

import { useConnected } from './hooks'

export default function ConnectHeader() {
  const [connected, lastRpcError] = useConnected()

  const connecting = 'connecting... (waiting for the first request)'
  const connect = 'connected'
  const disconnect = 'disconnected! (check your configuration and if your node is running)'
  const status = connected === null ? connecting : connected ? connect : disconnect

  return (
    <div className="p-4 text-center">
      <span>{status}</span>
      <span>{lastRpcError && `error: ${lastRpcError.message}`}</span>
    </div>
  )
}
