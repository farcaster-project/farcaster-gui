'use client'

import { useState } from 'react'
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
  cancel?: Status
  refund?: Status
  arbHeight?: number
  accHeight?: number
  arbLocked?: boolean
  arbConfs?: number
  accLocked?: boolean
  accConfs?: number
  canceled?: boolean
  cancelIn?: number
  sweepIn?: number
  punishIn?: number
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
          const state = prog.getStateUpdate()
          if (state) {
            let newRes: ProgressState = {
              ...res,
              arbHeight: state.getArbBlockHeight(),
              accHeight: state.getAccBlockHeight(),
              arbLocked: state.getArbLocked(),
              arbConfs: state.getArbConfs(),
              accLocked: state.getAccLocked(),
              accConfs: state.getAccConfs(),
              canceled: state.getCanceled(),
              cancelIn: state.getCancelBlocks(),
              punishIn: state.getPunishBlocks(),
            }
            if (state.getArbLocked()) {
              newRes = { ...newRes, lockArb: true }
            }
            return newRes
          }
        case Progress.ProgressCase.STATE_TRANSITION:
          const transition = prog.getStateTransition()
          const newState = transition?.getNewState()
          let newRes: ProgressState = { ...res }
          if (newState) {
            const oldState = transition?.getOldState()
            if (oldState) {
              if (new RegExp('Start (Alice|Bob)*').test(oldState.getState())) {
                newRes = { ...newRes, connect: true }
              }
            }
            if (new RegExp('(Alice|Bob) Init*').test(newState.getState())) {
              newRes = { ...newRes, secrets: 'doing' }
            }
            if (new RegExp('Alice Core Arbitrating Setup').test(newState.getState())) {
              newRes = { ...newRes, secrets: true, lockArb: 'doing' }
            }
            if (new RegExp('Alice Arbitrating Lock Final').test(newState.getState())) {
              newRes = { ...newRes, lockArb: true, lockAcc: 'doing' }
            }
            if (new RegExp('Alice Buy Procedure Signature').test(newState.getState())) {
              newRes = { ...newRes, lockAcc: true, buy: 'doing' }
            }
            if (new RegExp('Alice Cancel').test(newState.getState())) {
              newRes = {
                ...newRes,
                lockAcc: false,
                cancel: newState.getCanceled() ? true : 'doing',
                punishIn: newState.getPunishBlocks(),
              }
            }
            if (new RegExp('Bob Fee Estimated').test(newState.getState())) {
              newRes = { ...newRes, secrets: true, fundArb: 'doing' }
            }
            if (new RegExp('Bob Funded').test(newState.getState())) {
              newRes = { ...newRes, fundArb: true, lockArb: 'doing' }
            }
            if (new RegExp('Bob Refund Procedure').test(newState.getState())) {
              if (newState.getArbLocked()) {
                newRes = { ...newRes, lockArb: true }
              }
            }
            if (new RegExp('Bob Accordant Lock Final').test(newState.getState())) {
              newRes = { ...newRes, lockAcc: true, buy: 'doing' }
            }
            if (new RegExp('Bob Accordant Lock$').test(newState.getState())) {
              newRes = { ...newRes, lockArb: true, lockAcc: 'doing' }
            }
            if (new RegExp('Bob Buy Seen').test(newState.getState())) {
              newRes = { ...newRes, sweepIn: newState.getBuyMoneroBlocks() }
            }
            if (new RegExp('Bob Cancel Final').test(newState.getState())) {
              newRes = {
                ...newRes,
                lockAcc: false,
                cancel: newState.getCanceled() ? true : 'doing',
                punishIn: newState.getPunishBlocks(),
              }
            }
            newRes = {
              ...newRes,
              arbHeight: newState.getArbBlockHeight(),
              accHeight: newState.getAccBlockHeight(),
              arbLocked: newState.getArbLocked(),
              arbConfs: newState.getArbConfs(),
              accLocked: newState.getAccLocked(),
              accConfs: newState.getAccConfs(),
              canceled: newState.getCanceled(),
              cancelIn: newState.getCancelBlocks(),
            }
          }
          return newRes
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

export function ChainInfoDisplay({ state }: { state: ProgressState }) {
  return (
    <div className="flex divide-x divide-gray-400">
      {state.arbHeight && state.arbHeight > 0 && (
        <div className="flex space-x-1 pr-2">
          <span>Bitcoin:</span>
          <span>{state.arbHeight.toLocaleString()}</span>
        </div>
      )}
      {state.accHeight && state.accHeight > 0 && (
        <div className="flex space-x-1 pl-2">
          <span>Monero:</span>
          <span>{state.accHeight.toLocaleString()}</span>
        </div>
      )}
    </div>
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
  const [showLogs, showLogsSet] = useState(false)
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
        <div className="w-24 text-center">{displayState.cancel ? <>Canceling</> : <>Swapping</>}</div>
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
          <StatusBadge status={displayState.cancel ? displayState.cancel : displayState.buy} />
        </div>
      </div>
      <div className="flex items-center text-xs text-slate-600 mt-3">
        <div className="w-24 text-center"></div>
        <div className="grow"></div>
        <div className="w-24 text-center"></div>
        {swapRole === SwapRole.BOB && (
          <>
            <div className="grow"></div>
            <div className="w-24 text-center"></div>
          </>
        )}
        <div className="grow"></div>
        <div className="w-24 text-center">
          {displayState.lockArb !== 'todo' && (
            <>
              {displayState.arbLocked ? 'Locked' : 'Locking'}, {displayState.arbConfs} confirmations
            </>
          )}
        </div>
        <div className="grow"></div>
        <div className="w-24 text-center">
          {displayState.lockAcc !== 'todo' && displayState.cancel === undefined && (
            <div className="-ml-6 w-36">
              <div>
                {displayState.accLocked ? 'Locked' : 'Locking'}, {displayState.accConfs} confirmations
              </div>
              {!displayState.accLocked && <div>Canceling in {displayState.cancelIn} blocks</div>}
            </div>
          )}
        </div>
        <div className="grow"></div>
        <div className="w-24 text-center">
          {displayState.sweepIn && <>Sweeping Monero in {displayState.sweepIn} blocks</>}
          {displayState.cancel && <>Punishing in {displayState.punishIn} blocks</>}
        </div>
      </div>
      <div className="font-mono mt-12">
        <div className="flex justify-between text-xs text-slate-800">
          <div>
            <ChainInfoDisplay state={displayState} />
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault()
                showLogsSet((v) => !v)
              }}
            >
              Display swap logs
            </button>
          </div>
        </div>
        <div>
          <SwapLogs progress={progress} show={showLogs} />
        </div>
      </div>
    </div>
  )
}
