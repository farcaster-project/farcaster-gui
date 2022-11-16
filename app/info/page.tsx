'use client'

import { useEffect, useState } from 'react'
import { Title } from '../../components/ui'
import { FarcasterClient } from '../../proto/FarcasterServiceClientPb'
import { InfoRequest, InfoResponse } from '../../proto/farcaster_pb'

const fcd = new FarcasterClient('http://localhost:50051')

export default function InfoPage() {
  const [info, infoSet] = useState<InfoResponse | null>(null)

  useEffect(() => {
    const handle = setInterval(() => {
      fcd.info(new InfoRequest(), null).then(infoSet)
    }, 1000)
    return () => {
      clearInterval(handle)
    }
  }, [])

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
