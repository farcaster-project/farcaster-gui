import { Blockchain, Network, SwapRole, TradeRole, DealInfoResponse } from '../proto/farcaster_pb'
import { Block, Label } from './labels'
import { chainToString, isMaker, netToString } from './utils'

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
  dealInfo: DealInfoResponse
  displayForRole: TradeRole
  deal?: String
}) {
  const roleIsMaker = isMaker(displayForRole)
  return (
    <>
      <div className="break-all">
        <div className="mb-3 text-xl">
          <TradePanel
            arbitratingAmount={dealInfo.getDealInfo()!.getArbitratingAmount()}
            accordantAmount={dealInfo.getDealInfo()!.getAccordantAmount()}
            arbitratingBlockchain={dealInfo.getDealInfo()!.getArbitratingBlockchain()}
            accordantBlockchain={dealInfo.getDealInfo()!.getAccordantBlockchain()}
            makerRole={dealInfo.getDealInfo()!.getMakerRole()}
            network={dealInfo.getDealInfo()!.getNetwork()}
            displayForRole={displayForRole}
          />{' '}
          in deal <Label>{dealInfo.getDealInfo()!.getUuid()}</Label>
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
        <Block intent="primary">
          {dealInfo && `${dealInfo.getDealInfo()!.getNodeId()}@${dealInfo.getDealInfo()!.getPeerAddress()}`}
        </Block>
      </div>
      <div>
        <div className="mb-2">
          Timelocks: cancel <Label>{dealInfo.getDealInfo()!.getCancelTimelock()} blocks</Label>
          punish <Label>{dealInfo.getDealInfo()!.getPunishTimelock()} blocks</Label>
        </div>
        <div>
          Fee: <Label>{dealInfo.getDealInfo()!.getFeeStrategy()}</Label>
        </div>
      </div>
    </>
  )
}
