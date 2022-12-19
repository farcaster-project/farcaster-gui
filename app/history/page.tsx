'use client'

import { cva } from 'class-variance-authority'
import { useEffect, useState } from 'react'
import { DealPanel, Panel } from '../../components/ui/Panel'
import { Loader } from '../../components/ui/SettingsLoader'
import { Title } from '../../components/ui/Title'
import { dealStatusToStatus, netToSelector } from '../../components/utils'
import { DealSelector, ListDealsRequest, ListDealsResponse } from '../../proto/farcaster_pb'
import { useProfile, useRpc } from '../hooks'

const itemPannel = cva([''], {
  variants: {
    status: {
      Open: ['bg-white'],
      Progress: ['bg-white'],
      Swapped: ['bg-green-200'],
      Refunded: ['bg-gray-200'],
      Punished: ['bg-red-200'],
      Aborted: ['bg-gray-300'],
    },
  },
})

export default function PageHistory() {
  const [profile] = useProfile()
  const [fcd, res] = useRpc()
  const [deals, dealsSet] = useState<ListDealsResponse | null>(null)

  useEffect(() => {
    fcd.listDeals(
      new ListDealsRequest().setDealSelector(DealSelector.ENDED).setNetworkSelector(netToSelector(profile.network)),
      null,
      res((resp) => {
        dealsSet(resp)
      })
    )
  }, [fcd, res, profile.network])

  return (
    <div>
      <Title>History</Title>
      {deals &&
        deals.getDealsList().map((dealInfo) => (
          <Panel
            className={itemPannel({ status: dealStatusToStatus(dealInfo.getDealStatus()) })}
            key={dealInfo.getDeserializedDeal()?.getUuid()}
          >
            <h2 className="text-xl mb-4">Deal result: {dealStatusToStatus(dealInfo.getDealStatus())}</h2>
            <DealPanel dealInfo={dealInfo.getDeserializedDeal()!} displayForRole={dealInfo.getLocalTradeRole()} />
          </Panel>
        ))}
      {!deals && <Loader />}
    </div>
  )
}
