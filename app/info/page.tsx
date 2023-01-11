'use client'

import moment from 'moment'
import { ReactNode, useCallback, useState } from 'react'
import { BsInfoSquare } from 'react-icons/bs'
import { Block } from '../../components/ui/Label'
import { Loader } from '../../components/ui/SettingsLoader'
import { Title } from '../../components/ui/Title'
import { InfoRequest, InfoResponse } from '../../proto/farcaster_pb'
import { useRefresh, useRpc } from '../hooks'

function SectionTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-3xl font-bold text-slate-700 mt-14 mb-3">{children}</h3>
}

function SectionDesc({ children }: { children: ReactNode }) {
  return <p className="text-sm text-slate-900 mb-3 mb-6">{children}</p>
}

export default function InfoPage() {
  const [info, infoSet] = useState<InfoResponse | null>(null)
  const [fcd, res] = useRpc()

  useRefresh(
    useCallback(() => {
      const query = fcd.info(new InfoRequest(), null, res(infoSet))
      return () => query.cancel()
    }, [fcd, res]),
    1000
  )

  return (
    <div className="mb-16">
      <div className="my-8 mt-16">
        <Title>
          My Node
          {info && (
            <span className="text-sm pl-3">
              started {moment(new Date(info.getSince() * 1000)).fromNow()}, running since{' '}
              {moment(new Date(info.getSince() * 1000)).calendar()}
            </span>
          )}
        </Title>
        <div className="flex mt-4 space-x-2 items-center text-slate-700 mb-1 text-sm">
          <div>
            <BsInfoSquare />
          </div>
          <div>Node data on all networks.</div>
        </div>
      </div>
      {!info && (
        <div className="flex items-center justify-center p-36">
          <Loader />
        </div>
      )}
      {info && (
        <>
          <SectionTitle>Swaps</SectionTitle>
          <SectionDesc>List of currently running swaps on this node.</SectionDesc>
          <Block intent="secondary" shadow>
            <div className="p-8">
              <ul>
                {info.getSwapsList().length === 0 && <li>No running swap</li>}
                {info.getSwapsList().map((swap) => (
                  <li key={swap}>{swap}</li>
                ))}
              </ul>
            </div>
          </Block>

          <SectionTitle>Connected peers</SectionTitle>
          <SectionDesc>List of counter-party peers connected with this node.</SectionDesc>
          <Block intent="secondary" shadow>
            <div className="p-8">
              <ul>
                {info.getPeersList().length === 0 && <li>No connected peer</li>}
                {info.getPeersList().map((peer) => (
                  <li key={peer}>{peer}</li>
                ))}
              </ul>
            </div>
          </Block>

          <SectionTitle>Listening peers</SectionTitle>
          <SectionDesc>List of listening peers, ready to accept connections, launched by this node.</SectionDesc>
          <Block intent="secondary" shadow>
            <div className="p-8">
              <ul>
                {info.getListensList().length === 0 && <li>No Listening peer</li>}
                {info.getListensList().map((peer) => (
                  <li key={peer}>{peer}</li>
                ))}
              </ul>
            </div>
          </Block>
        </>
      )}
    </div>
  )
}
