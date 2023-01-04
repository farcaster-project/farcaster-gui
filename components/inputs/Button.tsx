import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const button = cva(['rounded', 'disabled:bg-gray-100', 'disabled:text-gray-300'], {
  variants: {
    active: {
      true: ['bg-gray-500', 'text-gray-100'],
      false: ['bg-gray-300 ', 'text-gray-800'],
    },
    short: {
      true: ['px-4', 'py-2'],
      false: ['px-8', 'py-3'],
    },
  },
  defaultVariants: {
    active: false,
    short: false,
  },
})

export function Button({ active, short, ...args }: { active?: boolean; short?: boolean } & ComponentProps<'button'>) {
  return <button className={button({ active, short })} {...args} />
}

export function Submit(args: ComponentProps<'input'>) {
  return (
    <input
      className="cursor-pointer px-8 py-3 rounded bg-gray-300 text-gray-800 hover:bg-gray-500 hover:text-gray-100 disabled:bg-gray-100 disabled:text-gray-300"
      type="submit"
      {...args}
    />
  )
}
