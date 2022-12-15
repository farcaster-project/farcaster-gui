'use client'

import { NIL, v4 as Uuid } from 'uuid'
import { FormEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Input, Submit } from '../../components/input'
import { Subtitle, Title } from '../../components/ui'
import { Network } from '../../proto/farcaster_pb'
import { useProfile } from '../hooks'
import { newProfile } from '../settings-provider'
import Select from '../../components/inputs/Select'
import { netToString, stringToNet } from '../../components/utils'
import Label from '../../components/inputs/Label'

export default function ProfilePage() {
  const [profile, profileSet] = useProfile()
  const [formProfile, formProfileSet] = useState(profile)
  const searchParams = useSearchParams()

  const isNewProfile = searchParams.get('new')

  useEffect(() => {
    if (isNewProfile !== null) {
      // we create a new profile, reset the form
      formProfileSet(newProfile)
    }
  }, [isNewProfile])

  const saveSettings = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formProfile.uuid === NIL) {
      formProfile.uuid = Uuid()
    }
    profileSet(formProfile)
  }

  const networks = [{ name: netToString(Network.MAINNET) }, { name: netToString(Network.TESTNET) }]

  return (
    <>
      <Title>Profile</Title>
      <form onSubmit={saveSettings}>
        <div>
          <Input
            label="Name"
            value={formProfile.name}
            onChange={(e) => formProfileSet({ ...formProfile, name: e.target.value })}
            type="input"
          />
        </div>
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
          <Label label={<>Network</>}>
            <Select
              selected={networks.filter((v) => v.name == netToString(formProfile.network))[0]}
              elems={networks}
              onChange={({ name }) =>
                formProfileSet({ ...formProfile, network: stringToNet(name as 'Mainnet' | 'Testnet') })
              }
            />
          </Label>
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
