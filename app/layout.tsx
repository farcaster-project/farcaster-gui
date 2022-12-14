import '../styles/globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'
import { SettingsProvider } from './settings-provider'
import { Inter } from '@next/font/google'
import SettingsLoader from './SettingsLoader'
import { ConnectionProvider } from './connection-provider'
import ConnectHeader from './ConnectHeader'
import Sidebar from './Sidebar'
import Profiles from './Profiles'

const inter = Inter({ subsets: ['latin'] })

function MenuItem({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="">
      <Link className="block h-20 w-20 bg-gray-300 rounded-xl hover:underline" href={href}>
        {children}
      </Link>
    </div>
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
              <div className="flex bg-slate-100">
                <Sidebar>
                  <Profiles />
                  <div className="flex flex-col space-y-4">
                    <MenuItem href="/">List</MenuItem>
                    <MenuItem href="/take">Take an offer</MenuItem>
                    <MenuItem href="/make">Register new offer</MenuItem>
                    <MenuItem href="/info">Node info/Settings</MenuItem>
                  </div>
                  <ConnectHeader />
                </Sidebar>
                <div className="container mx-auto">{children}</div>
              </div>
            </ConnectionProvider>
          </SettingsLoader>
        </SettingsProvider>
      </body>
    </html>
  )
}
