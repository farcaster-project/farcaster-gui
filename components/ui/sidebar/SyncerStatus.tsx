'use client'

import { cva } from 'class-variance-authority'
import { useCallback, useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useConnected, useProfile, useRefresh, useRpc } from '../../../app/hooks'
import { HealthCheckRequest, ReducedHealthReport } from '../../../proto/farcaster_pb'
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

function healthChange(syncer: string, prev: HealthStatus, next: HealthStatus) {
  if (prev !== next) {
    switch (next) {
      case 'healthy':
        toast.info(`Your ${syncer} syncer is ${next}!`)
        break
      case 'not-healthy':
        toast.error(`Your ${syncer} syncer has been diagnosed not healthy!`)
    }
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
  const [prev, prevSet] = useState<ReducedHealthReport | null>(null)
  const [health, healthSet] = useState<ReducedHealthReport | null>(null)
  const [fcd, res] = useRpc()

  useRefresh(
    useCallback(() => {
      const query = fcd.healthCheck(
        new HealthCheckRequest().setSelector(netToSelector(profile.network)),
        null,
        res((resp) => {
          healthSet((prev) => {
            prevSet(prev)
            // SAFETY: we know the result is a ReducedHealthReport because selector is set to profile.network
            return resp.getReducedHealthReport()!
          })
        })
      )
      return () => query.cancel()
    }, [fcd, profile.network, res]),
    120000
  )

  // notify user uppon syncer health change
  useEffect(() => {
    healthChange(
      'Bitcoin',
      isHealthy(connected, prev?.getBitcoinHealth()),
      isHealthy(connected, health?.getBitcoinHealth())
    )
    healthChange(
      'Monero',
      isHealthy(connected, prev?.getMoneroHealth()),
      isHealthy(connected, health?.getMoneroHealth())
    )
  }, [connected, health, prev])

  // if we loose connection we reset syncer status
  useEffect(() => {
    if (!connected) healthSet(null)
  }, [connected])

  return (
    <div className="flex flex-col bg-slate-500 rounded-md p-2 mb-3">
      <div className="text-sm font-medium text-slate-800">Syncers health:</div>
      <SyncerRow name="Bitcoin" health={isHealthy(connected, health?.getBitcoinHealth())} />
      <SyncerRow name="Monero" health={isHealthy(connected, health?.getMoneroHealth())} />
    </div>
  )
}
