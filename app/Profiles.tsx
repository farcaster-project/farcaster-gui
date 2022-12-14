'use client'

import { Menu } from '@headlessui/react'
import Link from 'next/link'
import { ComponentProps, forwardRef, Fragment, ReactNode } from 'react'
import { TbEdit, TbPlus } from 'react-icons/tb'

const profiles = [
  {
    name: 'Node 1',
    network: 'mainnet',
  },
  {
    name: 'Node 1',
    network: 'testnet',
  },
  {
    name: 'Node 2',
    network: 'testnet',
  },
]

const ProfileItem = ({
  rightIcon,
  label,
  active,
  leftIcon,
}: {
  rightIcon?: ReactNode
  label: string
  active: boolean
  leftIcon?: ReactNode
}) => {
  return (
    <div className={`flex items-center justify-between w-64 rounded-md space-x-2 p-2 ${active && 'bg-slate-300'}`}>
      {rightIcon} <div className="grow">{label}</div> {leftIcon}
    </div>
  )
}

export default function Profiles() {
  return (
    <div className="relative">
      <Menu>
        <Menu.Button>Current selected profile here (short form)</Menu.Button>
        <Menu.Items className="absolute w-fit bg-slate-200 border border-slate-300 shadow-md p-2 rounded-md">
          {profiles.map((profile) => (
            <Menu.Item key={`${profile.name}-${profile.network}`} as={Fragment}>
              {({ active }) => (
                <div
                  className={`flex items-center justify-between w-64 rounded-md space-x-2 ${active && 'bg-slate-300'}`}
                >
                  <div className="grow p-2 cursor-pointer" onClick={() => console.log('clicked', profile.name)}>
                    <div className="font-medium text-gray-800">{profile.name}</div>
                    <div className="text-sm text-gray-700">{profile.network}</div>
                  </div>

                  <Link href="/info" className="block p-4 text-xl">
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
              <Link href="/info">
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
