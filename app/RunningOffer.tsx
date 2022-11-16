'use client'

import { useCallback, useEffect, useState } from 'react'
import { OfferPanel } from '../components/panels'
import { Button } from '../components/ui'
import { FarcasterClient } from '../proto/FarcasterServiceClientPb'
import { OfferInfoRequest, OfferInfoResponse, RevokeOfferRequest, TradeRole } from '../proto/farcaster_pb'

const fcd = new FarcasterClient('http://localhost:50051')

export default function RunningOffer({ offer }: { offer: string }) {
  const [offerInfo, offerSet] = useState<OfferInfoResponse | null>(null)
  const [revoking, revokingSet] = useState(false)

  useEffect(() => {
    fcd.offerInfo(new OfferInfoRequest().setPublicOffer(offer), null).then(
      (res) => offerSet(res),
      () => offerSet(null)
    )
  }, [offer])

  const handleRevoke = useCallback((offer: string) => {
    fcd.revokeOffer(new RevokeOfferRequest().setPublicOffer(offer), null).then(
      () => revokingSet(true),
      (e) => alert(`failed to revoke offer ${offer}: ${e.message}`)
    )
  }, [])

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
