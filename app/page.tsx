'use client'

import RunningList from '../components/lists/RunningList'
import { Title } from '../components/ui/Title'

export default function Page() {
  return (
    <>
      <div className="my-8 mt-16">
        <Title>My Swaps</Title>
      </div>
      <div>
        <RunningList></RunningList>
      </div>
    </>
  )
}
