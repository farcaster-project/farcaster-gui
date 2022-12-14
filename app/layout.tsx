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
      <Link className="block h-24 w-24 bg-slate-300 rounded-xl" href={href}>
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
              <div className="relative flex bg-slate-100 min-h-screen">
                <Sidebar>
                  <Profiles />
                  <div className="flex flex-col space-y-4 items-center">
                    <MenuItem href="/">Swaps</MenuItem>
                    <MenuItem href="/deals">Deals</MenuItem>
                    <MenuItem href="/info">Node</MenuItem>
                  </div>
                  <ConnectHeader />
                </Sidebar>
                <div className="w-full ml-48">
                  <div className="container mx-auto">{children}</div>
                </div>
              </div>
            </ConnectionProvider>
          </SettingsLoader>
        </SettingsProvider>
      </body>
    </html>
  )
}
