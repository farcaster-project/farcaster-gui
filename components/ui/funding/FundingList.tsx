'use client'

import { useEffect, useState } from 'react'
import { useProfile, useRpc } from '../../../app/hooks'
import { AddressSwapIdPair, Blockchain, FundingAddressesRequest } from '../../../proto/farcaster_pb'
import { netToSelector } from '../../utils'
import { Loader } from '../../ui/SettingsLoader'
import { Button } from '../../inputs/Button'

export function FundingList({ chain }: { chain: Blockchain }) {
  const [profile] = useProfile()
  const [fcd, res] = useRpc()
  const [addressList, addressListSet] = useState<AddressSwapIdPair[] | null>(null)

  useEffect(() => {
    const query = fcd.fundingAddresses(
      new FundingAddressesRequest().setBlockchain(chain).setNetworkSelector(netToSelector(profile.network)),
      null,
      res((resp) => addressListSet(resp.getAddressesList()))
    )
    return () => query.cancel()
  }, [chain, fcd, profile.network, res])

  return (
    <>
      <div>
        {!addressList && <Loader />}
        {addressList && (
          <ul className="divide-y-2 divide-solid">
            {addressList.map((addressPair) => (
              <li key={addressPair.getSwapId()}>
                <div className="py-8 flex flex-col">
                  <div className="p-2 text-sm font-mono text-slate-700">{addressPair.getSwapId()}</div>
                  <div className="flex space-x-24 justify-between items-center">
                    <div className="py-2 px-3 rounded bg-slate-100 text-gray-900 font-semibold grow">
                      {addressPair.getAddress()}
                    </div>
                    <div className="flex space-x-3">
                      <Button disabled={true}>Get balance</Button>
                      <Button disabled={true}>Sweep</Button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}
