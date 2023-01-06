'use client'

import CheckpointItem from './CheckpointItem'
import { FundingItem, RunningItem } from './RunningList'
import DealItem from './DealItem'
import SwapItem from './SwapItem'
import { CheckpointEntry, DealInfo } from '../../proto/farcaster_pb'
import { Panel } from '../ui/Panel'

export default function RunningListItem({ item, funding }: { item: RunningItem; funding?: FundingItem }) {
  return (
    <Panel className="bg-white">
      <div className="p-8">
        {item.type === 'deal' && <DealItem id={item.id} data={item.data as DealInfo} />}
        {item.type === 'swap' && <SwapItem id={item.id} data={item.data as DealInfo} funding={funding} />}
        {item.type === 'checkpoint' && <CheckpointItem id={item.id} data={item.data as CheckpointEntry} />}
      </div>
    </Panel>
  )
}
