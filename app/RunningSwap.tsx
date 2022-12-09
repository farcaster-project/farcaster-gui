'use client'

import { useCallback, useState } from 'react'
import { Block, Label } from '../components/labels'
import { AbortSwapRequest, ProgressRequest, ProgressResponse, Progress } from '../proto/farcaster_pb'
import { useRefresh, useRpc } from './hooks'

export default function RunningSwap({ id }: { id: string }) {
  const [prog, progSet] = useState<ProgressResponse | null>(null)
  const [aborting, abortingSet] = useState(false)
  const [fcd, res] = useRpc()

  useRefresh(
    useCallback(() => {
      fcd.progress(
        new ProgressRequest().setSwapId(id),
        null,
        res(progSet, () => progSet(null))
      )
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
            {
              prog.getProgressList().map((i) => {
              let message = "";
                switch (i.getProgressCase()) {
                  case Progress.ProgressCase.PROGRESS_NOT_SET:
                    message = "No progress yet";
                  case Progress.ProgressCase.MESSAGE:
                    message = i.getMessage();
                  case Progress.ProgressCase.FAILURE:
                    message = i.getFailure();
                  case Progress.ProgressCase.SUCCESS:
                    message = i.getSuccess();
                  case Progress.ProgressCase.STATE_UPDATE:
                    message = i.getStateUpdate()?.getStateCase().toString()?? "unknown state";
                  case Progress.ProgressCase.STATE_TRANSITION:
                    message = i.getStateTransition()?.getOldState()?.getStateCase().toString()?? "unknown old state";
                }
              return (<p key={JSON.stringify(i)}>{message}</p>)
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
