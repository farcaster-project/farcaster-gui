import { Blockchain, SwapRole, TradeRole } from "../proto/farcaster_pb"

// Utility function to convert a Blockchain enum into a string (generated enums
// are typed as ints, so this function is necessary)
export function chainToString(b: Blockchain): String {
  switch (b) {
    case Blockchain.BITCOIN:
      return 'Bitcoin'
    case Blockchain.MONERO:
      return 'Monero'
  }
}

// Utility function to convert a Swap role enum into a string (generated enums
// are typed as ints, so this function is necessary)
export function swapRoleToString(b: SwapRole): String {
  switch (b) {
    case SwapRole.ALICE:
      return 'Alice'
    case SwapRole.BOB:
      return 'Bob'
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

