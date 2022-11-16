import { ReactNode } from 'react'

export function Label({ children }: { children: ReactNode }) {
  return <span className="px-4 py-1 rounded-full bg-gray-900 text-gray-200">{children}</span>
}
