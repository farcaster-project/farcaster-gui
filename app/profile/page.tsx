'use client'

import { useEffect } from 'react'
import { FormEvent, useState } from 'react'
import { Input, Select, Submit } from '../../components/input'
import { Subtitle, Title } from '../../components/ui'
import { Network } from '../../proto/farcaster_pb'
import { useProfile, useSettings } from '../hooks'
import { getProfile } from '../settings-provider'

export default function ProfilePage() {
  const [profile, profileSet] = useProfile()
  const [formProfile, formProfileSet] = useState(profile)

  // this reloads the form settings when settings are updated from local storage
  useEffect(() => formProfileSet(profile), [profile])

  const saveSettings = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    profileSet(formProfile)
  }

  return (
    <>
      <Title>Profile</Title>
      <form onSubmit={saveSettings}>
        <div>
          <Subtitle>gRPC</Subtitle>
          <Input
            label="Host"
            value={formProfile.grpcHost}
            onChange={(e) => formProfileSet({ ...formProfile, grpcHost: e.target.value })}
            type="input"
          />
          <Input
            label="Port"
            value={formProfile.grpcPort}
            onChange={(e) => formProfileSet({ ...formProfile, grpcPort: e.target.value })}
            type="input"
          />
        </div>
        <div>
          <Subtitle>Blockchain</Subtitle>
          <Select
            label="Default network"
            value={formProfile.network}
            onChange={(e) => formProfileSet({ ...formProfile, network: parseInt(e.target.value) })}
          >
            <option value={Network.MAINNET} disabled>
              mainnet
            </option>
            <option value={Network.TESTNET}>testnet</option>
            <option value={Network.LOCAL}>local</option>
          </Select>
          <Input
            label="Bitcoin address"
            value={formProfile.btcAddr}
            onChange={(e) => formProfileSet({ ...formProfile, btcAddr: e.target.value })}
            type="input"
          />
          <Input
            label="Monero address"
            value={formProfile.xmrAddr}
            onChange={(e) => formProfileSet({ ...formProfile, xmrAddr: e.target.value })}
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
