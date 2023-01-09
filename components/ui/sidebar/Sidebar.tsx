import { ReactNode } from 'react'

export default function Sidebar({ children }: { children: ReactNode }) {
  return (
    <div className="fixed flex flex-col h-screen justify-between px-4 py-6 bg-gray-800 shadow-2xl w-[200px] border-r-4 border-gray-700">
      {children}
    </div>
  )
}
