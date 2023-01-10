import { ReactNode } from 'react'
import { BiCopy } from 'react-icons/bi'
import { Blockchain, Network, SwapRole, TradeRole, DeserializedDeal } from '../../proto/farcaster_pb'
import {
  btcBlockToTimespan,
  chainToAbrev,
  chainToString,
  isMaker,
  netToString,
  picoToXmr,
  price,
  satsToBtc,
} from '../utils'
import { Copy } from './Copy'
import { Block, Label } from './Label'

export type PanelParams = {
  arbitratingAmount: number
  accordantAmount: number
  makerRole: SwapRole
  network: Network
  arbitratingBlockchain: Blockchain
  accordantBlockchain: Blockchain
  displayForRole: TradeRole
  labelFor?: ReactNode
}

export function TradePanel(params: PanelParams) {
  const roleIsMaker = isMaker(params.displayForRole)
  switch (params.makerRole) {
    case SwapRole.ALICE:
      return (
        <span>
          {roleIsMaker ? 'Sell ' : 'Buy '}
          <Label>
            {picoToXmr(params.accordantAmount)} {chainToAbrev(params.accordantBlockchain).toUpperCase()}
          </Label>{' '}
          ({chainToString(params.accordantBlockchain)}) {params.labelFor ? params.labelFor : 'for'}{' '}
          <Label>
            {satsToBtc(params.arbitratingAmount)} {chainToAbrev(params.arbitratingBlockchain).toUpperCase()}
          </Label>{' '}
          ({chainToString(params.arbitratingBlockchain)})
          <span className="pl-1 text-sm">
            on{' '}
            <Label intensity="light" rounded={false}>
              {netToString(params.network)}
            </Label>
          </span>
        </span>
      )
    case SwapRole.BOB:
      return (
        <span>
          {roleIsMaker ? 'Sell ' : 'Buy '}
          <Label>
            {satsToBtc(params.arbitratingAmount)} {chainToAbrev(params.arbitratingBlockchain).toUpperCase()}
          </Label>{' '}
          ({chainToString(params.arbitratingBlockchain)}) {params.labelFor ? params.labelFor : 'for'}{' '}
          <Label>
            {picoToXmr(params.accordantAmount)} {chainToAbrev(params.accordantBlockchain).toUpperCase()}
          </Label>{' '}
          ({chainToString(params.accordantBlockchain)}){' '}
          <span className="pl-1 text-sm">
            on{' '}
            <Label intensity="light" rounded={false}>
              {netToString(params.network)}
            </Label>
          </span>
        </span>
      )
  }
}

export function PricePanel({
  arbitratingAmount,
  accordantAmount,
  makerRole,
  arbitratingBlockchain,
  accordantBlockchain,
}: {
  arbitratingAmount: number
  accordantAmount: number
  makerRole: SwapRole
  arbitratingBlockchain: Blockchain
  accordantBlockchain: Blockchain
}) {
  switch (makerRole) {
    case SwapRole.ALICE:
      return (
        <span>
          {price(picoToXmr(accordantAmount), satsToBtc(arbitratingAmount))}{' '}
          {chainToAbrev(accordantBlockchain).toUpperCase()}/{chainToAbrev(arbitratingBlockchain).toUpperCase()}
        </span>
      )
    case SwapRole.BOB:
      return (
        <span>
          {price(satsToBtc(arbitratingAmount), picoToXmr(accordantAmount))}{' '}
          {chainToAbrev(arbitratingBlockchain).toUpperCase()}/{chainToAbrev(accordantBlockchain).toUpperCase()}
        </span>
      )
  }
}

