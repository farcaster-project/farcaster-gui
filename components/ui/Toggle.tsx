import { Dispatch, SetStateAction } from 'react'
import { Switch } from '@headlessui/react'

export function Toggle({ alt, enabled, onChange }: { alt: string; enabled: boolean; onChange: (v: boolean) => void }) {
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      className={`${enabled ? 'bg-gray-600' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">{alt}</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}
