'use client'

import RunningList from './RunningList'

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">List</h1>
      <div>
        <RunningList></RunningList>
      </div>
    </>
  )
}
