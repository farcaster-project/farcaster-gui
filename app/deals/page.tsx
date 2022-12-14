'use client'

import { MakeForm } from './MakeForm'
import { TakeForm } from './TakeForm'

export default function TakePage() {
  return (
    <div className="flex flex-col space-y-16">
      <TakeForm />
      <MakeForm />
    </div>
  )
}
