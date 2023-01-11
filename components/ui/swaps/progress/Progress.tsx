'use client'

import { useState } from 'react'
import { Progress, State, SwapRole, TradeRole } from '../../../../proto/farcaster_pb'
import { Status, StatusBadge } from './Status'
import { SwapLogs } from './SwapLogs'

// This is the progress aggregated state used to display the swap progress to
// the user. This state is created from a list of Progress messages retrieved
// from the node throught the gRPC interface.
export interface ProgressState {
  // status displayed in timeline to indicate user where we at
  connect: Status // first step, connect with counter-party
  secrets: Status // initialization phase with counter-pary, commit/reveal protocol
  fundArb: Status // if Bob arbitrating funds needs to be send before locking them
  lockArb: Status // locking arbitrating funds
  lockAcc: Status // locking accordant funds
  buy: Status // buying/swapping phase
  cancel?: Status // only shown if swap started the failure path
  refund?: Status // refund, when both party get their funds back
  punish?: Status // punish, when Bob lost his funds because no refund where made
  // chains infos
  arbHeight?: number
  accHeight?: number
  // node's decisions based on swap parameters
  arbLocked?: boolean
  accLocked?: boolean
  canceled?: boolean
  aliceCanBuy?: boolean
  buySeen?: boolean
  refundSeen?: boolean
  overfunded?: boolean
  // numbers to display, e.g. block numbers
  arbConfs?: number
  accConfs?: number
  cancelIn?: number
  buyIn?: number
  sweepIn?: number
  punishIn?: number
}

// Takes a progress state and a node state, return an updated progress state for
// timeline statuses
//
// This function must detect when statuses must be changed into:
//   todo, doing, true (done success), or false (done failure)
function applyStatusChanges(p: ProgressState, s: State, oldState?: State): ProgressState {
  let res = { ...p }
  if (oldState) {
    // when restoring a swap mark connect status as successful
    if (new RegExp('Start (Alice|Bob)*').test(oldState.getState())) {
      res = { ...res, connect: true }
    }
  }

  // start secrets step
  if (new RegExp('(Alice|Bob) Init*').test(s.getState())) {
    res = { ...res, secrets: 'doing' }
  }

  // stop secrets step, start fundArb step for Bob; start lockArb step for Alice
  if (new RegExp('Bob Fee Estimated').test(s.getState())) {
    res = { ...res, secrets: true, fundArb: 'doing' }
  }
  // IF BOB: stop fundArb step and start lockArb step
  if (new RegExp('Bob Funded').test(s.getState())) {
    res = { ...res, fundArb: true, lockArb: 'doing' }
  }
  if (new RegExp('Alice Core Arbitrating Setup').test(s.getState())) {
    res = { ...res, secrets: true, lockArb: 'doing' }
  }

  // IF ALICE: can only buy after she received
  if (new RegExp('Alice Buy Procedure Signature').test(s.getState())) {
    res = { ...res, aliceCanBuy: true }
  }

  // transition from lockArb into lockAcc: requires node's decision
  // arbLocked=true
  if (s.getArbLocked()) {
    res = { ...res, lockArb: true, lockAcc: 'doing' }
  }

  // transition from lockAcc into buy: requires node's decision accLocked=true
  if (s.getAccLocked()) {
    res = { ...res, lockAcc: true, buy: 'doing' }
  }

  // enter buy step and finalized acc lock status on node's decision
  // buySeen=true
  if (s.getBuySeen()) {
    res = { ...res, lockAcc: s.getAccLocked(), buy: 'doing' }
  }

  // enter refund step and finalized acc lock status on node's decision
  // canceled=true
  if (new RegExp('Alice Cancel').test(s.getState())) {
    res = { ...res, lockAcc: s.getAccLocked(), cancel: 'doing' }
  }
  if (s.getCanceled()) {
    res = { ...res, lockAcc: s.getAccLocked(), cancel: true, refund: 'doing' }
  }

  return res
}

// Takes a progress state and a node state, return an updated progress state for
// all chain info
function applyChainInfo(p: ProgressState, s: State): ProgressState {
  return { ...p, arbHeight: s.getArbBlockHeight(), accHeight: s.getAccBlockHeight() }
}

// Takes a progress state and a node state, return an updated progress state for
// node's decisions
function applyDecisions(p: ProgressState, s: State): ProgressState {
  return {
    ...p,
    arbLocked: s.getArbLocked(),
    accLocked: s.getAccLocked(),
    canceled: s.getCanceled(),
    buySeen: s.getBuySeen(),
    refundSeen: s.getRefundSeen(),
    overfunded: s.getOverfunded(),
  }
}

