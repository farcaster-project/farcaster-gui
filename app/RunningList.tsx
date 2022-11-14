'use client'

import { use, useCallback, useEffect, useState } from 'react'
import { cva } from 'class-variance-authority'
import { FarcasterClient } from '../proto/FarcasterServiceClientPb'
import { InfoRequest } from '../proto/farcaster_pb'
import RunningListItem from './RunningListItem'
import { useRefresh } from './hooks'

const fcd = new FarcasterClient('http://localhost:50051')

export type RunningItem = {
  id: string
  type: 'swap' | 'offer'
}

export type Filters = {
  swaps: boolean
  offers: boolean
}

// Get the list of swaps and offers and merge them into one standardized array
async function getDataList(): Promise<RunningItem[]> {
  const info = await fcd.info(new InfoRequest(), null)
  const [swaps, offers] = await Promise.all([info.getSwapsList(), info.getOffersList()])
  const typedOffers: RunningItem[] = offers.map((id) => ({ id: id, type: 'offer' }))
  return swaps
    .map(
      (id) =>
        ({
          id: id,
          type: 'swap',
        } as RunningItem)
    )
    .concat(typedOffers)
}

const defaultFilters: Filters = {
  swaps: true,
  offers: true,
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

const pageButton = cva(['px-4', 'py-1', 'rounded'], {
  variants: {
    active: {
      true: ['bg-gray-500', 'text-gray-100'],
      false: ['bg-gray-200 ', 'text-gray-800'],
    },
  },
  defaultVariants: {
    active: false,
  },
})

function NavList({ pages, current, pageSet }: { pages: number; current: number; pageSet: (page: number) => void }) {
  return (
    <div className="flex space-x-2 items-center">
      <p>Page:</p>
      <ul className="flex space-x-2 items-center">
        {Array.from(Array(pages).keys()).map((_, page) => (
          <li key={page}>
            <button className={pageButton({ active: current === page })} onClick={() => pageSet(page)}>
              {page + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const itemPerPage = 2

export default function RunningList() {
  const [filters, filtersSet] = useState<Filters>(defaultFilters)
  const [list, listSet] = useState<RunningItem[]>([])
  const [currentPage, currentPageSet] = useState(0)

  const filteredList = list
    .filter((i) => (i.type === 'offer' ? filters.offers : true))
    .filter((i) => (i.type === 'swap' ? filters.swaps : true))
  const nbPages = Math.ceil(filteredList.length / itemPerPage)

  useRefresh(
    useCallback(() => {
      getDataList().then(listSet)
    }, []),
    3000
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
        offers{' '}
        <input
          type="checkbox"
          checked={filters.offers}
          onChange={(e) => filtersSet((v) => ({ ...v, offers: e.target.checked }))}
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
