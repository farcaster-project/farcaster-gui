import { Progress, SwapRole, TradeRole } from '../../../../proto/farcaster_pb'
import { Status, StatusBadge } from './Status'
import { SwapLogs } from './SwapLogs'

export interface ProgressState {
  connect: Status
  secrets: Status
  fundArb?: Status
  lockArb: Status
  lockAcc: Status
  buy: Status
}

function process(progress: Progress[]): ProgressState {
  return progress.reduce<ProgressState>(
    (res, prog) => {
      switch (prog.getProgressCase()) {
        case Progress.ProgressCase.MESSAGE:
          if (new RegExp('Proposing to take swap*').test(prog.getMessage())) {
            return { ...res, connect: true }
          }
          if (new RegExp('Accepting swap*').test(prog.getMessage())) {
            return { ...res, connect: true }
          }
        case Progress.ProgressCase.FAILURE:
          return res
        case Progress.ProgressCase.SUCCESS:
          return res
        case Progress.ProgressCase.STATE_UPDATE:
        //const state = prog.getStateUpdate()
        case Progress.ProgressCase.STATE_TRANSITION:
          const transition = prog.getStateTransition()
          const newState = transition?.getNewState()
          if (newState) {
            if (new RegExp('(Alice|Bob) Init*').test(newState.getState())) {
              return { ...res, secrets: 'doing' }
            }
            if (new RegExp('Alice Core Arbitrating Setup').test(newState.getState())) {
              return { ...res, secrets: true, lockArb: 'doing' }
            }
            if (new RegExp('Alice Arbitrating Lock Final').test(newState.getState())) {
              return { ...res, lockArb: true, lockAcc: 'doing' }
            }
            if (new RegExp('Alice Buy Procedure Signature').test(newState.getState())) {
              return { ...res, lockAcc: true, buy: 'doing' }
            }
            if (new RegExp('Bob Fee Estimated').test(newState.getState())) {
              return { ...res, secrets: true, fundArb: 'doing' }
            }
            if (new RegExp('Bob Funded').test(newState.getState())) {
              return { ...res, fundArb: true, lockArb: 'doing' }
            }
            if (new RegExp('Bob Accordant Lock Final').test(newState.getState())) {
              return { ...res, lockAcc: true, buy: 'doing' }
            }
            if (new RegExp('Bob Accordant Lock').test(newState.getState())) {
              return { ...res, lockArb: true, lockAcc: 'doing' }
            }
          }
      }
      return res
    },
    {
      connect: 'doing',
      secrets: 'todo',
      lockArb: 'todo',
      lockAcc: 'todo',
      buy: 'todo',
    }
  )
}

export function ProgressDisplay({
  progress,
  tradeRole,
  swapRole,
}: {
  progress: Progress[]
  tradeRole?: TradeRole
  swapRole?: SwapRole
}) {
  const displayState = process(progress)
  return (
    <div className="px-12 pt-12 pb-4 bg-gray-100 rounded-md mt-4 mb-12">
      <div className="flex items-center space-x-6 text-slate-800 font-semibold mb-4">
        <div className="w-24 text-center">
          {tradeRole === TradeRole.TAKER && <>Connecting to maker</>}
          {tradeRole === TradeRole.MAKER && <>Accepting swap</>}
        </div>
        <div className="grow"></div>
        <div className="w-24 text-center">Exchanging secrets</div>
        {swapRole === SwapRole.BOB && (
          <>
            <div className="grow"></div>
            <div className="w-24 text-center">Funding Bitcoin </div>
          </>
        )}
        <div className="grow"></div>
        <div className="w-24 text-center">Locking Bitcoin</div>
        <div className="grow"></div>
        <div className="w-24 text-center">Locking Monero</div>
        <div className="grow"></div>
        <div className="w-24 text-center">Swapping</div>
      </div>
      <div className="flex items-center">
        <div className="flex justify-center w-24">
          <StatusBadge status={displayState.connect} />
        </div>
        <div className="grow h-1 bg-gray-200 rounded"></div>
        <div className="flex justify-center w-24">
          <StatusBadge status={displayState.secrets} />
        </div>
        {swapRole === SwapRole.BOB && (
          <>
            <div className="grow h-1 bg-gray-200 rounded"></div>
            <div className="flex justify-center w-24">
              <StatusBadge status={displayState.fundArb} />
            </div>
          </>
        )}
        <div className="grow h-1 bg-gray-200 rounded"></div>
        <div className="flex justify-center w-24">
          <StatusBadge status={displayState.lockArb} />
        </div>
        <div className="grow h-1 bg-gray-200 rounded"></div>
        <div className="flex justify-center w-24">
          <StatusBadge status={displayState.lockAcc} />
        </div>
        <div className="grow h-1 bg-gray-200 rounded"></div>
        <div className="flex justify-center w-24">
          <StatusBadge status={displayState.buy} />
        </div>
      </div>
      <div className="font-mono mt-12 text-right">
        <SwapLogs progress={progress} />
      </div>
    </div>
  )
}
