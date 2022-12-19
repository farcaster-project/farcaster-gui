'use client'

import { useState } from 'react'
import Tabs from '../../components/ui/Tabs'
import { Title } from '../../components/ui/Title'
import { MakeForm } from './MakeForm'
import { TakeForm, takeReq } from './TakeForm'

export default function TakePage() {
  const [take, takeSet] = useState(takeReq)

  return (
    <div className="mb-16">
      <div className="my-8 mt-16">
        <Title>Deals</Title>
      </div>
      <Tabs
        tabs={[
          {
            tabHeader: <span className="text-xl">Take</span>,
            tabContent: <TakeForm take={take} takeSet={takeSet} />,
          },
          {
            tabHeader: <span className="text-xl">Make</span>,
            tabContent: <MakeForm />,
          },
        ]}
      />
    </div>
  )
}
