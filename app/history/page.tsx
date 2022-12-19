'use client'

import { useEffect, useState } from 'react'
import { DealPanel, Panel } from '../../components/ui/Panel'
import { Loader } from '../../components/ui/SettingsLoader'
import { Title } from '../../components/ui/Title'
import { netToSelector } from '../../components/utils'
import { DealSelector, DealStatus, ListDealsRequest, ListDealsResponse, TradeRole } from '../../proto/farcaster_pb'
import { useProfile, useRpc } from '../hooks'

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
        deals
          .getDealsList()
          .filter((dealInfo) => dealInfo.getDealStatus() !== DealStatus.DEAL_OPEN)
          .map((dealInfo) => (
            <Panel key={dealInfo.getDeserializedDeal()?.getUuid()}>
              <DealPanel dealInfo={dealInfo.getDeserializedDeal()!} displayForRole={TradeRole.MAKER} />
            </Panel>
          ))}
      {!deals && <Loader />}
    </div>
  )
}
