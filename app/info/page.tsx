'use client'

import { useEffect } from 'react'
import { FormEvent, useCallback, useState } from 'react'
import { Input, Select, Submit } from '../../components/input'
import { Subtitle, Title } from '../../components/ui'
import { InfoRequest, InfoResponse, Network } from '../../proto/farcaster_pb'
import { useRefresh, useRpcService, useSettings } from '../hooks'

export default function InfoPage() {
  const [info, infoSet] = useState<InfoResponse | null>(null)
  const [settings, settingsSet] = useSettings()
  const [formSettings, formSettingsSet] = useState(settings)
  const fcd = useRpcService()

  // this reloads the form settings when settings are updated from local storage
  useEffect(() => formSettingsSet(settings), [settings])

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
          <Subtitle>gRPC</Subtitle>
          <Input
            label="Host"
            value={formSettings.grpcHost}
            onChange={(e) => formSettingsSet({ ...formSettings, grpcHost: e.target.value })}
            type="input"
          />
          <Input
            label="Port"
            value={formSettings.grpcPort}
            onChange={(e) => formSettingsSet({ ...formSettings, grpcPort: e.target.value })}
            type="input"
          />
        </div>
        <div>
          <Subtitle>Blockchain</Subtitle>
          <Select
            label="Default network"
            value={formSettings.network}
            onChange={(e) => formSettingsSet({ ...formSettings, network: parseInt(e.target.value) })}
          >
            <option value={Network.MAINNET} disabled>
              mainnet
            </option>
            <option value={Network.TESTNET}>testnet</option>
            <option value={Network.LOCAL}>local</option>
          </Select>
          <Input
            label="Bitcoin address"
            value={formSettings.btcAddr}
            onChange={(e) => formSettingsSet({ ...formSettings, btcAddr: e.target.value })}
            type="input"
          />
          <Input
            label="Monero address"
            value={formSettings.xmrAddr}
            onChange={(e) => formSettingsSet({ ...formSettings, xmrAddr: e.target.value })}
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
