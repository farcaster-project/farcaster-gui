import { Blockchain, Network, OfferInfoResponse, SwapRole, TradeRole } from '../proto/farcaster_pb'
import { Label } from './Label'
import { chainToString, isMaker, otherSwapRole } from './utils'

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
          </Label>
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
          </Label>
        </span>
      )
  }
}

export function OfferPanel({
  offerInfo,
  displayForRole,
  offer,
}: {
  offerInfo: OfferInfoResponse
  displayForRole: TradeRole
  offer?: String
}) {
  const roleIsMaker = isMaker(displayForRole)
  return (
    <>
      <div className="break-all">
        <div className="mb-3 text-xl">
          <TradePanel
            arbitratingAmount={offerInfo.getArbitratingAmount()}
            accordantAmount={offerInfo.getAccordantAmount()}
            arbitratingBlockchain={offerInfo.getArbitratingBlockchain()}
            accordantBlockchain={offerInfo.getAccordantBlockchain()}
            makerRole={offerInfo.getMakerRole()}
            network={offerInfo.getNetwork()}
            displayForRole={displayForRole}
          />{' '}
          in offer <Label>{offerInfo.getUuid()}</Label>
        </div>
        {offer && (
          <>
            <div>Copy this offer and send it to the taker:</div>
            <div className="text-gray-300 bg-gray-700 p-2 mb-3 rounded">{offer}</div>
          </>
        )}
      </div>
      <div className="mb-3">
        <div>{roleIsMaker ? 'Taker will connect to your peer at:' : 'You will connect to maker peer at:'}</div>
        <div className="text-gray-100 bg-gray-900 p-2 rounded">
          {offerInfo && `${offerInfo.getNodeId()}@${offerInfo.getPeerAddress()}`}
        </div>
      </div>
      <div>
        <div className="mb-2">
          Timelocks: cancel <Label>{offerInfo.getCancelTimelock()} blocks</Label>
          punish <Label>{offerInfo.getPunishTimelock()} blocks</Label>
        </div>
        <div>
          Fee: <Label>{offerInfo.getFeeStrategy()}</Label>
        </div>
      </div>
    </>
  )
}
