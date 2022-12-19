'use client'

import { useCallback, useState } from 'react'
import { useRpc } from '../../app/hooks'
import { Button } from '../inputs/Button'
import { DealPanel } from '../ui/Panel'
import { DealInfo, RevokeDealRequest } from '../../proto/farcaster_pb'

export default function RunningDeal({ id, data }: { id: string; data: DealInfo }) {
  const [revoking, revokingSet] = useState(false)
  const [fcd, res] = useRpc()

  const handleRevoke = useCallback(
    (deal: string) => {
      fcd.revokeDeal(
        new RevokeDealRequest().setDeal(deal),
        null,
        res(
          () => revokingSet(true),
          (e) => alert(`failed to revoke deal ${deal}: ${e.message}`)
        )
      )
    },
    [fcd, res]
  )

  if (revoking) {
    return <div>Revoking deal...</div>
  }

  return (
    <>
      {data && (
        <DealPanel
          dealInfo={data.getDeserializedDeal()!}
          deal={data.getSerializedDeal()}
          localTradeRole={data.getLocalTradeRole()}
        />
      )}
      <div>
        <ul className="flex flex-row-reverse mt-6">
          <li>
            <Button onClick={() => handleRevoke(data.getSerializedDeal())}>revoke</Button>
          </li>
        </ul>
      </div>
    </>
  )
}
