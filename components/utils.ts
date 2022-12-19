import { Blockchain, DealStatus, Network, NetworkSelector, SwapRole, TradeRole } from "../proto/farcaster_pb"

export type Status = 'Open' | 'Progress' | 'Swapped' | 'Refunded' | 'Punished' | 'Aborted'

// Utility function to convert a Deal status enum into a Status (string)
export function dealStatusToStatus(s: DealStatus): Status {
  switch (s) {
    case DealStatus.DEAL_OPEN:
      return 'Open'
    case DealStatus.DEAL_IN_PROGRESS:
      return 'Progress'
    case DealStatus.DEAL_ENDED_SUCCESS_SWAP:
      return 'Swapped'
    case DealStatus.DEAL_ENDED_FAILURE_REFUND:
      return 'Refunded'
    case DealStatus.DEAL_ENDED_FAILURE_PUNISH:
      return 'Punished'
    case DealStatus.DEAL_ENDED_FAILURE_ABORT:
      return 'Aborted'
  }
}

// Utility function to convert a Blockchain enum into a string (generated enums
// are typed as ints, so this function is necessary)
export function chainToString(b: Blockchain): string {
  switch (b) {
    case Blockchain.BITCOIN:
      return 'Bitcoin'
    case Blockchain.MONERO:
      return 'Monero'
  }
}

// Utility function to convert a Swap role enum into a string (generated enums
// are typed as ints, so this function is necessary)
export function swapRoleToString(s: SwapRole): string {
  switch (s) {
    case SwapRole.ALICE:
      return 'Alice'
    case SwapRole.BOB:
      return 'Bob'
  }
}

// Utility function to convert a Trade role enum into a string
export function tradeRoleToString(s: TradeRole): string {
  switch (s) {
    case TradeRole.MAKER:
      return 'Maker'
    case TradeRole.TAKER:
      return 'Taker'
  }
}

// Utility function to convert a Network enum into a string (generated enums are
// typed as ints, so this function is necessary)
export function netToString(n: Network): string {
  switch (n) {
    case Network.MAINNET:
      return 'Mainnet'
    case Network.TESTNET:
      return 'Testnet'
    case Network.LOCAL:
      return 'Regtest'
  }
}

// Utility function to convert a string into a Network enum
export function stringToNet(n: 'Mainnet'|'Testnet'|'Regtest'): Network {
  switch (n) {
    case 'Mainnet':
      return Network.MAINNET
    case 'Testnet':
      return Network.TESTNET
    case 'Regtest':
      return Network.LOCAL
  }
}

// Return the other swap role
export function otherSwapRole(role: SwapRole): SwapRole {
  switch (role) {
    case SwapRole.ALICE:
      return SwapRole.BOB
    case SwapRole.BOB:
      return SwapRole.ALICE
  }
}

// Return if the trade role matches the Maker trade role
export function isMaker(role: TradeRole): boolean {
  switch (role) {
    case TradeRole.MAKER:
      return true
    case TradeRole.TAKER:
      return false
  }
}

// Convert a network into a network selector. The network selector 'ALL' is not covered here.
export function netToSelector(net: Network): NetworkSelector {
  switch (net) {
    case Network.MAINNET:
      return NetworkSelector.MAINNET_NETWORKS
    case Network.TESTNET:
      return NetworkSelector.TESTNET_NETWORKS
    case Network.LOCAL:
      return NetworkSelector.LOCAL_NETWORKS
  }
}
