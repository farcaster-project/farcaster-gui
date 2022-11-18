'use client'

import { useCallback, useEffect, useState } from 'react'
import { Button } from '../components/input'
import { OfferPanel } from '../components/panels'
import { OfferInfoRequest, OfferInfoResponse, RevokeOfferRequest, TradeRole } from '../proto/farcaster_pb'
import { useRpcService } from './hooks'

export default function RunningOffer({ offer }: { offer: string }) {
  const [offerInfo, offerSet] = useState<OfferInfoResponse | null>(null)
  const [revoking, revokingSet] = useState(false)
  const fcd = useRpcService()

  useEffect(() => {
    fcd.offerInfo(new OfferInfoRequest().setPublicOffer(offer), null).then(
      (res) => offerSet(res),
      () => offerSet(null)
    )
  }, [fcd, offer])

  const handleRevoke = useCallback(
    (offer: string) => {
      fcd.revokeOffer(new RevokeOfferRequest().setPublicOffer(offer), null).then(
        () => revokingSet(true),
        (e) => alert(`failed to revoke offer ${offer}: ${e.message}`)
      )
    },
    [fcd]
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
