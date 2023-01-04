'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { DealPanel } from '../../components/ui/Panel'
import { Blockchain, DealInfoRequest, DealInfoResponse, TakeRequest, TradeRole } from '../../proto/farcaster_pb'
import { Input } from '../../components/inputs/Input'
import { Button, Submit } from '../../components/inputs/Button'
import { useProfile, useRpc } from '../hooks'
import { ConfirmModal } from '../../components/ui/Modal'
import { toast } from 'react-toastify'
import { getPlaceholder } from '../../components/utils'

export const takeReq = {
  bitcoinAddress: '',
  moneroAddress: '',
  deal: '',
}

export function TakeForm({
  take,
  takeSet,
}: {
  take: { bitcoinAddress: string; moneroAddress: string; deal: string }
  takeSet: Dispatch<
    SetStateAction<{
      bitcoinAddress: string
      moneroAddress: string
      deal: string
    }>
  >
}) {
  const [profile] = useProfile()
  const [deal, dealSet] = useState<DealInfoResponse | null>(null)
  const [fcd, res] = useRpc()

  useEffect(() => {
    takeSet((v) => ({ ...v, bitcoinAddress: profile.btcAddr }))
    takeSet((v) => ({ ...v, moneroAddress: profile.xmrAddr }))
  }, [profile.btcAddr, profile.xmrAddr, takeSet])

  // this effect decode the deal to be displayed to user
  useEffect(() => {
    if (take.deal !== '') {
      fcd.dealInfo(new DealInfoRequest().setDeal(take.deal), null, res(dealSet))
    } else {
      dealSet(null)
    }
  }, [fcd, take.deal, res])

  return (
    <div className="p-8">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          ConfirmModal.fire({
            title: 'Are you sure you want to take this deal?',
            text: 'You can still abort the swap if no funding has been done.',
            icon: 'question',
          }).then((result) => {
            if (result.isConfirmed) {
              fcd.take(
                new TakeRequest()
                  .setBitcoinAddress(take.bitcoinAddress)
                  .setMoneroAddress(take.moneroAddress)
                  .setDeal(take.deal),
                null,
                res(
                  () => toast.success('You took the deal!'),
                  (rpcErr) =>
                    toast.error(rpcErr.message, {
                      autoClose: false,
                    })
                )
              )
            }
          })
        }}
      >
        <div>
          <Input
            value={take.bitcoinAddress}
            label="Your Bitcoin address for this swap"
            placeholder={getPlaceholder(profile.network, Blockchain.BITCOIN)}
            onChange={(e) => takeSet((v) => ({ ...v, bitcoinAddress: e.target.value }))}
          />
          <Input
            value={take.moneroAddress}
            label="Your Monero address for this swap"
            placeholder={getPlaceholder(profile.network, Blockchain.MONERO)}
            onChange={(e) => takeSet((v) => ({ ...v, moneroAddress: e.target.value }))}
          />
        </div>
        <div>
          <Input
            value={take.deal}
            label="The public deal you want to take"
            type="text"
            placeholder="Deal:..."
            required
            onChange={(e) => takeSet((v) => ({ ...v, deal: e.target.value.trim() }))}
          />
        </div>
        <div className="my-16">
          {deal && <DealPanel dealInfo={deal.getDeserializedDeal()!} localTradeRole={TradeRole.TAKER} />}
        </div>
        <div className="flex space-x-4 justify-end">
          <Button
            onClick={(e) => {
              e.preventDefault()
              takeSet((v) => ({ ...v, deal: '' }))
            }}
            disabled={take.deal === ''}
          >
            Clear
          </Button>
          <Submit value="Take the deal" disabled={deal === null} />
        </div>
      </form>
    </div>
  )
}
