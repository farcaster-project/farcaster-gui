'use client'

import { createContext, ReactNode, useEffect, useState } from 'react'
import { Network } from '../proto/farcaster_pb'

// Meta interface for the provider. Contains the application settings and the
// save settings function used to update the application settings and save them
// on local storage.
interface SettingsProvider {
  settings: Settings
  saveSettings: (value: Settings) => void
}

// Our type for the application settings
export interface Settings {
  // the default network to use
  network: Network
  // host to use to connect to the gRPC service
  grpcHost: string
  // port to use to connect to the gRPC service
  grpcPort: string
  // default Bitcoin address
  btcAddr: string
  // default Monero address
  xmrAddr: string
}

// Defaults to use when no settings are registered
const defaultSettings: Settings = {
  network: Network.TESTNET,
  grpcHost: 'localhost',
  grpcPort: '50051',
  btcAddr: '',
  xmrAddr: '',
}

// Create the context with the saved/default settings and an empty setter
// function
const SettingsContext = createContext<SettingsProvider>({ settings: defaultSettings, saveSettings: () => {} })

// Create the settings provider that passes the settings value and the
// saveSettings function to consumer. This function is run on the server
// with the default settings and re-run on client with the useEffect to
// load saved settings, if any, on local storage.
export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, settingsSet] = useState<Settings>(defaultSettings)

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage) {
      const serializedSettings = localStorage.getItem('settings')
      if (serializedSettings) {
        // restore settings
        settingsSet(JSON.parse(serializedSettings) as Settings)
      } else {
        // no settings saved, use defaults (already done within useState) and
        // save them in local storage
        localStorage.setItem('settings', JSON.stringify(defaultSettings))
      }
    }
  }, [])

  const saveSettings = (settings: Settings) => {
    // persist new settings on local storage and update state
    localStorage.setItem('settings', JSON.stringify(settings))
    settingsSet(settings)
  }

  return <SettingsContext.Provider value={{ settings, saveSettings }}>{children}</SettingsContext.Provider>
}

// Export the consumer for the settings context, use to create the useSettings
// custom hook
export const SettingsConsumer = SettingsContext.Consumer

export default SettingsContext
