'use client'

import { useCallback, useState } from 'react'
import { Block, Label } from '../components/labels'
import { AbortSwapRequest, ProgressRequest, ProgressResponse } from '../proto/farcaster_pb'
import { useRefresh, useRpcService } from './hooks'

export default function RunningSwap({ id }: { id: string }) {
  const [prog, progSet] = useState<ProgressResponse | null>(null)
  const [aborting, abortingSet] = useState(false)
  const fcd = useRpcService()

  useRefresh(
    useCallback(() => {
      fcd.progress(new ProgressRequest().setSwapId(id), null).then(
        (res) => progSet(res),
        () => progSet(null)
      )
    }, [fcd, id]),
    3000
  )

  const handleAbort = useCallback(
    (id: string) => {
      console.log('abort', id)
      fcd.abortSwap(new AbortSwapRequest().setSwapId(id), null).then(
        () => abortingSet(true),
        (e) => {
          alert(`failed to abort swap ${id}: ${e.message}`)
        }
      )
    },
    [fcd]
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
            {prog.getProgressList().map((i) => (
              <p key={i}>{i}</p>
            ))}
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
