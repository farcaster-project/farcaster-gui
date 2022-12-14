'use client'

import { Menu } from '@headlessui/react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Fragment } from 'react'
import { TbEdit, TbPlus, TbX } from 'react-icons/tb'
import { netToString } from '../components/utils'
import { useProfile } from './hooks'

export default function Profiles() {
  const [current, profileSet, profiles, delProfile] = useProfile()
  const segment = useSelectedLayoutSegment()

  const isOnProfilePage = segment === 'profile'

  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="w-full">
          <div className="shadow border border-slate-400 bg-slate-300 rounded-xl p-4 text-left">
            <div className="font-medium text-gray-800">{current.name}</div>
            <div className="text-sm text-gray-700">{netToString(current.network)}</div>
          </div>
        </Menu.Button>
        <Menu.Items className="absolute mt-1 w-fit bg-slate-200 border border-slate-300 shadow-md p-2 rounded-md">
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

                    <div className="flex pr-2 items-center">
                      <Link
                        href="/profile"
                        onClick={() => {
                          profileSet(profileItem)
                        }}
                        className="block py-4 px-1 text-xl"
                      >
                        <TbEdit className="stroke-gray-500 hover:stroke-gray-900" />
                      </Link>

                      {profiles.length > 1 && (
                        <div
                          className="inline py-4 px-1 text-xl"
                          onClick={() => {
                            if (confirm('Do you want to delete this profile?')) delProfile(profileItem)
                          }}
                        >
                          <TbX className="stroke-gray-500 cursor-pointer hover:stroke-gray-900" />
                        </div>
                      )}
                    </div>
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
