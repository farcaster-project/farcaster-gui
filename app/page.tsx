'use client'

import { useState } from 'react'
import RunningList from '../components/lists/RunningList'
import { Panel } from '../components/ui/Panel'
import { defaultFilters, Filters } from '../components/ui/swaps/Filters'
import { Title } from '../components/ui/Title'

export default function Page() {
  const [filters, filtersSet] = useState<Filters>(defaultFilters)

  return (
    <>
      <div className="my-8 mt-16">
        <Title>My Swaps</Title>
      </div>
      <div className="mb-16">
        <Panel className="bg-white">
          <div className="p-8">
            <Filters filters={filters} filtersSet={filtersSet} />
          </div>
        </Panel>
        <div className="mt-8">
          <RunningList filters={filters}></RunningList>
        </div>
      </div>
    </>
  )
}
