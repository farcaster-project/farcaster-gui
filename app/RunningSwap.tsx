'use client'

import { useCallback, useState } from 'react'
import { FarcasterClient } from '../proto/FarcasterServiceClientPb'
import { AbortSwapRequest, ProgressRequest, ProgressResponse } from '../proto/farcaster_pb'
import { useRefresh } from './hooks'

const fcd = new FarcasterClient('http://localhost:50051')

export default function RunningSwap({ id }: { id: string }) {
  const [prog, progSet] = useState<ProgressResponse | null>(null)
  const [aborting, abortingSet] = useState(false)

  useRefresh(
    useCallback(() => {
      fcd.progress(new ProgressRequest().setSwapId(id), null).then(
        (res) => progSet(res),
        () => progSet(null)
      )
    }, [id]),
    3000
  )

  const handleAbort = useCallback((id: string) => {
    console.log('abort', id)
    fcd.abortSwap(new AbortSwapRequest().setSwapId(id), null).then(
      () => abortingSet(true),
      (e) => {
        alert(`failed to abort swap ${id}: ${e.message}`)
      }
    )
  }, [])

  if (aborting) {
    return <div className="p-4 m-8 border border-green-500">Aborting swap {id}...</div>
  }

  return (
    <>
      <div className="p-4 m-8 border border-green-500">
        <div className="break-all">
          <div className="mb-2 text-xl bold">swap:</div>
          <div className="text-gray-300 bg-gray-700 p-2 mb-6 rounded">{id}</div>
        </div>
        {prog && (
          <>
            <div className="p-2 bg-gray-900 text-gray-100 rounded">
              {prog.getProgressList().map((i) => (
                <p key={i}>{i}</p>
              ))}
            </div>
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
      </div>
    </>
  )
}
