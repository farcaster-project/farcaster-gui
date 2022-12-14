import { ReactNode } from 'react'

export default function Sidebar({ children }: { children: ReactNode }) {
  return <div className="flex flex-col h-screen justify-between p-4 bg-slate-600 w-48">{children}</div>
}