// Takes a progress state and a node state, return an updated progress state for
// numbers such as confirmation counters or futur event timers
function applyNumbers(p: ProgressState, s: State): ProgressState {
  return {
    ...p,
    arbConfs: s.getArbConfs(),
    accConfs: s.getAccConfs(),
    cancelIn: s.getCancelBlocks(),
    buyIn: s.getBuyBlocks(),
    sweepIn: s.getBuyMoneroBlocks(),
    punishIn: s.getPunishBlocks(),
  }
}

// Aggregate the Progress message list returned by the node to create the
// ProgressState used by the display widget
function aggregate(progress: Progress[]): ProgressState {
  return progress.reduce<ProgressState>(
    (agg, prog) => {
      switch (prog.getProgressCase()) {
        case Progress.ProgressCase.MESSAGE:
          // Non-restore swap start for takers & makers
          if (new RegExp('Proposing to take swap*').test(prog.getMessage())) {
            return { ...agg, connect: true }
          }
          if (new RegExp('Accepting swap*').test(prog.getMessage())) {
            return { ...agg, connect: true }
          }
        case Progress.ProgressCase.FAILURE:
          // failures are handled in state updates
          return agg
        case Progress.ProgressCase.SUCCESS:
          // success are handled in state updates
          return agg
        case Progress.ProgressCase.STATE_UPDATE:
          // apply state update on aggregated progress state
          const state = prog.getStateUpdate()!
          let stateRes = applyChainInfo(agg, state)
          stateRes = applyDecisions(stateRes, state)
          stateRes = applyNumbers(stateRes, state)
          stateRes = applyStatusChanges(stateRes, state)
          return stateRes
        case Progress.ProgressCase.STATE_TRANSITION:
          // apply state transition from old state to new state on aggregated progress state
          const transition = prog.getStateTransition()!
          const oldState = transition.getNewState()!
          const newState = transition.getNewState()!
          let transitionRes = applyChainInfo(agg, newState)
          transitionRes = applyDecisions(transitionRes, newState)
          transitionRes = applyNumbers(transitionRes, newState)
          transitionRes = applyStatusChanges(transitionRes, newState, oldState)
          return transitionRes
      }
      return agg
    },
    // starting state, this compose the base timeline of a swap
    {
      connect: 'doing',
      secrets: 'todo',
      fundArb: 'todo', // only display when we are Bob
      lockArb: 'todo',
      lockAcc: 'todo',
      buy: 'todo',
    }
  )
}

// Pluralize number of confirmation string
function confs(conf?: number): string {
  if (conf === undefined) return ''
  return conf > 1 ? `${conf} confirmations` : `${conf} confirmation`
}

// Pluralize number of block string
function blocks(block?: number): string {
  if (block === undefined) return ''
  if (block <= 0) {
    return 'now'
  } else if (block > 1) {
    return `in ${block} blocks`
  } else {
    return `in ${block} block`
  }
}

// Display basic information about the chain state returned by the aggregated
// Progress message list
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

// The display widget displaying all progress data to user. The user has access
// to the summarized timeline with contextual information and the complete log
// stack for detailed information.
export function ProgressDisplay({
  progress,
  tradeRole,
  swapRole,
}: {
  progress: Progress[]
  tradeRole: TradeRole
  swapRole: SwapRole
}) {
  const [showLogs, showLogsSet] = useState(false)
  const displayState = aggregate(progress)

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
        {displayState.refund && (
          <>
            <div className="grow"></div>
            <div className="w-24 text-center">Refunding</div>
          </>
        )}
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
        {displayState.refund && (
          <>
            <div className="grow h-1 bg-gray-200 rounded"></div>
            <div className="flex justify-center w-24">
              <StatusBadge status={displayState.refund} />
            </div>
          </>
        )}
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
              {displayState.arbLocked ? 'Locked' : 'Locking'}, {confs(displayState.arbConfs)}
            </>
          )}
        </div>
        <div className="grow"></div>
        <div className="w-24 text-center">
          {displayState.lockAcc !== 'todo' && displayState.cancel === undefined && (
            <div className="-ml-6 w-36">
              <div>
                {displayState.accLocked ? 'Locked' : 'Locking'}, {confs(displayState.accConfs)}
              </div>
              {!displayState.accLocked && <div>Cancel will happen {blocks(displayState.cancelIn)}</div>}
            </div>
          )}
        </div>
        <div className="grow"></div>
        <div className="w-24 text-center">
          {swapRole === SwapRole.BOB && displayState.accLocked && <>Sweeping Monero {blocks(displayState.sweepIn)}</>}
          {swapRole === SwapRole.ALICE && displayState.arbLocked && displayState.aliceCanBuy && (
            <>Buying Bitcoin {blocks(displayState.buyIn)}</>
          )}
          {displayState.canceled && <>Punishing {blocks(displayState.punishIn)}</>}
        </div>
        {displayState.refund && (
          <>
            <div className="grow"></div>
            <div className="w-24 text-center"></div>
          </>
        )}
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
