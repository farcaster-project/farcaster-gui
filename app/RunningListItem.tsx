'use client'

import { RunningItem } from './RunningList'
import RunningOffer from './RunningOffer'
import RunningSwap from './RunningSwap'

export default function RunningListItem({ item }: { item: RunningItem }) {
  switch (item.type) {
    case 'offer':
      return <RunningOffer offer={item.id} />
    case 'swap':
      return <RunningSwap id={item.id} />
  }
}