export function DealPanel({
  dealInfo,
  localTradeRole,
  deal,
  displayHeader = true,
}: {
  dealInfo: DeserializedDeal
  localTradeRole: TradeRole
  deal?: String
  displayHeader?: boolean
}) {
  const roleIsMaker = isMaker(localTradeRole)
  return (
    <>
      <div className="break-all">
        {displayHeader && (
          <div className="flex space-x-2 text-sm leading-loose font-mono text-slate-700 mb-6 break-all">
            <span>Deal</span>
            <Copy
              className="group"
              data={
                <Label intensity="light" rounded={false}>
                  {dealInfo.getUuid()}
                </Label>
              }
              btn={
                <div className="p-1 hidden group-hover:block text-sm border text-gray-300 border-gray-300 hover:text-gray-600 hover:border-gray-600 rounded">
                  <BiCopy />
                </div>
              }
            />
          </div>
        )}
        <div className="mb-3">
          <div className="text-xl mb-3">
            <TradePanel
              arbitratingAmount={dealInfo.getArbitratingAmount()}
              accordantAmount={dealInfo.getAccordantAmount()}
              arbitratingBlockchain={dealInfo.getArbitratingBlockchain()}
              accordantBlockchain={dealInfo.getAccordantBlockchain()}
              makerRole={dealInfo.getMakerRole()}
              network={dealInfo.getNetwork()}
              displayForRole={localTradeRole}
            />
          </div>
          <div className="flex space-x-2 text-slate-700">
            <div>At a price of</div>
            <div>
              <Label>
                <PricePanel
                  arbitratingAmount={dealInfo.getArbitratingAmount()}
                  accordantAmount={dealInfo.getAccordantAmount()}
                  arbitratingBlockchain={dealInfo.getArbitratingBlockchain()}
                  accordantBlockchain={dealInfo.getAccordantBlockchain()}
                  makerRole={dealInfo.getMakerRole()}
                />
              </Label>
            </div>
          </div>
        </div>
        {deal && (
          <>
            <div>Copy this deal and send it to the taker:</div>
            <Block intent="secondary">{deal}</Block>
          </>
        )}
      </div>
      <div className="my-6">
        <div className="text-slate-700 mb-1 text-sm">
          {roleIsMaker ? 'Taker will connect to your peer at:' : 'Trade executed with counter-party peer at:'}
        </div>
        <Block intent="secondary">{dealInfo && `${dealInfo.getNodeId()}@${dealInfo.getPeerAddress()}`}</Block>
      </div>
      <div>
        <div className="mb-2">
          <TimelockPanel
            cancelTimelock={dealInfo.getCancelTimelock()}
            punishTimelock={dealInfo.getPunishTimelock()}
            localTradeRole={localTradeRole}
            makerRole={dealInfo.getMakerRole()}
          />
        </div>
        <div>
          <FeePanel
            arbitratingBlockchain={dealInfo.getArbitratingBlockchain()}
            feeStrategy={dealInfo.getFeeStrategy()}
          />
        </div>
      </div>
    </>
  )
}

export function TimelockPanel({
  cancelTimelock,
  punishTimelock,
  localTradeRole,
  makerRole,
}: {
  cancelTimelock: number
  punishTimelock: number
  localTradeRole: TradeRole
  makerRole: SwapRole
}) {
  return (
    <>
      <span className="font-semibold text-slate-600">Timelocks</span>: the swap can be cancelled after{' '}
      <Label intensity="light" rounded={false}>
        {cancelTimelock} blocks ({btcBlockToTimespan(cancelTimelock)})
      </Label>{' '}
      and {whoCanBePunished(makerRole, localTradeRole)} can be punished{' '}
      <Label intensity="light" rounded={false}>
        {punishTimelock} blocks ({btcBlockToTimespan(punishTimelock)})
      </Label>{' '}
      after the cancel if {whoCanBePunished(makerRole, localTradeRole)} didn&apos;t refunded.
    </>
  )
}

export function FeePanel({
  arbitratingBlockchain,
  feeStrategy,
}: {
  arbitratingBlockchain: Blockchain
  feeStrategy: string
}) {
  return (
    <>
      <span className="font-semibold text-slate-600">Fee</span>: transactions on {chainToString(arbitratingBlockchain)}{' '}
      will apply{' '}
      <Label intensity="light" rounded={false}>
        {feeStrategy}
      </Label>{' '}
      of fee.
    </>
  )
}

export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`shadow rounded-md p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 mb-6 ${className}`}
    >
      {children}
    </div>
  )
}

function whoCanBePunished(makerSwapRole: SwapRole, localTradeRole: TradeRole): ReactNode {
  const iAmMaker = isMaker(localTradeRole)
  switch (makerSwapRole) {
    case SwapRole.ALICE:
      return iAmMaker ? 'counter-pary' : 'I'
    case SwapRole.BOB:
      return iAmMaker ? 'I' : 'counter-pary'
  }
}
