import { ChangeEvent, useId } from 'react'

export default function Input({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  const id = useId()
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} value={value} onChange={onChange} />
    </>
  )
}
