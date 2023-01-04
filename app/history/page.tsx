'use client'

import { DealInfo, DealSelector, ListDealsRequest, ListDealsResponse } from '../../proto/farcaster_pb'
import { DealPanel, Panel } from '../../components/ui/Panel'
import { IoReturnUpBackSharp } from 'react-icons/io5'
import { Loader } from '../../components/ui/SettingsLoader'
import { MdClear } from 'react-icons/md'
import { RiAlarmWarningLine } from 'react-icons/ri'
import { Title } from '../../components/ui/Title'
import { cva } from 'class-variance-authority'
import { dealStatusToStatus, netToSelector } from '../../components/utils'
import { useEffect, useMemo, useState } from 'react'
import { useProfile, useRpc } from '../hooks'
import { NavPageMenu } from '../../components/lists/NavPageMenu'

const itemPannel = cva(['outline', 'outline-4', 'outline-offset-4'], {
  variants: {
    status: {
      Open: ['bg-white', 'outline-slate-50'],
      Progress: ['bg-white', 'outline-slate-50'],
      Revoked: ['bg-zinc-50', 'outline-zinc-300'],
      Swapped: ['bg-teal-50', 'outline-teal-300'],
      Refunded: ['bg-amber-50', 'outline-amber-400'],
      Punished: ['bg-rose-50', 'outline-rose-500'],
      Aborted: ['bg-zinc-50', 'outline-zinc-300'],
    },
  },
})

const itemTitle = cva(['text-2xl', 'font-semibold', 'mb-6'], {
  variants: {
    status: {
      Open: ['text-slate-600'],
      Progress: ['text-slate-600'],
      Revoked: ['text-zinc-600'],
      Swapped: ['text-teal-600'],
      Refunded: ['text-amber-500'],
      Punished: ['text-rose-600'],
      Aborted: ['text-zinc-600'],
    },
  },
})

export default function PageHistory() {
  const [profile] = useProfile()
  const [fcd, res] = useRpc()
  const [deals, dealsSet] = useState<ListDealsResponse | null>(null)
  const [search, searchSet] = useState<string>('')
  const [currentPage, currentPageSet] = useState(0)

  useEffect(() => {
    fcd.listDeals(
      new ListDealsRequest()
        .setDealSelector(DealSelector.ENDED_DEALS)
        .setNetworkSelector(netToSelector(profile.network)),
      null,
      res((resp) => {
        dealsSet(resp)
      })
    )
  }, [fcd, res, profile.network])

  const searchDeal = (deal: DealInfo, search: string): boolean =>
    dealStatusToStatus(deal.getDealStatus()).toLowerCase().includes(search.toLowerCase()) ||
    deal.getDeserializedDeal()!.getUuid().toLocaleLowerCase().includes(search.toLowerCase())

  const filteredDeals = useMemo(
    () =>
      deals
        ?.getDealsList()
        .filter((deal) => searchDeal(deal, search))
        .sort((a, b) => a.getDeserializedDeal()!.getUuid().localeCompare(b.getDeserializedDeal()!.getUuid())),
    [deals, search]
  )
  const itemPerPage = 10
  const nbPages = filteredDeals ? Math.ceil(filteredDeals.length / itemPerPage) : 0

  useEffect(() => {
    currentPageSet(Math.min(currentPage, Math.max(0, nbPages - 1)))
  }, [currentPage, nbPages])

  return (
    <div className="mb-16">
      <div className="my-8 mt-16">
        <Title>
          History
          {filteredDeals && <span className="text-sm pl-3">({filteredDeals.length} deals)</span>}
        </Title>
      </div>
      <div className="mb-8">
        <Panel className="bg-white">
          <div className="flex items-center space-x-6 p-4">
            <div className="text-slate-600 text-sm">Search in history</div>
            <div className="grow">
              <input
                className="w-full h-8 text-xl font-mono font-semibold text-slate-800 focus:outline-none border-b-2 border-slate-200"
                name="history-search"
                value={search}
                onChange={(e) => searchSet(e.target.value)}
              />
            </div>
            <div className="text-2xl cursor-pointer text-slate-300 hover:text-slate-700" onClick={() => searchSet('')}>
              <MdClear />
            </div>
          </div>
        </Panel>
      </div>
      {nbPages > 0 && (
        <div className="mt-8 mb-16 mx-2">
          <NavPageMenu pages={nbPages} current={currentPage} pageSet={currentPageSet} />
        </div>
      )}
      {!filteredDeals && <Loader />}
      {filteredDeals?.length === 0 && (
        <Panel className="bg-white">
          <div className="p-8">
            <p className="text-lg text-slate-800 font-medium">No items found!</p>
            <p className="text-sm text-slate-700">No deals found in history, otherwise check your filters.</p>
          </div>
        </Panel>
      )}
      {filteredDeals &&
        filteredDeals
          .slice(currentPage * itemPerPage, Math.min(currentPage * itemPerPage + itemPerPage, filteredDeals.length))
          .map((dealInfo) => (
            <Panel
              className={itemPannel({ status: dealStatusToStatus(dealInfo.getDealStatus()) })}
              key={dealInfo.getDeserializedDeal()?.getUuid()}
            >
              <div className="p-8">
                <h2 className={itemTitle({ status: dealStatusToStatus(dealInfo.getDealStatus()) })}>
                  {`Deal ${dealStatusToStatus(dealInfo.getDealStatus())}`.toUpperCase()}
                  {dealStatusToStatus(dealInfo.getDealStatus()) === 'Punished' && (
                    <div className="flex font-semibold text-lg items-center space-x-2">
                      <div>
                        <RiAlarmWarningLine />
                      </div>
                      <p>You have been punished during this swap, you lost your money!</p>
                    </div>
                  )}
                  {dealStatusToStatus(dealInfo.getDealStatus()) === 'Refunded' && (
                    <div className="flex font-semibold text-lg items-center space-x-2">
                      <div>
                        <IoReturnUpBackSharp />
                      </div>
                      <p>This deal has been refunded, if you locked some money check your address!</p>
                    </div>
                  )}
                </h2>
                <DealPanel dealInfo={dealInfo.getDeserializedDeal()!} localTradeRole={dealInfo.getLocalTradeRole()} />
              </div>
            </Panel>
          ))}
    </div>
  )
}
