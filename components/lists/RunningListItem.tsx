'use client'

import CheckpointItem from './CheckpointItem'
import { RunningItem } from './RunningList'
import DealItem from './DealItem'
import SwapItem from './SwapItem'
import { CheckpointEntry, DealInfo } from '../../proto/farcaster_pb'

export default function RunningListItem({ item }: { item: RunningItem }) {
  return (
    <div className="p-4 m-8 bg-gray-200 border-2 border-gray-500">
      {item.type === 'deal' && <DealItem id={item.id} data={item.data as DealInfo} />}
      {item.type === 'swap' && <SwapItem id={item.id} data={item.data as DealInfo} />}
      {item.type === 'checkpoint' && <CheckpointItem id={item.id} data={item.data as CheckpointEntry} />}
    </div>
  )
}
