'use client'

import { useCallback, useEffect, useState } from 'react'
import { FarcasterClient } from '../proto/FarcasterServiceClientPb'
import {
  CheckpointEntry,
  CheckpointsRequest,
  CheckpointsResponse,
  InfoRequest,
  InfoResponse,
  ListOffersRequest,
  ListOffersResponse,
  OfferSelector,
} from '../proto/farcaster_pb'
import RunningListItem from './RunningListItem'
import { ResultCallbackHandler, useRefresh, useRpc } from './hooks'
import { Button } from '../components/input'

export type RunningItem = {
  id: string
  type: 'swap' | 'offer' | 'checkpoint'
  data?: CheckpointEntry.AsObject
}

export type QueryFilters = {
  offers: OfferSelector
}

export type Filters = {
  swaps: boolean
  offers: boolean
  checkpoints: boolean
}

// Get the list of swaps, offers, and checkpoints and merge them into one
// standardized array. Filter out checkpoints present in the list of running
// swaps and only query the selected offers.
async function getDataList(
  filters: QueryFilters,
  fcd: FarcasterClient,
  res: ResultCallbackHandler
): Promise<RunningItem[]> {
  // build an array of promises that call all the data we need
  // hook the res handler in all calls to catch errors and save them in the global state
  // await all the array and get the results
  const [info, offers, ckpts] = await Promise.all([
    new Promise<InfoResponse>((resolve, reject) => {
      fcd.info(
        new InfoRequest(),
        null,
        res(resolve, () => reject())
      )
    }),
    new Promise<ListOffersResponse>((resolve, reject) => {
      fcd.listOffers(
        new ListOffersRequest().setSelector(filters.offers),
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
  const typedOffers: RunningItem[] = offers.getPublicOffersList().map((id) => ({ id: id, type: 'offer' }))
  const typedCheckpoints: RunningItem[] = checkpoints
    .filter((checkpoint) => !swaps.includes(checkpoint.getSwapId()))
    .map((checkpoint) => ({
      id: checkpoint.getSwapId(),
      type: 'checkpoint',
      data: checkpoint.toObject(),
    }))
  return typedSwaps.concat(typedOffers).concat(typedCheckpoints)
}

const defaultQueryFilters: QueryFilters = {
  offers: OfferSelector.OPEN,
}

const defaultFilters: Filters = {
  swaps: true,
  offers: true,
  checkpoints: true,
}

const dummyRunningItem: RunningItem[] = [
  {
    id: ' Offer:Cke4ftrP5A7ikcMpynJqBEPrjS5nXuMHp1LQM2fvVdFMNR4h5TrWhRR11111uMp6P6KQQNttS4eSR11111TBPSF1113GTvtvqfD1111114A4TUcqRMKpcSttoC2RGdaKmhaxcBufKUapvpCcKVpVgCzp4H111111111111111111111111111111111111111115ymH83buC1xn4F35',
    type: 'offer',
  },
  {
    id: ' Offer:Cke4ftrP5A7H2bxn65kkwhPoZrPib5rpw1LQM2fvVdFMNR4h5TrWhRR11111uMMAegWn8KKebRunV11111TBPSF1113GTvtvqfD1111114A4TUcqRMKpcSttoC2RGdaKmhaxcBufKUapvpCcKVpVgCzp4H111111111111111111111111111111111111111115ymH83buC2kfug5P',
    type: 'offer',
  },
  {
    id: '0x84688dc610ccfbda678f934793c8432f726ee9ea27b85fbfdf293e363044f5bd',
    type: 'swap',
  },
]

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

const itemPerPage = 2

export default function RunningList() {
  const [queryFilters, queryFiltersSet] = useState<QueryFilters>(defaultQueryFilters)
  const [filters, filtersSet] = useState<Filters>(defaultFilters)
  const [list, listSet] = useState<RunningItem[]>([])
  const [currentPage, currentPageSet] = useState(0)
  const [fcd, res] = useRpc()

  const filteredList = list
    .filter((i) => (i.type === 'offer' ? filters.offers : true))
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
        offers:{' '}
        <input
          type="checkbox"
          checked={filters.offers}
          onChange={(e) => filtersSet((v) => ({ ...v, offers: e.target.checked }))}
        />{' '}
        open{' '}
        <input
          type="radio"
          name="offer-selector"
          checked={queryFilters.offers === OfferSelector.OPEN}
          onChange={(e) => queryFiltersSet((v) => ({ ...v, offers: OfferSelector.OPEN }))}
        />
        in progress{' '}
        <input
          type="radio"
          name="offer-selector"
          checked={queryFilters.offers === OfferSelector.IN_PROGRESS}
          onChange={(e) => queryFiltersSet((v) => ({ ...v, offers: OfferSelector.IN_PROGRESS }))}
        />
        ended{' '}
        <input
          type="radio"
          name="offer-selector"
          checked={queryFilters.offers === OfferSelector.ENDED}
          onChange={(e) => queryFiltersSet((v) => ({ ...v, offers: OfferSelector.ENDED }))}
        />
        all{' '}
        <input
          type="radio"
          name="offer-selector"
          checked={queryFilters.offers === OfferSelector.ALL}
          onChange={(e) => queryFiltersSet((v) => ({ ...v, offers: OfferSelector.ALL }))}
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
