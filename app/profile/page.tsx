'use client'

import { NIL, v4 as Uuid } from 'uuid'
import { FormEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Input, Required } from '../../components/inputs/Input'
import { Submit } from '../../components/inputs/Button'
import { Subtitle, Title } from '../../components/ui/Title'
import { Blockchain, Network } from '../../proto/farcaster_pb'
import { useProfile } from '../hooks'
import { newProfile } from '../settings-provider'
import Select from '../../components/inputs/Select'
import { getPlaceholder, netToString, stringToNet } from '../../components/utils'

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
    <div className="mb-16">
      <div className="my-8 mt-16">
        <Title>{isNewProfile !== null ? 'New ' : 'Edit '}Profile</Title>
      </div>
      <form onSubmit={saveSettings}>
        <div className="mb-8">
          <Input
            label={
              <>
                Profile name <Required />
              </>
            }
            value={formProfile.name}
            onChange={(e) => formProfileSet({ ...formProfile, name: e.target.value })}
            type="input"
            placeholder="My node"
            required
          />
        </div>
        <div className="mb-8">
          <Subtitle>gRPC</Subtitle>
          <Input
            label={
              <>
                Host <Required />
              </>
            }
            value={formProfile.grpcHost}
            onChange={(e) => formProfileSet({ ...formProfile, grpcHost: e.target.value })}
            type="input"
            required
          />
          <Input
            label={
              <>
                Port <Required />
              </>
            }
            value={formProfile.grpcPort}
            onChange={(e) => formProfileSet({ ...formProfile, grpcPort: e.target.value })}
            type="input"
            required
          />
        </div>
        <div className="mb-8">
          <Subtitle>Blockchain</Subtitle>
          <div className="my-4 flex items-center">
            <label className="text-gray-700 font-medium w-96">
              Network <Required />
            </label>
            <div className="grow">
              <Select
                selected={networks.filter((v) => v.name == netToString(formProfile.network))[0]}
                elems={networks}
                onChange={({ name }) =>
                  formProfileSet({ ...formProfile, network: stringToNet(name as 'Mainnet' | 'Testnet') })
                }
              />
            </div>
          </div>
          <Input
            label="Bitcoin address"
            value={formProfile.btcAddr}
            onChange={(e) => formProfileSet({ ...formProfile, btcAddr: e.target.value })}
            type="input"
            placeholder={getPlaceholder(formProfile.network, Blockchain.BITCOIN)}
          />
          <Input
            label="Monero address"
            value={formProfile.xmrAddr}
            onChange={(e) => formProfileSet({ ...formProfile, xmrAddr: e.target.value })}
            type="input"
            placeholder={getPlaceholder(formProfile.network, Blockchain.MONERO)}
          />
        </div>

        <div className="mt-16 flex space-x-4 justify-end">
          <Submit value={isNewProfile !== null ? 'Create profile' : 'Save profile'} />
        </div>
      </form>
    </div>
  )
}
