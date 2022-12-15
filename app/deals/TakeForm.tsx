'use client'

import { useEffect, useState } from 'react'
import { DealPanel } from '../../components/ui/Panel'
import { DealInfoRequest, DealInfoResponse, TakeRequest, TradeRole } from '../../proto/farcaster_pb'
import { Input } from '../../components/inputs/Input'
import { Button, Submit } from '../../components/inputs/Button'
import { useProfile, useRpc } from '../hooks'

const takeReq = {
  bitcoinAddress: '',
  moneroAddress: '',
  deal: '',
}

export function TakeForm() {
  const [profile] = useProfile()
  const [take, takeSet] = useState(takeReq)
  const [deal, dealSet] = useState<DealInfoResponse | null>(null)
  const [takeRes, takeResSet] = useState<null | boolean>(null)
  const [fcd, res] = useRpc()

  useEffect(() => {
    takeSet((v) => ({ ...v, bitcoinAddress: profile.btcAddr }))
    takeSet((v) => ({ ...v, moneroAddress: profile.xmrAddr }))
  }, [profile.btcAddr, profile.xmrAddr])

  // this effect decode the deal to be displayed to user
  useEffect(() => {
    if (take.deal !== '') {
      fcd.dealInfo(new DealInfoRequest().setDeal(take.deal), null, res(dealSet))
    } else {
      dealSet(null)
    }
  }, [fcd, take.deal, res])

  return (
    <div>
      <form
        onSubmit={(e) => {
          // issue the request to take the deal
          e.preventDefault()
          if (confirm('Are you sure you want to take this deal?')) {
            fcd.take(
              new TakeRequest()
                .setBitcoinAddress(take.bitcoinAddress)
                .setMoneroAddress(take.moneroAddress)
                .setDeal(take.deal),
              null,
              res(
                () => takeResSet(true),
                () => takeResSet(false)
              )
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
            value={take.deal}
            label="The public deal you want take"
            type="text"
            placeholder="Deal:..."
            required
            onChange={(e) => takeSet((v) => ({ ...v, deal: e.target.value.trim() }))}
          />
        </div>
        <div>{deal && <DealPanel dealInfo={deal} displayForRole={TradeRole.TAKER} />}</div>
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
              takeSet((v) => ({ ...v, deal: '' }))
            }}
            disabled={deal === null}
          >
            clear
          </Button>
          <Submit value="take" disabled={deal === null} />
        </div>
      </form>
      {takeRes && <div>You took the deal</div>}
      {takeRes === false && <div>Problem while taking the deal</div>}
    </div>
  )
}
