'use client'

import Tabs from '../../components/ui/Tabs'
import { MakeForm } from './MakeForm'
import { TakeForm } from './TakeForm'

export default function TakePage() {
  return (
    <div>
      <Tabs
        tabs={[
          {
            tabHeader: <span className="text-xl">Take a deal</span>,
            tabContent: <TakeForm />,
          },
          {
            tabHeader: <span className="text-xl">Make a deal</span>,
            tabContent: <MakeForm />,
          },
        ]}
      />
    </div>
  )
}
