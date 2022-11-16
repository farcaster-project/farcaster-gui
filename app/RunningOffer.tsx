'use client'

import { useCallback, useEffect, useState } from 'react'
import { OfferPanel } from '../components/panels'
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

  const handleCancel = useCallback((offer: string) => {
    fcd.revokeOffer(new RevokeOfferRequest().setPublicOffer(offer), null).then(
      () => revokingSet(true),
      (e) => alert(`failed to cancel offer ${offer}: ${e.message}`)
    )
  }, [])

  if (revoking) {
    return <div className="p-4 m-8 bg-gray-200 border-2 border-gray-500">Revoking offer...</div>
  }

  return (
    <>
      <div className="p-4 m-8 bg-gray-200 border-2 border-gray-500">
        {offerInfo && <OfferPanel offerInfo={offerInfo} offer={offer} displayForRole={TradeRole.MAKER} />}
        <div>
          <ul className="flex flex-row-reverse mt-6">
            <li>
              <button className="p-3 bg-gray-600" onClick={() => handleCancel(offer)}>
                cancel
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
