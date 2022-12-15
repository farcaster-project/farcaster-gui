'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRpc } from '../../app/hooks'
import { Button } from '../inputs/Button'
import { DealPanel } from '../ui/Panel'
import { DealInfoRequest, DealInfoResponse, RevokeDealRequest, TradeRole } from '../../proto/farcaster_pb'

export default function RunningDeal({ deal }: { deal: string }) {
  const [dealInfo, dealSet] = useState<DealInfoResponse | null>(null)
  const [revoking, revokingSet] = useState(false)
  const [fcd, res] = useRpc()

  useEffect(() => {
    fcd.dealInfo(
      new DealInfoRequest().setDeal(deal),
      null,
      res(dealSet, () => dealSet(null))
    )
  }, [fcd, res, deal])

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
      {dealInfo && <DealPanel dealInfo={dealInfo} deal={deal} displayForRole={TradeRole.MAKER} />}
      <div>
        <ul className="flex flex-row-reverse mt-6">
          <li>
            <Button onClick={() => handleRevoke(deal)}>revoke</Button>
          </li>
        </ul>
      </div>
    </>
  )
}
