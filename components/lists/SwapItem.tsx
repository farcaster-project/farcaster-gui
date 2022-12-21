'use client'

import { useCallback, useState } from 'react'
import { Label } from '../ui/Label'
import { AbortSwapRequest, ProgressRequest, ProgressResponse, Progress, DealInfo } from '../../proto/farcaster_pb'
import { useRefresh, useRpc } from '../../app/hooks'
import { Button } from '../inputs/Button'
import { DealPanel } from '../ui/Panel'
import { SwapProgress } from '../ui/swaps/SwapProgress'

export default function RunningSwap({ id, data }: { id: string; data: DealInfo }) {
  const [prog, progSet] = useState<ProgressResponse | null>(null)
  const [aborting, abortingSet] = useState(false)
  const [fcd, res] = useRpc()

  useRefresh(
    useCallback(() => {
      const query = fcd.progress(
        new ProgressRequest().setSwapId(id),
        null,
        res(progSet, () => progSet(null))
      )
      return () => query.cancel()
    }, [fcd, res, id]),
    3000
  )

  const handleAbort = useCallback(
    (id: string) => {
      fcd.abortSwap(
        new AbortSwapRequest().setSwapId(id),
        null,
        res(
          () => abortingSet(true),
          (e) => {
            alert(`failed to abort swap ${id}: ${e.message}`)
          }
        )
      )
    },
    [fcd, res]
  )

  if (aborting) {
    return (
      <div className="text-sm font-mono text-slate-700 mb-6">
        Aborting swap{' '}
        <Label intensity="light" rounded={false}>
          {id}
        </Label>
      </div>
    )
  }

  return (
    <>
      <div className="break-all">
        <div className="text-sm font-mono text-slate-700 mb-6">
          Swap{' '}
          <Label intensity="light" rounded={false}>
            {id}
          </Label>
        </div>
        <div>
          <DealPanel
            dealInfo={data.getDeserializedDeal()!}
            localTradeRole={data.getLocalTradeRole()}
            displayHeader={false}
          />
        </div>
      </div>
      <div className="py-8">{prog && <SwapProgress progress={prog.getProgressList()} />}</div>
      <div>
        <ul className="flex flex-row-reverse mt-6">
          <li>
            <Button onClick={() => handleAbort(id)}>Abort this swap</Button>
          </li>
        </ul>
      </div>
    </>
  )
}
