import { useCallback, useState } from 'react'
import { FarcasterClient } from '../proto/FarcasterServiceClientPb'
import { RestoreCheckpointRequest } from '../proto/farcaster_pb'

const fcd = new FarcasterClient('http://localhost:50051')

export default function CheckpointItem({ id, data }: { id: string; data?: any }) {
  const [restoring, restoringSet] = useState(false)

  const handleRestore = useCallback((id: string) => {
    console.log('restore', id)
    fcd.restoreCheckpoint(new RestoreCheckpointRequest().setSwapId(id), null).then(
      () => restoringSet(true),
      (e) => {
        alert(`failed to restore checkpoint ${id}: ${e.message}`)
      }
    )
  }, [])

  if (restoring) {
    return <div className="p-4 m-8 border border-green-500">Restoring checkpoint {id}...</div>
  }

  return (
    <div className="p-4 m-8 bg-gray-200 border-2 border-gray-500">
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
    </div>
  )
}
