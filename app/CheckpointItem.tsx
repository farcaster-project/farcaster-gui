'use client'

import { useCallback, useState } from 'react'
import { CheckpointEntry, RestoreCheckpointRequest } from '../proto/farcaster_pb'
import { useRpc } from './hooks'

export default function CheckpointItem({ id, data }: { id: string; data?: CheckpointEntry.AsObject }) {
  const [restoring, restoringSet] = useState(false)
  const [fcd, res] = useRpc()

  const handleRestore = useCallback(
    (id: string) => {
      console.log('restore', id)
      fcd.restoreCheckpoint(
        new RestoreCheckpointRequest().setSwapId(id),
        null,
        res(
          () => restoringSet(true),
          (e) => {
            alert(`failed to restore checkpoint ${id}: ${e.message}`)
          }
        )
      )
    },
    [fcd, res]
  )

  if (restoring) {
    return <div>Restoring checkpoint {id}...</div>
  }

  return (
    <>
      <div className="break-all">
        <div className="mb-2 text-xl bold">checkpoint:</div>
        <div className="text-gray-300 bg-gray-700 p-2 mb-6 rounded">{id}</div>
      </div>
      <div>
        <ul className="flex flex-row-reverse mt-6">
          <li>
            <button className="p-3 bg-gray-600" onClick={() => handleRestore(id)}>
              restore
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}
