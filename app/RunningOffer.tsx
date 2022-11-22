'use client'

import { useCallback, useEffect, useState } from 'react'
import { Button } from '../components/input'
import { OfferPanel } from '../components/panels'
import { OfferInfoRequest, OfferInfoResponse, RevokeOfferRequest, TradeRole } from '../proto/farcaster_pb'
import { useRpc } from './hooks'

export default function RunningOffer({ offer }: { offer: string }) {
  const [offerInfo, offerSet] = useState<OfferInfoResponse | null>(null)
  const [revoking, revokingSet] = useState(false)
  const [fcd, res] = useRpc()

  useEffect(() => {
    fcd.offerInfo(
      new OfferInfoRequest().setPublicOffer(offer),
      null,
      res(offerSet, () => offerSet(null))
    )
  }, [fcd, res, offer])

  const handleRevoke = useCallback(
    (offer: string) => {
      fcd.revokeOffer(
        new RevokeOfferRequest().setPublicOffer(offer),
        null,
        res(
          () => revokingSet(true),
          (e) => alert(`failed to revoke offer ${offer}: ${e.message}`)
        )
      )
    },
    [fcd, res]
  )

  if (revoking) {
    return <div>Revoking offer...</div>
  }

  return (
    <>
      {offerInfo && <OfferPanel offerInfo={offerInfo} offer={offer} displayForRole={TradeRole.MAKER} />}
      <div>
        <ul className="flex flex-row-reverse mt-6">
          <li>
            <Button onClick={() => handleRevoke(offer)}>revoke</Button>
          </li>
        </ul>
      </div>
    </>
  )
}
