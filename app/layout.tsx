import '../styles/globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'
import { SettingsProvider } from './settings-provider'
import { Inter } from '@next/font/google'
import SettingsLoader from './SettingsLoader'
import { ConnectionProvider } from './connection-provider'
import ConnectHeader from './ConnectHeader'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <SettingsProvider>
          <SettingsLoader>
            <ConnectionProvider>
              <ConnectHeader />
              <div className="flex space-x-4">
                <MenuItem href="/">List</MenuItem>
                <MenuItem href="/take">Take an offer</MenuItem>
                <MenuItem href="/make">Register new offer</MenuItem>
                <MenuItem href="/info">Node info/Settings</MenuItem>
              </div>
              <div className="container">{children}</div>
            </ConnectionProvider>
          </SettingsLoader>
        </SettingsProvider>
      </body>
    </html>
  )
}
