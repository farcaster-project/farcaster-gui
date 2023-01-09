import '../styles/globals.css'
import { SettingsProvider } from './settings-provider'
import { Inter } from '@next/font/google'
import { ConnectionProvider } from './connection-provider'
import SettingsLoader from '../components/ui/SettingsLoader'
import Sidebar from '../components/ui/sidebar/Sidebar'
import Profiles from '../components/ui/sidebar/Profiles'
import ConnectStatus from '../components/ui/sidebar/ConnectStatus'
import FcLogo from '../components/ui/sidebar/FcLogo'
import SyncerStatus from '../components/ui/sidebar/SyncerStatus'
import ToastConfig from './toasts'
import MenuItem from '../components/ui/sidebar/MenuItem'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body className={inter.className}>
        <SettingsProvider>
          <SettingsLoader>
            <ConnectionProvider>
              <div className="relative flex bg-gray-50 min-h-screen">
                <Sidebar>
                  <div className="flex flex-col items-center">
                    <FcLogo />
                    <Profiles />
                  </div>
                  <div className="flex flex-col space-y-4 items-center">
                    <MenuItem href="/">Swaps</MenuItem>
                    <MenuItem href="/deals">Deals</MenuItem>
                    <MenuItem href="/funding">Funding</MenuItem>
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
              <ToastConfig />
            </ConnectionProvider>
          </SettingsLoader>
        </SettingsProvider>
      </body>
    </html>
  )
}
