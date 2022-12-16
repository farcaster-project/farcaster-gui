import { cva } from 'class-variance-authority'
import React, { ChangeEvent, ComponentProps, useId } from 'react'

// an input row is a div containing one label element and one input or textarea
// displayed on the same line
export const inputRow = cva(['my-4', 'flex'], {
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

//const baseInput = ['col-span-2', 'p-2', 'border-4', 'bg-gray-100', 'border-gray-200']
const baseInput = 'w-full cursor-default rounded-md bg-white py-2 px-3 text-left shadow-md'

// either an input or a textarea
const input = cva(baseInput, {
  variants: {
    type: {
      input: ['h-fit'],
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
      <label className="text-gray-700 font-medium w-96" htmlFor={id}>
        {label}
      </label>
      {inputType === 'input' && (
        <input className={input({ type })} type="text" id={id} value={value} onChange={onChange} {...args} />
      )}
      {type === 'text' && <textarea value={value} className={input({ type })} id={id} onChange={onChange} {...args} />}
    </div>
  )
}