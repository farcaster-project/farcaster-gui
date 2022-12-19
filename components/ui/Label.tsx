import { cva } from 'class-variance-authority'
import { ReactNode } from 'react'

const label = cva(['py-1'], {
  variants: {
    intensity: {
      dark: ['bg-gray-700', 'text-gray-100'],
      light: ['bg-gray-300', 'text-slate-700'],
    },
    rounded: {
      true: ['px-4', 'rounded-full'],
      false: ['px-2', 'rounded-sm'],
    },
  },
  defaultVariants: {
    intensity: 'dark',
    rounded: true,
  },
})

export function Label({
  intensity,
  rounded = true,
  children,
}: {
  intensity?: 'dark' | 'light'
  rounded?: boolean
  children: ReactNode
}) {
  return <span className={label({ intensity, rounded })}>{children}</span>
}

const block = cva(['p-2', 'rounded', 'font-mono'], {
  variants: {
    intent: {
      primary: ['bg-gray-700', 'text-gray-300'],
      secondary: ['bg-gray-500', 'text-gray-200'],
    },
  },
  defaultVariants: {
    intent: 'secondary',
  },
})

export function Block({ intent, children }: { intent: 'primary' | 'secondary'; children: ReactNode }) {
  return <div className={block({ intent })}>{children}</div>
}
