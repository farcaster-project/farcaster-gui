import { Disclosure } from '@headlessui/react'
import { Progress, State, StateTransition } from '../../../proto/farcaster_pb'

function ProgressMessage({ message }: { message: string }) {
  return <p>{message}</p>
}

function ProgressState({ state }: { state: State }) {
  return (
    <Disclosure>
      <Disclosure.Button className="py-2">
        <div className="text-lg font-medium text-slate-800">{state.getState()}</div>
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
        <p>Cancel blocks: {state.getCancelBlocks()}</p>
        <p>Punish blocks: {state.getPunishBlocks()}</p>
        <p>Buy blocks: {state.getBuyBlocks()}</p>
        <p>Buy monero blocks: {state.getBuyMoneroBlocks()}</p>
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

export function SwapProgress({ progress }: { progress: Progress[] }) {
  return (
    <>
      {progress.map((progress) => {
        switch (progress.getProgressCase()) {
          case Progress.ProgressCase.MESSAGE:
            return <ProgressMessage message={progress.getMessage()} />
          case Progress.ProgressCase.FAILURE:
            return <ProgressMessage message={progress.getFailure()} />
          case Progress.ProgressCase.SUCCESS:
            return <ProgressMessage message={progress.getSuccess()} />
          case Progress.ProgressCase.STATE_UPDATE:
            return <ProgressState state={progress.getStateUpdate()!} />
          case Progress.ProgressCase.STATE_TRANSITION:
            return <ProgressSateTransition transition={progress.getStateTransition()!} />
        }
      })}
    </>
  )
}
