import Link from 'next/link'
import { ReactNode } from 'react'

export default function MenuItem({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="">
      <Link
        className="block h-24 w-24 bg-slate-300 text-slate-600 rounded-xl flex items-center justify-center hover:bg-slate-200 hover:ring ring-slate-500"
        href={href}
      >
        <span className="font-bold text-xl">{children}</span>
      </Link>
    </div>
  )
}
