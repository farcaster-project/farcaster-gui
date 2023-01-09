'use client'

import { TbSwitchHorizontal } from 'react-icons/tb'
import { BsInfoSquare } from 'react-icons/bs'
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'
import { FeePanel, PricePanel, TimelockPanel, TradePanel } from '../../components/ui/Panel'
import { btcStrToSats, chainToString, getPlaceholder, otherSwapRole, xmrStrToPico } from '../../components/utils'
import { Blockchain, MakeRequest, Network, SwapRole, TradeRole } from '../../proto/farcaster_pb'
import { useProfile, useRpc } from '../hooks'
import { Button, Submit } from '../../components/inputs/Button'
import { Input, Required } from '../../components/inputs/Input'
import { Subtitle } from '../../components/ui/Title'
import { Block, Label } from '../../components/ui/Label'
import { toast } from 'react-toastify'

interface Params {
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

export const makeDefault: Params = {
  accordantBlockchain: Blockchain.MONERO,
  arbitratingBlockchain: Blockchain.BITCOIN,
  accordantAmount: '0',
  arbitratingAmount: '0',
  arbitratingAddr: '',
  accordantAddr: '',
  cancelTimelock: 10,
  punishTimelock: 12,
  feeStrategy: '1000 sat/kvB',
  makerRole: SwapRole.BOB,
  publicIpAddr: '127.0.0.1',
  publicPort: 7067,
}

const createMakeRequest = (p: Params & { network: Network }): MakeRequest => {
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

export function MakeForm({ make, makeSet }: { make: Params; makeSet: Dispatch<SetStateAction<Params>> }) {
  const [profile] = useProfile()
  const [fcd, res] = useRpc()

  const switchRole = () => {
    makeSet((v) => ({ ...v, makerRole: otherSwapRole(make.makerRole) }))
  }

  useEffect(() => {
    makeSet((v) => ({ ...v, arbitratingAddr: profile.btcAddr }))
    makeSet((v) => ({ ...v, accordantAddr: profile.xmrAddr }))
  }, [makeSet, profile.btcAddr, profile.xmrAddr])

  const isValid = useCallback(() => {
    return xmrStrToPico(make.accordantAmount) !== 0 && btcStrToSats(make.arbitratingAmount) !== 0
  }, [make.accordantAmount, make.arbitratingAmount])

  const isStringAmountValid = useCallback((value: string): boolean => {
    if (value === '0' || value === '0.' || value === '') {
      return true
    }
    return /^[0-9]*\.?[0-9]*$/.test(value)
  }, [])

  return (
    <div className="p-8">
      <div className="mb-16 text-center">
        <div className="text-3xl mb-3">
          <TradePanel
            arbitratingAmount={btcStrToSats(make.arbitratingAmount)}
            accordantAmount={xmrStrToPico(make.accordantAmount)}
            arbitratingBlockchain={make.arbitratingBlockchain}
            accordantBlockchain={make.accordantBlockchain}
            makerRole={make.makerRole}
            network={profile.network}
            displayForRole={TradeRole.MAKER}
            labelFor={
              <>
                <Button onClick={() => switchRole()}>
                  <TbSwitchHorizontal />
                </Button>{' '}
                for
              </>
            }
          />
        </div>
        <div className="flex space-x-2 text-slate-700 justify-center">
          <div>At a price of</div>
          <div>
            <Label>
              <PricePanel
                arbitratingAmount={btcStrToSats(make.arbitratingAmount)}
                accordantAmount={xmrStrToPico(make.accordantAmount)}
                arbitratingBlockchain={make.arbitratingBlockchain}
                accordantBlockchain={make.accordantBlockchain}
                makerRole={make.makerRole}
              />
            </Label>
          </div>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const makeReq = createMakeRequest({ ...make, network: profile.network })
          fcd.make(
            makeReq,
            null,
            res(
              () => toast.success('Your deal has been registered, share it with takers!'),
              (rpcErr) =>
                toast.error(rpcErr.message, {
                  autoClose: false,
                })
            )
          )
        }}
        className="flex flex-col"
      >
        <div className="mb-8">
          <Input
            value={make.arbitratingAmount}
            label={
              <>
                {`${chainToString(make.arbitratingBlockchain)} amount`} <Required />
              </>
            }
            type="input"
            required
            onChange={(e) =>
              makeSet((v) => (isStringAmountValid(e.target.value) ? { ...v, arbitratingAmount: e.target.value } : v))
            }
          />
          <Input
            value={make.accordantAmount}
            label={
              <>
                {`${chainToString(make.accordantBlockchain)} amount`} <Required />
              </>
            }
            type="input"
            required
            onChange={(e) =>
              makeSet((v) => (isStringAmountValid(e.target.value) ? { ...v, accordantAmount: e.target.value } : v))
            }
          />
        </div>
        <div className="mb-16">
          <Subtitle>Trade configuration</Subtitle>
          <Input
            value={make.cancelTimelock}
            label={
              <>
                Cancel timelock <span className="text-sm">(in block)</span> <Required />
              </>
            }
            type="number"
            required
            onChange={(e) => makeSet((v) => ({ ...v, cancelTimelock: parseInt(e.target.value) }))}
          />
          <Input
            value={make.punishTimelock}
            label={
              <>
                Punish timelock <span className="text-sm">(in block)</span> <Required />
              </>
            }
            type="number"
            required
            onChange={(e) => makeSet((v) => ({ ...v, punishTimelock: parseInt(e.target.value) }))}
          />
          <div className="pl-96">
            <TimelockPanel
              cancelTimelock={make.cancelTimelock}
              punishTimelock={make.punishTimelock}
              localTradeRole={TradeRole.MAKER}
              makerRole={make.makerRole}
            />
          </div>

          <Input
            value={make.feeStrategy}
            label={
              <>
                {`${chainToString(make.arbitratingBlockchain)} transaction fee`} <Required />
              </>
            }
            type="input"
            required
            onChange={(e) => makeSet((v) => ({ ...v, feeStrategy: e.target.value }))}
          />
          <div className="pl-96">
            <FeePanel arbitratingBlockchain={make.arbitratingBlockchain} feeStrategy={make.feeStrategy} />
          </div>
        </div>

        <div className="mb-16">
          <Subtitle>Peer connection configuration</Subtitle>
          <Input
            value={make.publicIpAddr}
            label={
              <>
                Public IP address <Required />
              </>
            }
            type="input"
            required
            onChange={(e) => makeSet((v) => ({ ...v, publicIpAddr: e.target.value }))}
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
            value={make.publicPort}
            label={
              <>
                Public port <Required />
              </>
            }
            type="input"
            required
            onChange={(e) => makeSet((v) => ({ ...v, publicPort: parseInt(e.target.value) }))}
          />
          <div className="pl-96">
            <div className="text-slate-700 mb-1 text-sm">Taker will connect to your peer at:</div>
            <Block intent="secondary">{`${make.publicIpAddr}:${make.publicPort}`}</Block>
          </div>
        </div>

        <div className="mb-16">
          <Subtitle>Your addresses</Subtitle>
          <Input
            value={make.arbitratingAddr}
            label={
              <>
                Your Bitcoin address for this deal <Required />
              </>
            }
            type="input"
            placeholder={getPlaceholder(profile.network, Blockchain.BITCOIN)}
            onChange={(e) => makeSet((v) => ({ ...v, arbitratingAddr: e.target.value }))}
            required
          />
          <Input
            value={make.accordantAddr}
            label={
              <>
                Your Monero address for this deal <Required />
              </>
            }
            type="input"
            placeholder={getPlaceholder(profile.network, Blockchain.MONERO)}
            onChange={(e) => makeSet((v) => ({ ...v, accordantAddr: e.target.value }))}
            required
          />
        </div>

        <div className="flex space-x-4 justify-end">
          <Submit value="Make the deal" disabled={!isValid()} />
        </div>
      </form>
    </div>
  )
}
