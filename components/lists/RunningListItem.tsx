'use client'

import CheckpointItem from './CheckpointItem'
import { RunningItem } from './RunningList'
import RunningDeal from './RunningDeal'
import RunningSwap from './RunningSwap'

export default function RunningListItem({ item }: { item: RunningItem }) {
  return (
    <div className="p-4 m-8 bg-gray-200 border-2 border-gray-500">
      {item.type === 'deal' && <RunningDeal deal={item.id} />}
      {item.type === 'swap' && <RunningSwap id={item.id} />}
      {item.type === 'checkpoint' && <CheckpointItem id={item.id} data={item.data} />}
    </div>
  )
}
