'use client'

import { ReactNode, useCallback, useEffect, useState } from 'react'
import { FarcasterClient } from '../proto/FarcasterServiceClientPb'
import {
  Blockchain,
  Network,
  OfferInfoRequest,
  OfferInfoResponse,
  RevokeOfferRequest,
  SwapRole,
} from '../proto/farcaster_pb'

const fcd = new FarcasterClient('http://localhost:50051')

type PanelParams = {
  arbitratingAmount: number
  accordantAmount: number
  makerRole: SwapRole
  network: Network
  arbitratingBlockchain: Blockchain
  accordantBlockchain: Blockchain
}

function chainToString(b: Blockchain): String {
  switch (b) {
    case Blockchain.BITCOIN:
      return 'Bitcoin'
    case Blockchain.MONERO:
      return 'Monero'
  }
}

function Label({ children }: { children: ReactNode }) {
  return <span className="px-4 py-1 rounded-full bg-gray-900 text-gray-200">{children}</span>
}

function BlockchainsAndAmountsPanel(params: PanelParams) {
  // we are the maker, so maker role is our role
  switch (params.makerRole) {
    case SwapRole.ALICE:
      return (
        <span>
          You sell{' '}
          <Label>
            {params.accordantAmount} {chainToString(params.accordantBlockchain)}
          </Label>{' '}
          for{' '}
          <Label>
            {params.arbitratingAmount} {chainToString(params.arbitratingBlockchain)}
          </Label>
        </span>
      )
    case SwapRole.BOB:
      return (
        <span>
          You sell{' '}
          <Label>
            {params.arbitratingAmount} {chainToString(params.arbitratingBlockchain)}
          </Label>{' '}
          for{' '}
          <Label>
            {params.accordantAmount} {chainToString(params.accordantBlockchain)}
          </Label>
        </span>
      )
  }
}

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
        <div className="break-all">
          {offerInfo && (
            <div className="mb-3 text-xl">
              <BlockchainsAndAmountsPanel
                arbitratingAmount={offerInfo.getArbitratingAmount()}
                accordantAmount={offerInfo.getAccordantAmount()}
                arbitratingBlockchain={offerInfo.getArbitratingBlockchain()}
                accordantBlockchain={offerInfo.getAccordantBlockchain()}
                makerRole={offerInfo.getMakerRole()}
                network={offerInfo.getNetwork()}
              />{' '}
              in offer <Label>{offerInfo.getUuid()}</Label>
            </div>
          )}
          <div>Copy this offer and send it to the taker:</div>
          <div className="text-gray-300 bg-gray-700 p-2 mb-3 rounded">{offer}</div>
        </div>
        {offerInfo && (
          <>
            <div className="mb-3">
              <div>Taker will connect to peer:</div>
              <div className="text-gray-100 bg-gray-900 p-2 rounded">
                {offerInfo && `${offerInfo.getNodeId()}@${offerInfo.getPeerAddress()}`}
              </div>
            </div>
            <div>
              <div className="mb-2">
                Timelocks: cancel <Label>{offerInfo?.getCancelTimelock()} blocks</Label>
                punish <Label>{offerInfo?.getPunishTimelock()} blocks</Label>
              </div>
              <div>
                Fee: <Label>{offerInfo.getFeeStrategy()}</Label>
              </div>
            </div>
          </>
        )}
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
