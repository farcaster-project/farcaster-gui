'use client'

import { Title } from '../components/ui'
import RunningList from './RunningList'

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
