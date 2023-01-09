'use client'

import { useCallback, useState } from 'react'
import { Label } from '../ui/Label'
import { AbortSwapRequest, ProgressRequest, ProgressResponse, DealInfo } from '../../proto/farcaster_pb'
import { useRefresh, useRpc } from '../../app/hooks'
import { Button } from '../inputs/Button'
import { DealPanel } from '../ui/Panel'
import { FundingItem } from './RunningList'
import { FundingInfo } from '../ui/swaps/FundingInfo'
import { BiCopy } from 'react-icons/bi'
import { Copy } from '../ui/Copy'
import { ProgressDisplay } from '../ui/swaps/progress/Progress'
import { getLocalSwapRole } from '../utils'

export default function RunningSwap({ id, data, funding }: { id: string; data: DealInfo; funding?: FundingItem }) {
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
    7000
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
      <div className="flex space-x-2 text-sm leading-loose font-mono text-slate-700 mb-6 break-all">
        <span>Swap</span>
        <Copy
          className="group"
          data={
            <Label intensity="light" rounded={false}>
              {id}
            </Label>
          }
          btn={
            <div className="p-1 hidden group-hover:block text-sm border text-gray-300 border-gray-300 hover:text-gray-600 hover:border-gray-600 rounded">
              <BiCopy />
            </div>
          }
        />
      </div>
      {funding && <FundingInfo info={funding} />}
      {prog && (
        <ProgressDisplay
          progress={prog.getProgressList()}
          tradeRole={data.getLocalTradeRole()}
          swapRole={getLocalSwapRole(data.getDeserializedDeal()!, data.getLocalTradeRole())}
        />
      )}
      <div>
        <DealPanel
          dealInfo={data.getDeserializedDeal()!}
          localTradeRole={data.getLocalTradeRole()}
          displayHeader={false}
        />
      </div>
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
