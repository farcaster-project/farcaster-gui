'use client'

import { TbSwitchHorizontal } from 'react-icons/tb'
import { useEffect, useState } from 'react'
import { TradePanel } from '../../components/ui/Panel'
import { otherSwapRole } from '../../components/utils'
import { Blockchain, MakeRequest, Network, SwapRole, TradeRole } from '../../proto/farcaster_pb'
import { useProfile, useRpc } from '../hooks'
import { Button, Submit } from '../../components/inputs/Button'
import { Input } from '../../components/inputs/Input'

interface Params {
  network: Network
  accordantBlockchain: Blockchain
  arbitratingBlockchain: Blockchain
  accordantAmount: number
  arbitratingAmount: number
  arbitratingAddr: string
  accordantAddr: string
  cancelTimelock: number
  punishTimelock: number
  feeStrategy: string
  makerRole: SwapRole
  publicIpAddr: string
  publicPort: number
}

const reqDefault = {
  accordantBlockchain: Blockchain.MONERO,
  arbitratingBlockchain: Blockchain.BITCOIN,
  accordantAmount: 42449960000,
  arbitratingAmount: 1000,
  arbitratingAddr: '',
  accordantAddr: '',
  cancelTimelock: 4,
  punishTimelock: 6,
  feeStrategy: '1 sat/vByte',
  makerRole: SwapRole.BOB,
  publicIpAddr: '127.0.0.1',
  publicPort: 7067,
}

const createMakeRequest = (p: Params): MakeRequest => {
  return new MakeRequest()
    .setNetwork(p.network)
    .setAccordantBlockchain(p.accordantBlockchain)
    .setArbitratingBlockchain(p.arbitratingBlockchain)
    .setAccordantAmount(p.accordantAmount)
    .setArbitratingAmount(p.arbitratingAmount)
    .setArbitratingAddr(p.arbitratingAddr)
    .setAccordantAddr(p.accordantAddr)
    .setCancelTimelock(p.cancelTimelock)
    .setPunishTimelock(p.punishTimelock)
    .setFeeStrategy(p.feeStrategy)
    .setMakerRole(p.makerRole)
    .setPublicIpAddr(p.publicIpAddr)
    .setPublicPort(p.publicPort)
}

export function MakeForm() {
  const [req, reqSet] = useState(reqDefault)
  const [profile] = useProfile()
  const [fcd, res] = useRpc()

  const switchRole = () => {
    reqSet((v) => ({ ...v, makerRole: otherSwapRole(req.makerRole) }))
  }

  useEffect(() => {
    reqSet((v) => ({ ...v, arbitratingAddr: profile.btcAddr }))
    reqSet((v) => ({ ...v, accordantAddr: profile.xmrAddr }))
  }, [profile.btcAddr, profile.xmrAddr])

  return (
    <div className="p-8">
      <div className="text-3xl mb-16">
        <TradePanel
          arbitratingAmount={req.arbitratingAmount}
          accordantAmount={req.accordantAmount}
          arbitratingBlockchain={req.arbitratingBlockchain}
          accordantBlockchain={req.accordantBlockchain}
          makerRole={req.makerRole}
          network={profile.network}
          displayForRole={TradeRole.MAKER}
          labelFor={
            <Button onClick={() => switchRole()}>
              <TbSwitchHorizontal />
            </Button>
          }
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const makeReq = createMakeRequest({ ...req, network: profile.network })
          fcd.make(makeReq, null, res())
        }}
        className="flex flex-col"
      >
        {/*<div>
          <select
            name="arb-chain"
            id="arb-chain"
            onChange={(e) => reqSet((v) => ({ ...v, arbitratingBlockchain: parseInt(e.target.value) }))}
            value={req.arbitratingBlockchain}
          >
            <option value={Blockchain.BITCOIN}>bitcoin</option>
          </select>
          <select
            name="acc-chain"
            id="acc-chain"
            value={req.accordantBlockchain}
            onChange={(e) => reqSet((v) => ({ ...v, accordantBlockchain: parseInt(e.target.value) }))}
          >
            <option value={Blockchain.MONERO}>monero</option>
          </select>
      </div>*/}

        <Input
          value={req.arbitratingAmount}
          label="Arbitrating amount"
          type="number"
          required
          onChange={(e) => reqSet((v) => ({ ...v, arbitratingAmount: parseInt(e.target.value) }))}
        />
        <Input
          value={req.accordantAmount}
          label="Accordant amount"
          type="number"
          required
          onChange={(e) => reqSet((v) => ({ ...v, accordantAmount: parseInt(e.target.value) }))}
        />

        <Input
          value={req.arbitratingAddr}
          label="Arbitrating address"
          type="input"
          required
          onChange={(e) => reqSet((v) => ({ ...v, arbitratingAddr: e.target.value }))}
        />
        <Input
          value={req.accordantAddr}
          label="Accordant address"
          type="input"
          required
          onChange={(e) => reqSet((v) => ({ ...v, accordantAddr: e.target.value }))}
        />

        <Input
          value={req.cancelTimelock}
          label="Cancel timelock"
          type="number"
          required
          onChange={(e) => reqSet((v) => ({ ...v, cancelTimelock: parseInt(e.target.value) }))}
        />
        <Input
          value={req.punishTimelock}
          label="Punish timelock"
          type="number"
          required
          onChange={(e) => reqSet((v) => ({ ...v, punishTimelock: parseInt(e.target.value) }))}
        />

        <Input
          value={req.feeStrategy}
          label="Fee"
          type="input"
          required
          onChange={(e) => reqSet((v) => ({ ...v, feeStrategy: e.target.value }))}
        />

        <div>
          <Input
            value={req.publicIpAddr}
            label="Public IP address"
            type="input"
            required
            onChange={(e) => reqSet((v) => ({ ...v, publicIpAddr: e.target.value }))}
          />
          <Input
            value={req.publicPort}
            label="Public Port"
            type="input"
            required
            onChange={(e) => reqSet((v) => ({ ...v, publicPort: parseInt(e.target.value) }))}
          />
        </div>
        <div className="flex space-x-4 justify-end">
          <Submit value="Make" />
        </div>
      </form>
    </div>
  )
}
