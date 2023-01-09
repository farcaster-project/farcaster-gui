import Link from 'next/link'
import { ReactNode } from 'react'

export default function MenuItem({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="">
      <Link
        className="transition-all ease-in-out block h-20 w-[164px] bg-gray-900 text-gray-200 rounded-md flex items-center justify-center hover:bg-gray-700 hover:ring ring-gray-500 shadow"
        href={href}
      >
        <span className="font-bold text-xl">{children}</span>
      </Link>
    </div>
  )
}
