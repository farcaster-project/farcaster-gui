'use client'

import { createContext, ReactNode, useEffect, useState } from 'react'
import { Network } from '../proto/farcaster_pb'

// Meta interface for the provider. Contains the application settings and the
// save settings function used to update the application settings and save them
// on local storage. Contains a loading state used at application boot on the
// client side to indicate when settings have finished loading from local storage.
interface SettingsProvider {
  settings: Settings
  loading: boolean
  saveSettings: (value: Settings) => void
}

// Our type for the application settings
export interface Settings {
  // a list of available profiles
  profiles: Profile[]
  // the selected profile
  current: string
}

// Our type for storing an application profile
export interface Profile {
  // unique identifier for the profile
  uuid: string
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
  profiles: [
    {
      uuid: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
      network: Network.TESTNET,
      grpcHost: 'localhost',
      grpcPort: '50051',
      btcAddr: '',
      xmrAddr: '',
    },
  ],
  current: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
}

// Create the context with the saved/default settings and an empty setter
// function. Loading is set to true until local storage has been retreived.
const SettingsContext = createContext<SettingsProvider>({
  settings: defaultSettings,
  loading: true,
  saveSettings: () => {},
})

// Create the settings provider that passes the settings value and the
// saveSettings function to consumer. This function is run on the server
// with the default settings and re-run on client with the useEffect to
// load saved settings, if any, on local storage.
export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, settingsSet] = useState<Settings>(defaultSettings)
  const [loading, loadingSet] = useState(true)

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
      loadingSet(false)
    }
  }, [])

  const saveSettings = (settings: Settings) => {
    // persist new settings on local storage and update state
    localStorage.setItem('settings', JSON.stringify(settings))
    settingsSet(settings)
  }

  return <SettingsContext.Provider value={{ settings, loading, saveSettings }}>{children}</SettingsContext.Provider>
}

// Extract the current profile from settings
export function getProfile(settings: Settings): Profile {
  return settings.profiles.filter((profile) => profile.uuid == settings.current)[0]
}

// Export the consumer for the settings context, use to create the useSettings
// custom hook
export const SettingsConsumer = SettingsContext.Consumer

export default SettingsContext
