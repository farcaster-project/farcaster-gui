import { Blockchain, Network, SwapRole, TradeRole } from "../proto/farcaster_pb"

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
