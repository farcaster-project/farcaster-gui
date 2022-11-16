'use client'

import { useEffect, useState } from 'react'
import { OfferPanel } from '../../components/panels'
import { Title } from '../../components/ui'
import { FarcasterClient } from '../../proto/FarcasterServiceClientPb'
import { OfferInfoRequest, OfferInfoResponse, TakeRequest, TradeRole } from '../../proto/farcaster_pb'
import Input from './input'

const fcd = new FarcasterClient('http://localhost:50051')

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

  // this effect decode the offer to be displayed to user
  useEffect(() => {
    if (take.publicOffer !== '') {
      fcd.offerInfo(new OfferInfoRequest().setPublicOffer(take.publicOffer), null).then((offerInfo) => {
        offerSet(offerInfo)
      })
    }
  }, [take.publicOffer])

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
            label="Your Bitcoin address"
            onChange={(e) => takeSet((v) => ({ ...v, bitcoinAddress: e.target.value }))}
          />
          <Input
            value={take.moneroAddress}
            label="Your Monero address"
            onChange={(e) => takeSet((v) => ({ ...v, moneroAddress: e.target.value }))}
          />
        </div>
        <div>
          <Input
            value={take.publicOffer}
            label="The public offer"
            onChange={(e) => takeSet((v) => ({ ...v, publicOffer: e.target.value.trim() }))}
          />
        </div>
        <div>{offer && <OfferPanel offerInfo={offer} displayForRole={TradeRole.TAKER} />}</div>
        <div>
          <input type="submit" value="take" />
        </div>
      </form>
      {takeRes && <div>You took the offer</div>}
      {takeRes === false && <div>Problem while taking the offer</div>}
    </div>
  )
}
