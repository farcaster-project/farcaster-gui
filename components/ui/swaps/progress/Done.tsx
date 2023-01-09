import { MdOutlineDone } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'

export function Done({ success = true }: { success?: boolean }) {
  if (success)
    return (
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white">
        <MdOutlineDone />
      </div>
    )
  else
    return (
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white">
        <RxCross2 />
      </div>
    )
}
