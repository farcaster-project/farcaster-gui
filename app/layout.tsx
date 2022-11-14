import '../styles/globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'

function MenuItem({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="hover:underline" href={href}>
      {children}
    </Link>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body>
        <div className="flex space-x-4">
          <MenuItem href="/">List</MenuItem>
          <MenuItem href="/take">Take an offer</MenuItem>
          <MenuItem href="/make">Register new offer</MenuItem>
          <MenuItem href="/info">Node info</MenuItem>
        </div>
        <div className="container">{children}</div>
      </body>
    </html>
  )
}
