'use client'

import { cva } from 'class-variance-authority'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useConnected } from '../../../app/hooks'

export type ConnectionStatus = 'connecting...' | 'connected' | 'disconnected'

const connectionLabel = cva(['rounded-md', 'py-1', 'px-4', 'shadow'], {
  variants: {
    status: {
      'connecting...': ['bg-gray-600', 'text-slate-50'],
      connected: ['bg-green-600', 'text-green-50'],
      disconnected: ['bg-rose-700', 'text-rose-50'],
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
  const status: ConnectionStatus = connected === null ? connecting : connected ? connect : disconnected

  useEffect(() => {
    switch (status) {
      case 'connected':
        toast.info('You are now connected to your node!')
        break
      case 'disconnected':
        toast.error('Your node is disconnected!')
        break
    }
  }, [status])

  return (
    <div className="text-center">
      <div className={connectionLabel({ status })}>{status}</div>
    </div>
  )
}
