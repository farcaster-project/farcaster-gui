'use client'

import { FormEvent, useCallback, useState } from 'react'
import Input, { Submit } from '../../components/input'
import { Title } from '../../components/ui'
import { InfoRequest, InfoResponse } from '../../proto/farcaster_pb'
import { useRefresh, useRpcService, useSettings } from '../hooks'

export default function InfoPage() {
  const [info, infoSet] = useState<InfoResponse | null>(null)
  const [settings, settingsSet] = useSettings()
  const [formSettings, formSettingsSet] = useState(settings)
  const fcd = useRpcService()

  useRefresh(
    useCallback(() => {
      fcd.info(new InfoRequest(), null).then(infoSet)
    }, [fcd]),
    1000
  )

  const saveSettings = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    settingsSet(formSettings)
  }

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
      <Title>Settings</Title>
      <form onSubmit={saveSettings}>
        <div>
          <Input
            label="gRPC host"
            value={formSettings.grpcHost}
            onChange={(e) => formSettingsSet({ ...formSettings, grpcHost: e.target.value })}
            type="input"
          />
          <Input
            label="gRPC port"
            value={formSettings.grpcPort}
            onChange={(e) => formSettingsSet({ ...formSettings, grpcPort: e.target.value })}
            type="input"
          />
        </div>
        <div>
          <Submit value="save" />
        </div>
      </form>
    </>
  )
}
