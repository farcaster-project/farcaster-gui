'use client'

import { useCallback, useState } from 'react'
import { useRpc } from '../../app/hooks'
import { CheckpointEntry, RestoreCheckpointRequest } from '../../proto/farcaster_pb'
import { Button } from '../inputs/Button'
import { Label } from '../ui/Label'
import { DealPanel } from '../ui/Panel'

export default function CheckpointItem({ id, data }: { id: string; data: CheckpointEntry }) {
  const [restoring, restoringSet] = useState(false)
  const [fcd, res] = useRpc()

  const handleRestore = useCallback(
    (id: string) => {
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
    return (
      <div className="text-sm font-mono text-slate-700 mb-6">
        Restoring checkpoint{' '}
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
          Checkpoint{' '}
          <Label intensity="light" rounded={false}>
            {data.getSwapId()}
          </Label>
        </div>
        <DealPanel
          dealInfo={data.getDeal()!.getDeserializedDeal()!}
          localTradeRole={data.getTradeRole()}
          displayHeader={false}
        />
      </div>
      <div>
        <ul className="flex flex-row-reverse mt-6">
          <li>
            <Button onClick={() => handleRestore(id)}>Restore this checkpoint</Button>
          </li>
        </ul>
      </div>
    </>
  )
}
