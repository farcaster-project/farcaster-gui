import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { HiCheck, HiChevronUpDown } from 'react-icons/hi2'

export default function Select({
  selected,
  elems,
  onChange,
}: {
  selected: { name: string }
  elems: { name: string }[]
  onChange: ({ name }: { name: string }) => void
}) {
  const handleChange = (e: { name: string }) => {
    onChange(e)
  }

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative mt-1">
          <Listbox.Button className="w-full cursor-default rounded-sm bg-white py-2 pl-3 pr-10 text-left shadow-md">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronUpDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-sm bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {elems.map((elem, elemIdx) => (
                <Listbox.Option
                  key={elemIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-slate-100 text-slate-900' : 'text-gray-900'
                    }`
                  }
                  value={elem}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{elem.name}</span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-600">
                          <HiCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
