import { cva } from 'class-variance-authority'
import React, { ChangeEvent, ComponentProps, ReactNode, useId } from 'react'

// an input row is a div containing one label element and one input or textarea
// displayed on the same line
export const inputRow = cva(['my-4', 'flex'], {
  variants: {
    type: {
      input: ['items-center'],
      number: ['items-center'],
      text: [],
    },
  },
  defaultVariants: {
    type: 'input',
  },
})

const baseInput =
  'w-full cursor-default rounded-sm bg-white py-2 px-3 border border-gray-50 text-left shadow font-mono focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-orange-600'

// either an input or a textarea
const input = cva(baseInput, {
  variants: {
    type: {
      input: ['h-fit'],
      number: ['h-fit'],
      text: ['h-32 resize-none'],
    },
  },
  defaultVariants: {
    type: 'input',
  },
})

export function Input({
  label,
  value,
  onChange,
  type,
  ...args
}: {
  label: ReactNode
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: 'input' | 'text' | 'number'
} & ComponentProps<'input'> &
  ComponentProps<'textarea'>) {
  const inputType = type ?? 'input'
  const id = useId()
  return (
    <div className={inputRow({ type })}>
      <label className="text-gray-700 font-medium w-96" htmlFor={id}>
        {label}
      </label>
      <div className="grow">
        {inputType === 'input' && (
          <input className={input({ type })} type="text" id={id} value={value} onChange={onChange} {...args} />
        )}
        {inputType === 'number' && (
          <input className={input({ type })} type="number" id={id} value={value} onChange={onChange} {...args} />
        )}
        {type === 'text' && (
          <textarea value={value} className={input({ type })} id={id} onChange={onChange} {...args} />
        )}
      </div>
    </div>
  )
}

export function Required() {
  return <span className="text-red-500 font-bold text-sm">*</span>
}
