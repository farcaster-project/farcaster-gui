import { ReactNode } from 'react'
import { inputRow } from '../input'

export default function Label({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <div className={inputRow({ type: 'input' })}>
      <label className="text-gray-700 font-medium w-96">{label}</label>
      {children}
    </div>
  )
}
