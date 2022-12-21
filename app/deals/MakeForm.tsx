'use client'

import { TbSwitchHorizontal } from 'react-icons/tb'
import { BsInfoSquare } from 'react-icons/bs'
import { useCallback, useEffect, useState } from 'react'
import { FeePanel, TimelockPanel, TradePanel } from '../../components/ui/Panel'
import { btcStrToSats, btcToSats, chainToString, otherSwapRole, xmrStrToPico } from '../../components/utils'
import { Blockchain, MakeRequest, Network, SwapRole, TradeRole } from '../../proto/farcaster_pb'
import { useProfile, useRpc } from '../hooks'
import { Button, Submit } from '../../components/inputs/Button'
import { Input } from '../../components/inputs/Input'
import { Subtitle } from '../../components/ui/Title'
import { Block } from '../../components/ui/Label'

interface Params {
  network: Network
  accordantBlockchain: Blockchain
  arbitratingBlockchain: Blockchain
  accordantAmount: string
  arbitratingAmount: string
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
  accordantAmount: '0',
  arbitratingAmount: '0',
  arbitratingAddr: '',
  accordantAddr: '',
  cancelTimelock: 10,
  punishTimelock: 12,
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
    .setAccordantAmount(xmrStrToPico(p.accordantAmount))
    .setArbitratingAmount(btcStrToSats(p.arbitratingAmount))
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

  const isValid = useCallback(() => {
    return xmrStrToPico(req.accordantAmount) !== 0 && btcStrToSats(req.arbitratingAmount) !== 0
  }, [req.accordantAmount, req.arbitratingAmount])

  const isStringAmountValid = useCallback((value: string): boolean => {
    if (value === '0' || value === '0.' || value === '') {
      return true
    }
    return /^[0-9]*\.?[0-9]*$/.test(value)
  }, [])

  return (
    <div className="p-8">
      <div className="text-2xl mb-16">
        <TradePanel
          arbitratingAmount={btcStrToSats(req.arbitratingAmount)}
          accordantAmount={xmrStrToPico(req.accordantAmount)}
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
        <div className="mb-8">
          <Input
            value={req.arbitratingAmount}
            label={`${chainToString(req.arbitratingBlockchain)} amount`}
            type="input"
            required
            onChange={(e) =>
              reqSet((v) => (isStringAmountValid(e.target.value) ? { ...v, arbitratingAmount: e.target.value } : v))
            }
          />
          <Input
            value={req.accordantAmount}
            label={`${chainToString(req.accordantBlockchain)} amount`}
            type="number"
            required
            onChange={(e) =>
              reqSet((v) => (isStringAmountValid(e.target.value) ? { ...v, accordantAmount: e.target.value } : v))
            }
          />
        </div>
        <div className="mb-16">
          <Subtitle>Trade configuration</Subtitle>
          <Input
            value={req.cancelTimelock}
            label={
              <>
                Cancel timelock <span className="text-sm">(in block)</span>
              </>
            }
            type="number"
            required
            onChange={(e) => reqSet((v) => ({ ...v, cancelTimelock: parseInt(e.target.value) }))}
          />
          <Input
            value={req.punishTimelock}
            label={
              <>
                Punish timelock <span className="text-sm">(in block)</span>
              </>
            }
            type="number"
            required
            onChange={(e) => reqSet((v) => ({ ...v, punishTimelock: parseInt(e.target.value) }))}
          />
          <div className="pl-96">
            <TimelockPanel
              cancelTimelock={req.cancelTimelock}
              punishTimelock={req.punishTimelock}
              localTradeRole={TradeRole.MAKER}
              makerRole={req.makerRole}
            />
          </div>

          <Input
            value={req.feeStrategy}
            label={`${chainToString(req.arbitratingBlockchain)} transaction fee`}
            type="input"
            required
            onChange={(e) => reqSet((v) => ({ ...v, feeStrategy: e.target.value }))}
          />
          <div className="pl-96">
            <FeePanel arbitratingBlockchain={req.arbitratingBlockchain} feeStrategy={req.feeStrategy} />
          </div>
        </div>

        <div className="mb-16">
          <Subtitle>Peer connection configuration</Subtitle>
          <Input
            value={req.publicIpAddr}
            label="Public IP address"
            type="input"
            required
            onChange={(e) => reqSet((v) => ({ ...v, publicIpAddr: e.target.value }))}
          />
          <div className="pl-96">
            <div className="flex space-x-2 items-center text-slate-700 mb-1 text-sm">
              <div>
                <BsInfoSquare />
              </div>
              <div>This address must be reachable by the taker from the internet!</div>
            </div>
          </div>
          <Input
            value={req.publicPort}
            label="Public port"
            type="input"
            required
            onChange={(e) => reqSet((v) => ({ ...v, publicPort: parseInt(e.target.value) }))}
          />
          <div className="pl-96">
            <div className="text-slate-700 mb-1 text-sm">Taker will connect to your peer at:</div>
            <Block intent="secondary">{`${req.publicIpAddr}:${req.publicPort}`}</Block>
          </div>
        </div>

        <div className="mb-16">
          <Subtitle>Your addresses</Subtitle>
          <Input
            value={req.arbitratingAddr}
            label="Your Bitcoin address for this deal"
            type="input"
            required
            onChange={(e) => reqSet((v) => ({ ...v, arbitratingAddr: e.target.value }))}
          />
          <Input
            value={req.accordantAddr}
            label="Your Monero address for this deal"
            type="input"
            required
            onChange={(e) => reqSet((v) => ({ ...v, accordantAddr: e.target.value }))}
          />
        </div>

        <div className="flex space-x-4 justify-end">
          <Submit value="Make the deal" disabled={!isValid()} />
        </div>
      </form>
    </div>
  )
}
