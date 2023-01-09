'use client'

import { ReactNode } from 'react'
import { Tab } from '@headlessui/react'
import { cva } from 'class-variance-authority'

const tab = cva(
  'w-full rounded-md py-2.5 text-sm font-medium leading-5 transition-all ease-in-out focus:outline-none',
  {
    variants: {
      selected: {
        true: ['text-gray-200 bg-gray-700 text-gray-100 shadow'],
        false: ['text-gray-700 hover:bg-gray-400 hover:text-gray-700'],
      },
    },
  }
)

export interface TabItem {
  tabHeader: ReactNode
  tabContent: ReactNode
}

export default function Tabs({ tabs }: { tabs: TabItem[] }) {
  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="flex space-x-1 shadow rounded-md bg-gray-300 p-1">
          {tabs.map((item, idx) => (
            <Tab key={idx} className={({ selected }) => tab({ selected })}>
              {item.tabHeader}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {tabs.map((item, idx) => (
            <Tab.Panel
              key={idx}
              className="shadow rounded-md bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none"
            >
              {item.tabContent}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
