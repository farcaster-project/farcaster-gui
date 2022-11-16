import { cva } from 'class-variance-authority'
import { ReactNode } from 'react'

export function Label({ children }: { children: ReactNode }) {
  return <span className="px-4 py-1 rounded-full bg-gray-900 text-gray-200">{children}</span>
}

const block = cva(['p-2', 'rounded'], {
  variants: {
    intent: {
      primary: ['text-gray-100', 'bg-gray-900'],
      secondary: ['bg-gray-700', 'text-gray-300'],
    },
  },
  defaultVariants: {
    intent: 'secondary',
  },
})

export function Block({ intent, children }: { intent: 'primary' | 'secondary'; children: ReactNode }) {
  return <div className={block({ intent })}>{children}</div>
}
