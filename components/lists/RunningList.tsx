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
import { Button } from '../inputs/Button'
import { ResultCallbackHandler, useProfile, useRefresh, useRpc } from '../../app/hooks'
import { Profile } from '../../app/settings-provider'
import { netToSelector } from '../utils'

export type RunningItem = {
  id: string
  type: 'swap' | 'deal' | 'checkpoint'
  data?: DealInfo | CheckpointEntry
}

export type QueryFilters = {
  deals: DealSelector
}

export type Filters = {
  swaps: boolean
  deals: boolean
  checkpoints: boolean
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
          .setDealSelector(DealSelector.IN_PROGRESS)
          .setNetworkSelector(netToSelector(profile.network)),
        null,
        res(resolve, () => reject())
      )
    }),
    new Promise<ListDealsResponse>((resolve, reject) => {
      fcd.listDeals(
        new ListDealsRequest().setDealSelector(DealSelector.OPEN).setNetworkSelector(netToSelector(profile.network)),
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
  console.log([sRes, dRes, cRes])

  const [swaps, deals, checkpoints] = [sRes.getDealsList(), dRes.getDealsList(), cRes.getCheckpointEntriesList()]
  const typedSwaps: RunningItem[] = swaps.map((deal) => ({ id: deal.getUuid(), type: 'swap', data: deal }))
  const typedDeals: RunningItem[] = deals.map((deal) => ({ id: deal.getUuid(), type: 'deal', data: deal }))
  const typedCheckpoints: RunningItem[] = checkpoints.map((checkpoint) => ({
    id: checkpoint.getSwapId(),
    type: 'checkpoint',
    data: checkpoint,
  }))
  return typedSwaps.concat(typedDeals).concat(typedCheckpoints)
}

const defaultFilters: Filters = {
  swaps: true,
  deals: true,
  checkpoints: true,
}

function NavList({ pages, current, pageSet }: { pages: number; current: number; pageSet: (page: number) => void }) {
  return (
    <div className="flex space-x-2 items-center">
      <p>Page:</p>
      <ul className="flex space-x-2 items-center">
        {Array.from(Array(pages).keys()).map((_, page) => (
          <li key={page}>
            <Button active={current === page} onClick={() => pageSet(page)}>
              {page + 1}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const itemPerPage = 10

export default function RunningList() {
  //const [queryFilters, queryFiltersSet] = useState<QueryFilters>(defaultQueryFilters)
  const [profile] = useProfile()
  const [filters, filtersSet] = useState<Filters>(defaultFilters)
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
        console.log(res)
        listSet(res)
      })
    }, [profile, fcd, res]),
    5000
  )

  useEffect(() => {
    currentPageSet(Math.min(currentPage, Math.max(0, nbPages - 1)))
  }, [currentPage, nbPages])

  return (
    <>
      <div>
        filters: swaps{' '}
        <input
          type="checkbox"
          checked={filters.swaps}
          onChange={(e) => filtersSet((v) => ({ ...v, swaps: e.target.checked }))}
        />{' '}
        deals:{' '}
        <input
          type="checkbox"
          checked={filters.deals}
          onChange={(e) => filtersSet((v) => ({ ...v, deals: e.target.checked }))}
        />{' '}
        checkpoints{' '}
        <input
          type="checkbox"
          checked={filters.checkpoints}
          onChange={(e) => filtersSet((v) => ({ ...v, checkpoints: e.target.checked }))}
        />
      </div>
      {filteredList.length === 0 && <p>No items in the list</p>}
      {filteredList.length > 0 && (
        <>
          <div>
            <div>
              {list.length === 0 && <p>No item in the list</p>}
              {filteredList
                .slice(currentPage * itemPerPage, Math.min(currentPage * itemPerPage + itemPerPage, list.length))
                .map((item) => (
                  <RunningListItem key={item.id} item={item} />
                ))}
            </div>
            <NavList pages={nbPages} current={currentPage} pageSet={currentPageSet} />
          </div>
        </>
      )}
    </>
  )
}
