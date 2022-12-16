'use client'

import { cva } from 'class-variance-authority'
import { useConnected } from '../../../app/hooks'

const connectionLabel = cva(['rounded-full', 'py-1', 'px-4', 'ring-1'], {
  variants: {
    status: {
      'connecting...': ['bg-slate-700', 'text-slate-50', 'ring-slate-600'],
      connected: ['bg-green-700', 'text-green-50', 'ring-green-600'],
      disconnected: ['bg-rose-700', 'text-rose-50', 'ring-rose-600'],
    },
  },
  defaultVariants: {
    status: 'connecting...',
  },
})

export default function ConnectStatus() {
  const [connected] = useConnected()

  const connecting = 'connecting...'
  const connect = 'connected'
  const disconnected = 'disconnected'
  const status = connected === null ? connecting : connected ? connect : disconnected

  return (
    <div className="text-center">
      <div className={connectionLabel({ status })}>{status}</div>
    </div>
  )
}
