'use client'

import { useConnected } from './hooks'

export default function ConnectHeader() {
  const [connected, lastRpcError] = useConnected()

  const connecting = 'connecting... (waiting for the first request)'
  const connect = 'connected'
  const disconnect = 'disconnected! (check your configuration and if your node is running)'
  const status = connected === null ? connecting : connected ? connect : disconnect

  return (
    <div className="text-center">
      <div className="rounded-full bg-emerald-700 text-emerald-50 py-1 px-4">{status}</div>
      {/*<div className="rounded-full bg-rose-700 text-rose-50 py-1 px-4">disconnected</div>*/}
      <span>{lastRpcError && `error: ${lastRpcError.message}`}</span>
    </div>
  )
}
