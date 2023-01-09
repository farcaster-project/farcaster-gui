import { Disclosure } from '@headlessui/react'
import { Progress, State, StateTransition } from '../../../../proto/farcaster_pb'

function ProgressMessage({ message }: { message: string }) {
  return <p>{message}</p>
}

function ProgressState({ state }: { state: State }) {
  return (
    <Disclosure>
      <Disclosure.Button className="py-2">
        <div className="text-sm font-medium text-slate-800">{state.getState()}</div>
      </Disclosure.Button>
      <Disclosure.Panel className="text-slate-600">
        <p>Bitcoin height: {state.getArbBlockHeight()}</p>
        <p>Monero height: {state.getAccBlockHeight()}</p>
        <p>Bitcoin locked: {state.getArbLocked() ? 'yes' : 'no'}</p>
        <p>Monero locked: {state.getAccLocked() ? 'yes' : 'no'}</p>
        <p>Canceled: {state.getCanceled() ? 'yes' : 'no'}</p>
        <p>Buy seen: {state.getBuySeen() ? 'yes' : 'no'}</p>
        <p>Refund seen: {state.getRefundSeen() ? 'yes' : 'no'}</p>
        <p>Overfunded: {state.getOverfunded() ? 'yes' : 'no'}</p>
        <div className="py-2"></div>
        <p>Bitcoin lock confirmations: {state.getArbConfs()}</p>
        <p>Monero lock confirmations: {state.getAccConfs()}</p>
        <p>Cancel confirmations: {state.getCancelConfs()}</p>
        <p>Blocks until cancel possible: {state.getCancelBlocks()}</p>
        <p>Blocks until punish possible: {state.getPunishBlocks()}</p>
        <p>Blocks until safe buy: {state.getBuyBlocks()}</p>
        <p>Blocks until safe monero buy sweep: {state.getBuyMoneroBlocks()}</p>
      </Disclosure.Panel>
    </Disclosure>
  )
}

function ProgressSateTransition({ transition }: { transition: StateTransition }) {
  return (
    <>
      <p>
        Transition from {transition.getOldState()?.getState()} to {transition.getNewState()?.getState()}
      </p>
      <div>
        <ProgressState state={transition.getNewState()!} />
      </div>
    </>
  )
}

export function SwapLogs({ progress }: { progress: Progress[] }) {
  return (
    <Disclosure>
      <Disclosure.Button>
        <div className="text-xs text-slate-800">Display swap logs</div>
      </Disclosure.Button>
      <Disclosure.Panel className="p-4 mt-2 mb-8 bg-gray-200 rounded-md text-xs text-left">
        {progress.map((progress, idx) => {
          let content = <></>
          switch (progress.getProgressCase()) {
            case Progress.ProgressCase.MESSAGE:
              content = <ProgressMessage message={progress.getMessage()} />
              break
            case Progress.ProgressCase.FAILURE:
              content = <ProgressMessage message={progress.getFailure()} />
              break
            case Progress.ProgressCase.SUCCESS:
              content = <ProgressMessage message={progress.getSuccess()} />
              break
            case Progress.ProgressCase.STATE_UPDATE:
              content = <ProgressState state={progress.getStateUpdate()!} />
              break
            case Progress.ProgressCase.STATE_TRANSITION:
              content = <ProgressSateTransition transition={progress.getStateTransition()!} />
          }
          return <div key={idx}>{content}</div>
        })}
      </Disclosure.Panel>
    </Disclosure>
  )
}
