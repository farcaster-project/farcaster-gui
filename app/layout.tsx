import '../styles/globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'
import { SettingsProvider } from './settings-provider'
import { Inter } from '@next/font/google'
import { ConnectionProvider } from './connection-provider'
import SettingsLoader from '../components/ui/SettingsLoader'
import Sidebar from '../components/ui/sidebar/Sidebar'
import Profiles from '../components/ui/sidebar/Profiles'
import ConnectStatus from '../components/ui/sidebar/ConnectStatus'
import FcLogo from '../components/ui/sidebar/FcLogo'
import SyncerStatus from '../components/ui/sidebar/SyncerStatus'

const inter = Inter({ subsets: ['latin'] })

function MenuItem({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="">
      <Link
        className="block h-24 w-24 bg-slate-300 text-slate-600 rounded-xl flex items-center justify-center hover:bg-slate-200 hover:ring ring-orange-600"
        href={href}
      >
        <span className="font-bold text-xl">{children}</span>
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
                  <div className="flex flex-col items-center">
                    <FcLogo />
                    <Profiles />
                  </div>
                  <div className="flex flex-col space-y-4 items-center">
                    <MenuItem href="/">Swaps</MenuItem>
                    <MenuItem href="/deals">Deals</MenuItem>
                    <MenuItem href="/history">History</MenuItem>
                    <MenuItem href="/info">Node</MenuItem>
                  </div>
                  <div>
                    <SyncerStatus />
                    <ConnectStatus />
                  </div>
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
