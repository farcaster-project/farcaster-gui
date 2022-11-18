'use client'

import { useEffect, useState } from 'react'
import { OfferPanel } from '../../components/panels'
import { Title } from '../../components/ui'
import { OfferInfoRequest, OfferInfoResponse, TakeRequest, TradeRole } from '../../proto/farcaster_pb'
import Input, { Button, Submit } from '../../components/input'
import { useRpcService } from '../hooks'

const takeReq = {
  bitcoinAddress: 'tb1qh9rdah0fefhsuhj4v6h7znd85k4tyqz6vmrl56',
  moneroAddress: '59xUsmr8HiF4n92RxjJZbo2GiMiUbaevoMgYnw1jda97cRQ77FgAAYviHyFvcCLxh2DenAacFpVMbVLBt7LmC7Ah6bbv1kM',
  publicOffer: '',
}

const createTakeRequest = (p: { bitcoinAddress: string; moneroAddress: string; publicOffer: string }): TakeRequest => {
  return new TakeRequest()
    .setPublicOffer(p.publicOffer)
    .setBitcoinAddress(p.bitcoinAddress)
    .setMoneroAddress(p.moneroAddress)
}

export default function TakePage() {
  const [take, takeSet] = useState(takeReq)
  const [offer, offerSet] = useState<OfferInfoResponse | null>(null)
  const [takeRes, takeResSet] = useState<null | boolean>(null)
  const fcd = useRpcService()

  // this effect decode the offer to be displayed to user
  useEffect(() => {
    if (take.publicOffer !== '') {
      fcd.offerInfo(new OfferInfoRequest().setPublicOffer(take.publicOffer), null).then((offerInfo) => {
        offerSet(offerInfo)
      })
    } else {
      offerSet(null)
    }
  }, [fcd, take.publicOffer])

  return (
    <div>
      <Title>Take an offer</Title>
      <form
        onSubmit={(e) => {
          // issue the request to take the offer
          e.preventDefault()
          if (confirm('Are you sure you want to take this offer?')) {
            fcd
              .take(
                new TakeRequest()
                  .setBitcoinAddress(take.bitcoinAddress)
                  .setMoneroAddress(take.moneroAddress)
                  .setPublicOffer(take.publicOffer),
                null
              )
              .then(
                // take is ok
                (res) => takeResSet(true),
                // take failed
                (err) => {
                  console.log(err)
                  takeResSet(false)
                }
              )
          }
        }}
      >
        <div>
          <Input
            value={take.bitcoinAddress}
            label="Your Bitcoin address for this swap"
            onChange={(e) => takeSet((v) => ({ ...v, bitcoinAddress: e.target.value }))}
          />
          <Input
            value={take.moneroAddress}
            label="Your Monero address for this swap"
            onChange={(e) => takeSet((v) => ({ ...v, moneroAddress: e.target.value }))}
          />
        </div>
        <div>
          <Input
            value={take.publicOffer}
            label="The public offer you want take"
            type="text"
            placeholder="Offer:..."
            required
            onChange={(e) => takeSet((v) => ({ ...v, publicOffer: e.target.value.trim() }))}
          />
        </div>
        <div>{offer && <OfferPanel offerInfo={offer} displayForRole={TradeRole.TAKER} />}</div>
        <div>
          <Button
            onClick={(e) => {
              e.preventDefault()
              takeSet(takeReq)
            }}
          >
            reset to defaults
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault()
              takeSet((v) => ({ ...v, publicOffer: '' }))
            }}
            disabled={offer === null}
          >
            clear
          </Button>
          <Submit value="take" disabled={offer === null} />
        </div>
      </form>
      {takeRes && <div>You took the offer</div>}
      {takeRes === false && <div>Problem while taking the offer</div>}
    </div>
  )
}
