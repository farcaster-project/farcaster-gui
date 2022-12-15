'use client'

import { useCallback, useEffect, useState } from 'react'
import { FarcasterClient } from '../proto/FarcasterServiceClientPb'
import {
  CheckpointEntry,
  CheckpointsRequest,
  CheckpointsResponse,
  InfoRequest,
  InfoResponse,
  ListDealsRequest,
  ListDealsResponse,
  DealSelector,
} from '../proto/farcaster_pb'
import RunningListItem from './RunningListItem'
import { ResultCallbackHandler, useRefresh, useRpc } from './hooks'
import { Button } from '../components/input'

export type RunningItem = {
  id: string
  type: 'swap' | 'deal' | 'checkpoint'
  data?: CheckpointEntry.AsObject
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
// standardized array. Filter out checkpoints present in the list of running
// swaps and only query the selected deals.
async function getDataList(
  filters: QueryFilters,
  fcd: FarcasterClient,
  res: ResultCallbackHandler
): Promise<RunningItem[]> {
  // build an array of promises that call all the data we need
  // hook the res handler in all calls to catch errors and save them in the global state
  // await all the array and get the results
  const [info, deals, ckpts] = await Promise.all([
    new Promise<InfoResponse>((resolve, reject) => {
      fcd.info(
        new InfoRequest(),
        null,
        res(resolve, () => reject())
      )
    }),
    new Promise<ListDealsResponse>((resolve, reject) => {
      fcd.listDeals(
        new ListDealsRequest().setDealSelector(filters.deals),
        null,
        res(resolve, () => reject())
      )
    }),
    new Promise<CheckpointsResponse>((resolve, reject) => {
      fcd.checkpoints(
        new CheckpointsRequest(),
        null,
        res(resolve, () => reject())
      )
    }),
  ])

  const [swaps, checkpoints] = [info.getSwapsList(), ckpts.getCheckpointEntriesList()]
  const typedSwaps: RunningItem[] = swaps.map((id) => ({ id: id, type: 'swap' }))
  // fixme, pass the deal to avoid second call to decode
  const typedDeals: RunningItem[] = deals.getDealsList().map((id) => ({ id: id.getEncodedDeal(), type: 'deal' }))
  const typedCheckpoints: RunningItem[] = checkpoints
    .filter((checkpoint) => !swaps.includes(checkpoint.getSwapId()))
    .map((checkpoint) => ({
      id: checkpoint.getSwapId(),
      type: 'checkpoint',
      data: checkpoint.toObject(),
    }))
  return typedSwaps.concat(typedDeals).concat(typedCheckpoints)
}

const defaultQueryFilters: QueryFilters = {
  deals: DealSelector.OPEN,
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
  const [queryFilters, queryFiltersSet] = useState<QueryFilters>(defaultQueryFilters)
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
      getDataList(queryFilters, fcd, res).then(listSet)
    }, [queryFilters, fcd, res]),
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
        open{' '}
        <input
          type="radio"
          name="deal-selector"
          checked={queryFilters.deals === DealSelector.OPEN}
          onChange={(e) => queryFiltersSet((v) => ({ ...v, deals: DealSelector.OPEN }))}
        />
        in progress{' '}
        <input
          type="radio"
          name="deal-selector"
          checked={queryFilters.deals === DealSelector.IN_PROGRESS}
          onChange={(e) => queryFiltersSet((v) => ({ ...v, deals: DealSelector.IN_PROGRESS }))}
        />
        ended{' '}
        <input
          type="radio"
          name="deal-selector"
          checked={queryFilters.deals === DealSelector.ENDED}
          onChange={(e) => queryFiltersSet((v) => ({ ...v, deals: DealSelector.ENDED }))}
        />
        all{' '}
        <input
          type="radio"
          name="deal-selector"
          checked={queryFilters.deals === DealSelector.ALL}
          onChange={(e) => queryFiltersSet((v) => ({ ...v, deals: DealSelector.ALL }))}
        />
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
