'use client'

import { useCallback, useState } from 'react'
import { Block, Label } from '../ui/Label'
import { AbortSwapRequest, ProgressRequest, ProgressResponse, Progress, DealInfo } from '../../proto/farcaster_pb'
import { useRefresh, useRpc } from '../../app/hooks'

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
    return <div>Aborting swap {id}...</div>
  }

  return (
    <>
      <div className="break-all">
        <div className="mb-4 text-xl bold">
          Swap <Label>{id}</Label>
        </div>
      </div>
      {prog && (
        <>
          <Block intent="secondary">
            {prog.getProgressList().map((i) => {
              let message = ''
              switch (i.getProgressCase()) {
                case Progress.ProgressCase.PROGRESS_NOT_SET:
                  message = 'No progress yet'
                case Progress.ProgressCase.MESSAGE:
                  message = i.getMessage()
                case Progress.ProgressCase.STATE_UPDATE:
                  message = i.getStateUpdate()?.getState().toString() ?? 'unknown state'
                case Progress.ProgressCase.STATE_TRANSITION:
                  message = i.getStateTransition()?.getOldState()?.getState().toString() ?? 'unknown old state'
                case Progress.ProgressCase.FAILURE:
                  message = i.getFailure()
                case Progress.ProgressCase.SUCCESS:
                  message = i.getSuccess()
              }
              return <p key={JSON.stringify(i)}>{message}</p>
            })}
          </Block>
          <div>
            <ul className="flex flex-row-reverse mt-6">
              <li>
                <button className="p-3 bg-gray-600" onClick={() => handleAbort(id)}>
                  abort
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  )
}
