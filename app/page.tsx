'use client'

import RunningList from '../components/lists/RunningList'
import { Title } from '../components/ui/Title'

export default function Page() {
  return (
    <>
      <Title>List</Title>
      <div>
        <RunningList></RunningList>
      </div>
    </>
  )
}
