'use client'

import { ReactNode, useContext } from 'react'
import SettingsContext from './settings-provider'

export default function SettingsLoader({ children }: { children: ReactNode }) {
  const { loading } = useContext(SettingsContext)
  if (loading) {
    return <div>Loading settings...</div>
  }
  return <div>{children}</div>
}
