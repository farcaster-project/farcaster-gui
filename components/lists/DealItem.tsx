'use client'

import { useCallback, useState } from 'react'
import { useRpc } from '../../app/hooks'
import { Button } from '../inputs/Button'
import { DealPanel } from '../ui/Panel'
import { DealInfo, RevokeDealRequest } from '../../proto/farcaster_pb'
import { Label } from '../ui/Label'
import { Loader } from '../ui/SettingsLoader'
import { toast } from 'react-toastify'

export default function RunningDeal({ id, data }: { id: string; data: DealInfo }) {
  const [revoking, revokingSet] = useState(false)
  const [fcd, res] = useRpc()

  const handleRevoke = useCallback(
    (deal: string, id: string) => {
      fcd.revokeDeal(
        new RevokeDealRequest().setDeal(deal),
        null,
        res(
          () => {
            revokingSet(true)
            toast.success(`Revoking deal ${id}`)
          },
          (e) => toast.error(`Failed to revoke deal ${id}: ${e.message}`)
        )
      )
    },
    [fcd, res]
  )

  if (revoking) {
    return (
      <div className="flex space-x-2 items-center text-sm font-mono text-slate-700">
        <Loader className="mr-4" />
        <span className="font-semibold">Revoking deal</span>
        <Label intensity="light" rounded={false}>
          {id}
        </Label>
      </div>
    )
  }

  return (
    <>
      {data && (
        <DealPanel
          dealInfo={data.getDeserializedDeal()!}
          deal={data.getSerializedDeal()}
          localTradeRole={data.getLocalTradeRole()}
        />
      )}
      <div>
        <ul className="flex flex-row-reverse mt-6">
          <li>
            <Button onClick={() => handleRevoke(data.getSerializedDeal(), id)}>Revoke this deal</Button>
          </li>
        </ul>
      </div>
    </>
  )
}
