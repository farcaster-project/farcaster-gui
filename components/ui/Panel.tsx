import { ReactNode } from 'react'
import { Blockchain, Network, SwapRole, TradeRole, DeserializedDeal } from '../../proto/farcaster_pb'
import { chainToString, isMaker, netToString } from '../utils'
import { Block, Label } from './Label'

export type PanelParams = {
  arbitratingAmount: number
  accordantAmount: number
  makerRole: SwapRole
  network: Network
  arbitratingBlockchain: Blockchain
  accordantBlockchain: Blockchain
  displayForRole: TradeRole
}

export function TradePanel(params: PanelParams) {
  const roleIsMaker = isMaker(params.displayForRole)
  switch (params.makerRole) {
    case SwapRole.ALICE:
      return (
        <span>
          {roleIsMaker ? 'You sell ' : 'You buy '}
          <Label>
            {params.accordantAmount} {chainToString(params.accordantBlockchain)}
          </Label>{' '}
          for{' '}
          <Label>
            {params.arbitratingAmount} {chainToString(params.arbitratingBlockchain)}
          </Label>{' '}
          on <Label>{netToString(params.network)}</Label>
        </span>
      )
    case SwapRole.BOB:
      return (
        <span>
          {roleIsMaker ? 'You sell ' : 'You buy '}
          <Label>
            {params.arbitratingAmount} {chainToString(params.arbitratingBlockchain)}
          </Label>{' '}
          for{' '}
          <Label>
            {params.accordantAmount} {chainToString(params.accordantBlockchain)}
          </Label>{' '}
          on <Label>{netToString(params.network)}</Label>
        </span>
      )
  }
}

export function DealPanel({
  dealInfo,
  displayForRole,
  deal,
}: {
  dealInfo: DeserializedDeal
  displayForRole: TradeRole
  deal?: String
}) {
  const roleIsMaker = isMaker(displayForRole)
  return (
    <>
      <div className="break-all">
        <div className="mb-3 text-xl">
          <TradePanel
            arbitratingAmount={dealInfo.getArbitratingAmount()}
            accordantAmount={dealInfo.getAccordantAmount()}
            arbitratingBlockchain={dealInfo.getArbitratingBlockchain()}
            accordantBlockchain={dealInfo.getAccordantBlockchain()}
            makerRole={dealInfo.getMakerRole()}
            network={dealInfo.getNetwork()}
            displayForRole={displayForRole}
          />{' '}
          in deal <Label>{dealInfo.getUuid()}</Label>
        </div>
        {deal && (
          <>
            <div>Copy this deal and send it to the taker:</div>
            <Block intent="secondary">{deal}</Block>
          </>
        )}
      </div>
      <div className="mb-3">
        <div>{roleIsMaker ? 'Taker will connect to your peer at:' : 'You will connect to maker peer at:'}</div>
        <Block intent="primary">{dealInfo && `${dealInfo.getNodeId()}@${dealInfo.getPeerAddress()}`}</Block>
      </div>
      <div>
        <div className="mb-2">
          Timelocks: cancel <Label>{dealInfo.getCancelTimelock()} blocks</Label>
          punish <Label>{dealInfo.getPunishTimelock()} blocks</Label>
        </div>
        <div>
          Fee: <Label>{dealInfo.getFeeStrategy()}</Label>
        </div>
      </div>
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
