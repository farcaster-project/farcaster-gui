import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const button = cva(['px-4', 'py-1', 'rounded', 'disabled:bg-gray-100', 'disabled:text-gray-300'], {
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

export function Button({ active, ...args }: { active?: boolean } & ComponentProps<'button'>) {
  return <button className={button({ active })} {...args} />
}

export function Submit(args: ComponentProps<'input'>) {
  return (
    <input
      className="cursor-pointer px-4 py-1 rounded bg-gray-300 text-gray-800 hover:bg-gray-500 hover:text-gray-100 disabled:bg-gray-100 disabled:text-gray-300"
      type="submit"
      {...args}
    />
  )
}
