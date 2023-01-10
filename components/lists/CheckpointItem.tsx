'use client'

import { useCallback, useState } from 'react'
import { BiCopy } from 'react-icons/bi'
import { useRpc } from '../../app/hooks'
import { CheckpointEntry, RestoreCheckpointRequest } from '../../proto/farcaster_pb'
import { Button } from '../inputs/Button'
import { Copy } from '../ui/Copy'
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
        <div className="flex space-x-2 text-sm leading-loose font-mono text-slate-700 mb-6 break-all">
          <span>Checkpoint</span>
          <Copy
            className="group"
            data={
              <Label intensity="light" rounded={false}>
                {data.getSwapId()}
              </Label>
            }
            btn={
              <div className="p-1 hidden group-hover:block text-sm border text-gray-300 border-gray-300 hover:text-gray-600 hover:border-gray-600 rounded">
                <BiCopy />
              </div>
            }
          />
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
