import { ReactNode } from 'react'
import { Blockchain, Network, SwapRole, TradeRole, DeserializedDeal } from '../../proto/farcaster_pb'
import { btcBlockToTimespan, chainToAbrev, chainToString, isMaker, netToString, picoToXmr, satsToBtc } from '../utils'
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

export function DealPanel({
  dealInfo,
  localTradeRole,
  deal,
}: {
  dealInfo: DeserializedDeal
  localTradeRole: TradeRole
  deal?: String
}) {
  const roleIsMaker = isMaker(localTradeRole)
  return (
    <>
      <div className="break-all">
        <div className="text-sm font-mono text-slate-700 mb-6">
          Deal <span className="bg-gray-300 px-2 py-1 rounded-sm">{dealInfo.getUuid()}</span>
        </div>
        <div className="mb-3 text-xl">
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
    <div className={`rounded-xl p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 mb-6 ${className}`}>
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
