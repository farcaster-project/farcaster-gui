'use client'

import { useCallback, useState } from 'react'
import { Title } from '../../components/ui/Title'
import { InfoRequest, InfoResponse } from '../../proto/farcaster_pb'
import { useRefresh, useRpc } from '../hooks'

export default function InfoPage() {
  const [info, infoSet] = useState<InfoResponse | null>(null)
  const [fcd, res] = useRpc()

  useRefresh(
    useCallback(() => {
      const query = fcd.info(new InfoRequest(), null, res(infoSet))
      return () => query.cancel()
    }, [fcd, res]),
    1000
  )

  return (
    <>
      <Title>Node Info</Title>
      <div>Uptime: {info?.getUptime()}</div>
      <div>Started at: {info?.getSince() && new Date(info?.getSince() * 1000).toISOString()}</div>
      <div>
        <h2>Running swaps:</h2>
        <ul>
          {info?.getSwapsList().length === 0 && <li>No running swap</li>}
          {info?.getSwapsList().map((swap) => (
            <li key={swap}>{swap}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Connected peers:</h2>
        <ul>
          {info?.getPeersList().length === 0 && <li>No connected peer</li>}
          {info?.getPeersList().map((peer) => (
            <li key={peer}>{peer}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Listening peers:</h2>
        <ul>
          {info?.getListensList().length === 0 && <li>No Listening peer</li>}
          {info?.getListensList().map((peer) => (
            <li key={peer}>{peer}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
