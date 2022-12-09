'use client'

import { TbSwitchHorizontal } from 'react-icons/tb'
import { useState } from 'react'
import { TradePanel } from '../../components/panels'
import { Title } from '../../components/ui'
import { otherSwapRole } from '../../components/utils'
import { Blockchain, MakeRequest, Network, SwapRole, TradeRole } from '../../proto/farcaster_pb'
import { useRpc, useSettings } from '../hooks'
import { Button } from '../../components/input'

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
  bindIpAddr: string
  port: number
}

const reqDefault = {
  accordantBlockchain: Blockchain.MONERO,
  arbitratingBlockchain: Blockchain.BITCOIN,
  accordantAmount: 42449960000,
  arbitratingAmount: 1000,
  arbitratingAddr: 'tb1qh9rdah0fefhsuhj4v6h7znd85k4tyqz6vmrl56',
  accordantAddr: '59xUsmr8HiF4n92RxjJZbo2GiMiUbaevoMgYnw1jda97cRQ77FgAAYviHyFvcCLxh2DenAacFpVMbVLBt7LmC7Ah6bbv1kM',
  cancelTimelock: 4,
  punishTimelock: 6,
  feeStrategy: '1 sat/vByte',
  makerRole: SwapRole.BOB,
  publicIpAddr: '127.0.0.1',
  bindIpAddr: '0.0.0.0',
  port: 7067,
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
    .setBindIpAddr(p.bindIpAddr)
    .setPort(p.port)
}

export default function MakePage() {
  const [req, reqSet] = useState(reqDefault)
  const [settings, saveSettings] = useSettings()
  const [fcd, res] = useRpc()

  const switchRole = () => {
    reqSet((v) => ({ ...v, makerRole: otherSwapRole(req.makerRole) }))
  }

  return (
    <>
      <Title>Register an new offer</Title>
      <div className="my-4">
        <TradePanel
          arbitratingAmount={req.arbitratingAmount}
          accordantAmount={req.accordantAmount}
          arbitratingBlockchain={req.arbitratingBlockchain}
          accordantBlockchain={req.accordantBlockchain}
          makerRole={req.makerRole}
          network={settings.network}
          displayForRole={TradeRole.MAKER}
        />
        <Button onClick={() => switchRole()}>
          <TbSwitchHorizontal />
        </Button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const makeReq = createMakeRequest({ ...req, network: settings.network })
          fcd.make(makeReq, null, res())
        }}
        className="flex flex-col"
      >
        <div>
          <select
            name="network"
            id="make-network"
            value={settings.network}
            onChange={(e) => saveSettings({ ...settings, network: parseInt(e.target.value) })}
          >
            <option value={Network.MAINNET} disabled>
              mainnet
            </option>
            <option value={Network.TESTNET}>testnet</option>
            <option value={Network.LOCAL}>local</option>
          </select>
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
          <select
            name="maker-role"
            id="maker-role"
            value={req.makerRole}
            onChange={(e) => reqSet((v) => ({ ...v, makerRole: parseInt(e.target.value) }))}
          >
            <option value={SwapRole.ALICE}>alice</option>
            <option value={SwapRole.BOB}>bob</option>
          </select>
        </div>
        <div>
          <label htmlFor="arb-amount">Arbitrating amount</label>
          <input
            type="number"
            id="arb-amount"
            value={req.arbitratingAmount}
            onChange={(e) => reqSet((v) => ({ ...v, arbitratingAmount: parseInt(e.target.value) }))}
          />
          <span>btc</span>
          <label htmlFor="acc-amount">Accordant amount</label>
          <input
            type="number"
            id="acc-amount"
            value={req.accordantAmount}
            onChange={(e) => reqSet((v) => ({ ...v, accordantAmount: parseInt(e.target.value) }))}
          />
          <span>xmr</span>
        </div>
        <div>
          <label htmlFor="arb-addr">Arbitrating address</label>
          <input
            type="text"
            id="arb-addr"
            value={req.arbitratingAddr}
            onChange={(e) => reqSet((v) => ({ ...v, arbitratingAddr: e.target.value }))}
          />
          <label htmlFor="acc-addr">Accordant address</label>
          <input
            type="text"
            id="acc-addr"
            value={req.accordantAddr}
            onChange={(e) => reqSet((v) => ({ ...v, accordantAddr: e.target.value }))}
          />
        </div>
        <div>
          <input
            type="number"
            id="cancel-timelock"
            value={req.cancelTimelock}
            onChange={(e) => reqSet((v) => ({ ...v, cancelTimelock: parseInt(e.target.value) }))}
          />
          <input
            type="number"
            id="punish-timelock"
            value={req.punishTimelock}
            onChange={(e) => reqSet((v) => ({ ...v, punishTimelock: parseInt(e.target.value) }))}
          />
        </div>
        <div>
          <input
            type="text"
            id="fee-strategy"
            value={req.feeStrategy}
            onChange={(e) => reqSet((v) => ({ ...v, feeStrategy: e.target.value }))}
          />
        </div>
        <div>
          <label htmlFor="public-ip">Public IP</label>
          <input
            type="text"
            id="public-ip"
            value={req.publicIpAddr}
            onChange={(e) => reqSet((v) => ({ ...v, publicIpAddr: e.target.value }))}
          />
          <label htmlFor="bind-ip">Bind IP</label>
          <input
            type="text"
            id="bind-ip"
            value={req.bindIpAddr}
            onChange={(e) => reqSet((v) => ({ ...v, bindIpAddr: e.target.value }))}
          />
          <label htmlFor="bind-port">Bind port</label>
          <input
            type="text"
            id="bind-port"
            value={req.port}
            onChange={(e) => reqSet((v) => ({ ...v, port: parseInt(e.target.value) }))}
          />
        </div>
        <div>
          <input type="submit" value={'make'} />
        </div>
      </form>
    </>
  )
}
