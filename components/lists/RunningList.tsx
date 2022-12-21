'use client'

import { useCallback, useEffect, useState } from 'react'
import { FarcasterClient } from '../../proto/FarcasterServiceClientPb'
import {
  CheckpointEntry,
  CheckpointsRequest,
  CheckpointsResponse,
  ListDealsRequest,
  ListDealsResponse,
  DealSelector,
  CheckpointSelector,
  DealInfo,
} from '../../proto/farcaster_pb'
import RunningListItem from './RunningListItem'
import { ResultCallbackHandler, useProfile, useRefresh, useRpc } from '../../app/hooks'
import { Profile } from '../../app/settings-provider'
import { netToSelector } from '../utils'
import { Filters } from '../ui/swaps/Filters'
import { NavPageMenu } from './NavPageMenu'
import { Panel } from '../ui/Panel'

export type RunningItem = {
  id: string
  type: 'swap' | 'deal' | 'checkpoint'
  data?: DealInfo | CheckpointEntry
}

// Get the list of swaps, deals, and checkpoints and merge them into one
// standardized array.
async function getDataList(profile: Profile, fcd: FarcasterClient, res: ResultCallbackHandler): Promise<RunningItem[]> {
  // build an array of promises that call all the data we need
  // hook the res handler in all calls to catch errors and save them in the global state
  // await all the array and get the results
  const [sRes, dRes, cRes] = await Promise.all([
    new Promise<ListDealsResponse>((resolve, reject) => {
      fcd.listDeals(
        new ListDealsRequest()
          .setDealSelector(DealSelector.IN_PROGRESS_DEALS)
          .setNetworkSelector(netToSelector(profile.network)),
        null,
        res(resolve, () => reject())
      )
    }),
    new Promise<ListDealsResponse>((resolve, reject) => {
      fcd.listDeals(
        new ListDealsRequest()
          .setDealSelector(DealSelector.OPEN_DEALS)
          .setNetworkSelector(netToSelector(profile.network)),
        null,
        res(resolve, () => reject())
      )
    }),
    new Promise<CheckpointsResponse>((resolve, reject) => {
      fcd.checkpoints(
        new CheckpointsRequest()
          .setCheckpointSelector(CheckpointSelector.AVAILABLE_FOR_RESTORE)
          .setNetworkSelector(netToSelector(profile.network)),
        null,
        res(resolve, () => reject())
      )
    }),
  ])

  const [swaps, deals, checkpoints] = [sRes.getDealsList(), dRes.getDealsList(), cRes.getCheckpointEntriesList()]
  const typedSwaps: RunningItem[] = swaps.map((deal) => ({
    id: deal.getDeserializedDeal()!.getUuid(),
    type: 'swap',
    data: deal,
  }))
  const typedDeals: RunningItem[] = deals.map((deal) => ({
    id: deal.getDeserializedDeal()!.getUuid(),
    type: 'deal',
    data: deal,
  }))
  const typedCheckpoints: RunningItem[] = checkpoints.map((checkpoint) => ({
    id: checkpoint.getSwapId(),
    type: 'checkpoint',
    data: checkpoint,
  }))
  return typedSwaps.concat(typedDeals).concat(typedCheckpoints)
}

export default function RunningList({ filters, itemPerPage = 10 }: { filters: Filters; itemPerPage?: number }) {
  const [profile] = useProfile()
  const [list, listSet] = useState<RunningItem[]>([])
  const [currentPage, currentPageSet] = useState(0)
  const [fcd, res] = useRpc()

  const filteredList = list
    .filter((i) => (i.type === 'deal' ? filters.deals : true))
    .filter((i) => (i.type === 'swap' ? filters.swaps : true))
    .filter((i) => (i.type === 'checkpoint' ? filters.checkpoints : true))
  const nbPages = Math.ceil(filteredList.length / itemPerPage)

  useRefresh(
    useCallback(() => {
      getDataList(profile, fcd, res).then((res) => {
        listSet(res)
      })
      // empty cleanup fn for now
      return () => {}
    }, [profile, fcd, res]),
    5000
  )

  useEffect(() => {
    currentPageSet(Math.min(currentPage, Math.max(0, nbPages - 1)))
  }, [currentPage, nbPages])

  return (
    <>
      {filteredList.length === 0 && (
        <Panel className="bg-white">
          <div className="p-8">
            <p className="text-lg text-slate-800 font-medium">No items found!</p>
            <p className="text-sm text-slate-700">
              You are probably not running any swaps at the moment, otherwise check your filters.
            </p>
          </div>
        </Panel>
      )}
      {filteredList.length > 0 && (
        <>
          {filteredList
            .slice(currentPage * itemPerPage, Math.min(currentPage * itemPerPage + itemPerPage, list.length))
            .map((item) => (
              <RunningListItem key={item.id} item={item} />
            ))}
          <div className="mt-16">
            <NavPageMenu pages={nbPages} current={currentPage} pageSet={currentPageSet} />
          </div>
        </>
      )}
    </>
  )
}
