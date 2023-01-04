'use client'

import { cva } from 'class-variance-authority'
import { useCallback, useEffect } from 'react'
import { useState } from 'react'
import { useConnected, useProfile, useRefresh, useRpc } from '../../../app/hooks'
import { HealthCheckRequest, HealthCheckResponse } from '../../../proto/farcaster_pb'
import { netToSelector } from '../../utils'

type HealthStatus = 'healthy' | 'not-healthy' | 'pending'

function isHealthy(connected: boolean | null, status: string | undefined): HealthStatus {
  // when not connected we return the syncer pending status
  if (!connected) return 'pending'
  // check status and return HealthStatus
  switch (status) {
    case 'Healthy':
      return 'healthy'
    case undefined:
      return 'pending'
    default:
      return 'not-healthy'
  }
}

const statusBullet = cva(['w-4', 'h-4', 'rounded-full', 'ring-1'], {
  variants: {
    health: {
      healthy: ['bg-green-700', 'ring-green-600'],
      'not-healthy': ['bg-amber-700', 'ring-amber-600'],
      pending: ['bg-gray-700 ', 'ring-gray-600'],
    },
  },
  defaultVariants: {
    health: 'pending',
  },
})

function SyncerRow({ name, health }: { name: string; health: HealthStatus }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-zinc-900">{name}</div>
      <div className="">
        <div className={statusBullet({ health: health })}></div>
      </div>
    </div>
  )
}

export default function SyncerStatus() {
  const [connected] = useConnected()
  const [profile] = useProfile()
  const [health, healthSet] = useState<HealthCheckResponse | null>(null)
  const [fcd, res] = useRpc()

  useRefresh(
    useCallback(() => {
      const query = fcd.healthCheck(
        new HealthCheckRequest().setSelector(netToSelector(profile.network)),
        null,
        res(healthSet)
      )
      return () => query.cancel()
    }, [fcd, profile.network, res]),
    120000
  )

  // if we loose connection we reset syncer status
  useEffect(() => {
    if (!connected) healthSet(null)
  }, [connected])

  // SAFETY: we know the result is a ReducedHealthReport because selector is set to profile.network
  return (
    <div className="flex flex-col bg-slate-500 rounded-md p-2 mb-3">
      <div className="text-sm font-medium text-slate-800">Syncers health:</div>
      <SyncerRow name="Bitcoin" health={isHealthy(connected, health?.getReducedHealthReport()!.getBitcoinHealth())} />
      <SyncerRow name="Monero" health={isHealthy(connected, health?.getReducedHealthReport()!.getMoneroHealth())} />
    </div>
  )
}
