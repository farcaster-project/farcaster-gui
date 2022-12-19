import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return <h1 className="text-6xl font-bold">{children}</h1>
}

export function Subtitle({ children }: { children: ReactNode }) {
  return <h2 className="text-xl font-semibold text-gray-700">{children}</h2>
}
