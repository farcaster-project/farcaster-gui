'use client'

import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'
import { MdClear } from 'react-icons/md'
import { Subtitle } from '../Title'
import { Toggle } from '../Toggle'

export type Filters = {
  search: string
  swaps: boolean
  deals: boolean
  checkpoints: boolean
}

export const defaultFilters: Filters = {
  search: '',
  swaps: true,
  deals: true,
  checkpoints: true,
}

export function Filters({ filters, filtersSet }: { filters: Filters; filtersSet: Dispatch<SetStateAction<Filters>> }) {
  // Filters storage loader
  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage) {
      const serializedFilters = localStorage.getItem('fc_swaps_filters_v1')
      if (serializedFilters) {
        // restore filters
        filtersSet(JSON.parse(serializedFilters) as Filters)
      } else {
        // no filters saved, use defaults and save them in local storage
        localStorage.setItem('fc_swaps_filters_v1', JSON.stringify(defaultFilters))
      }
    }
  }, [filtersSet])

  const saveFilters = useCallback((filters: Filters) => {
    localStorage.setItem('fc_swaps_filters_v1', JSON.stringify(filters))
  }, [])

  return (
    <>
      <div className="mb-2">
        <Subtitle>Filters</Subtitle>
      </div>

      <div className="flex space-x-24 items-center">
        <div className="flex divide-x divide-solid">
          <div className="flex space-x-2 pr-4">
            <div>Swaps</div>
            <div>
              <Toggle
                alt="List swaps"
                enabled={filters.swaps}
                onChange={(b) =>
                  filtersSet((v) => {
                    const filters = { ...v, swaps: b }
                    saveFilters(filters)
                    return filters
                  })
                }
              />
            </div>
          </div>
          <div className="flex space-x-2 px-4">
            <div>Deals</div>
            <div>
              <Toggle
                alt="List deals"
                enabled={filters.deals}
                onChange={(b) =>
                  filtersSet((v) => {
                    const filters = { ...v, deals: b }
                    saveFilters(filters)
                    return filters
                  })
                }
              />
            </div>
          </div>
          <div className="flex space-x-2 pl-4">
            <div>Checkpoints</div>
            <div>
              <Toggle
                alt="List checkpoints"
                enabled={filters.checkpoints}
                onChange={(b) =>
                  filtersSet((v) => {
                    const filters = { ...v, checkpoints: b }
                    saveFilters(filters)
                    return filters
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6 grow">
          <div className="text-slate-600 text-sm">Search</div>
          <div className="grow">
            <input
              className="w-full h-8 text-xl font-mono font-semibold text-slate-800 focus:outline-none border-b-2 border-slate-200"
              name="history-search"
              value={filters.search}
              onChange={(e) => filtersSet((f) => ({ ...f, search: e.target.value }))}
            />
          </div>
          <div
            className="text-2xl cursor-pointer text-slate-300 hover:text-slate-700"
            onClick={() => filtersSet((f) => ({ ...f, search: '' }))}
          >
            <MdClear />
          </div>
        </div>
      </div>
    </>
  )
}
