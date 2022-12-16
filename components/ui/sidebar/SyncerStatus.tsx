'use client'

import { useState } from 'react'
import { useProfile, useRefresh, useRpc } from '../../../app/hooks'
import { HealthCheckRequest, HealthCheckResponse, NetworkSelector } from '../../../proto/farcaster_pb'
import { netToSelector } from '../../utils'

function isHealthy(status: string): boolean {
  switch (status) {
    case 'Healthy':
      return true
    default:
      return false
  }
}

function SyncerRow({ name, healty }: { name: string; healty: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-zinc-900">{name}</div>
      <div className="">
        {healty && <div className="w-4 h-4 bg-green-700 rounded-full ring-green-600 ring-1"></div>}
        {!healty && <div className="w-4 h-4 bg-amber-700 rounded-full ring-amber-600 ring-1"></div>}
      </div>
    </div>
  )
}

export default function SyncerStatus() {
  const [profile] = useProfile()
  const [health, healthSet] = useState<HealthCheckResponse | null>(null)
  const [fcd, res] = useRpc()

  useRefresh(() => {
    //fcd.healthCheck(
    //  new HealthCheckRequest().setSelector(netToSelector(profile.network)),
    //  null,
    //  res((resp) => {
    //    console.log(resp)
    //    healthSet(resp)
    //  })
    //)
  }, 10000)

  return (
    <div className="flex flex-col bg-slate-500 rounded-md p-2 mb-3">
      <div className="text-sm font-medium text-slate-800">Syncers health:</div>
      <SyncerRow name="Bitcoin" healty={isHealthy('Healthy')} />
      <SyncerRow name="Monero" healty={isHealthy('ConfigUnavailable: Invalid configuration. Missing or malformed')} />
    </div>
  )
}
