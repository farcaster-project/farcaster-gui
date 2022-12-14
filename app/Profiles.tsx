'use client'

import { Menu } from '@headlessui/react'
import Link from 'next/link'
import { useRouter, useSelectedLayoutSegment } from 'next/navigation'
import { Fragment } from 'react'
import { TbEdit, TbPlus } from 'react-icons/tb'
import { netToString } from '../components/utils'
import { useProfile } from './hooks'

export default function Profiles() {
  const [current, profileSet, profiles] = useProfile()
  const router = useRouter()
  const segment = useSelectedLayoutSegment()

  const isOnProfilePage = segment === 'profile'

  return (
    <div className="relative">
      <Menu>
        <Menu.Button>{`${current.name} ${netToString(current.network)}`}</Menu.Button>
        <Menu.Items className="absolute w-fit bg-slate-200 border border-slate-300 shadow-md p-2 rounded-md">
          {profiles
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((profileItem) => (
              <Menu.Item key={profileItem.uuid} as={Fragment}>
                {({ active }) => (
                  <div
                    className={`flex items-center justify-between w-64 rounded-md space-x-2 ${
                      active && 'bg-slate-300'
                    }`}
                  >
                    <div
                      className={`grow p-2 ${!isOnProfilePage && 'cursor-pointer'}`}
                      onClick={() => {
                        if (!isOnProfilePage) {
                          if (profileItem.uuid !== current.uuid) profileSet(profileItem)
                        }
                      }}
                    >
                      <div className="font-medium text-gray-800">{profileItem.name}</div>
                      <div className="text-sm text-gray-700">{netToString(profileItem.network)}</div>
                    </div>

                    <Link
                      href="/profile"
                      onClick={() => {
                        profileSet(profileItem)
                      }}
                      className="block p-4 text-xl"
                    >
                      <TbEdit className="stroke-gray-500 hover:stroke-gray-900" />
                    </Link>
                  </div>
                )}
              </Menu.Item>
            ))}
          <Menu.Item disabled>
            <div className="border border-slate-300 my-2 rounded-full" />
          </Menu.Item>
          <Menu.Item as={Fragment}>
            {({ active }) => (
              <Link href="/profile?new">
                <div
                  className={`flex items-center justify-between w-64 rounded-md space-x-2 p-2 ${
                    active && 'bg-slate-300'
                  }`}
                >
                  <TbPlus /> <div className="grow text-sm">New profile</div>
                </div>
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  )
}
