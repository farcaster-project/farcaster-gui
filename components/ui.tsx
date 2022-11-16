import { cva } from 'class-variance-authority'
import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return <h1 className="text-3xl font-bold underline">{children}</h1>
}

const button = cva(['px-4', 'py-1', 'rounded'], {
  variants: {
    active: {
      true: ['bg-gray-500', 'text-gray-100'],
      false: ['bg-gray-300 ', 'text-gray-800'],
    },
  },
  defaultVariants: {
    active: false,
  },
})

export function Button(params: any) {
  const { active, ...args } = params as { active?: boolean; args: any }
  return <button className={button({ active })} {...args} />
}
