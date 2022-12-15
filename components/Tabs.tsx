'use client'

import { ReactNode, useState } from 'react'
import { Tab } from '@headlessui/react'
import { cva } from 'class-variance-authority'
import { isTemplateExpression } from 'typescript'

const tab = cva(
  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-slate-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none',
  {
    variants: {
      selected: {
        true: ['bg-white shadow'],
        false: ['text-slate-300 hover:bg-white/[0.12] hover:text-white'],
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
        <Tab.List className="flex space-x-1 rounded-xl bg-slate-300 p-1">
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
              className="rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none"
            >
              {item.tabContent}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
