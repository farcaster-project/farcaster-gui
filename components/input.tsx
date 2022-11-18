import { cva } from 'class-variance-authority'
import React, { ChangeEvent, ComponentProps, useId } from 'react'

// an input row is a div containing one label element and one input or textarea
// displayed on the same line
const inputRow = cva(['my-4', 'grid', 'grid-cols-3', 'gap-4'], {
  variants: {
    type: {
      input: ['items-center'],
      text: [],
    },
  },
  defaultVariants: {
    type: 'input',
  },
})

// either an input or a textarea
const input = cva(
  ['col-span-2', 'p-2', 'border-4', 'bg-gray-100', 'border-gray-200', 'invalid:border-red-200', 'invalid:bg-red-100'],
  {
    variants: {
      type: {
        input: ['h-fit'],
        text: ['h-32 resize-none'],
      },
    },
    defaultVariants: {
      type: 'input',
    },
  }
)

export function Input({
  label,
  value,
  onChange,
  type,
  ...args
}: {
  label: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: 'input' | 'text'
} & ComponentProps<'input'> &
  ComponentProps<'textarea'>) {
  const inputType = type ?? 'input'
  const id = useId()
  return (
    <div className={inputRow({ type })}>
      <label className="text-gray-700 font-medium" htmlFor={id}>
        {label}
      </label>
      {inputType === 'input' && (
        <input className={input({ type })} type="text" id={id} value={value} onChange={onChange} {...args} />
      )}
      {type === 'text' && <textarea value={value} className={input({ type })} id={id} onChange={onChange} {...args} />}
    </div>
  )
}

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
