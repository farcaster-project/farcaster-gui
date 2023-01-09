import { FundingItem } from '../../lists/RunningList'
import { chainToAbrev, formatAmount } from '../../utils'
import { GiCash } from 'react-icons/gi'
import { BiCopy } from 'react-icons/bi'
import { Copy } from '../Copy'

function BtnCopy() {
  return (
    <div className="ml-1 p-1 text-sm border text-gray-500 border-gray-500 hover:text-gray-800 hover:border-gray-800 rounded">
      <BiCopy />
    </div>
  )
}

export function FundingInfo({ info }: { info: FundingItem }) {
  return (
    <div className="p-4 bg-orange-100 text-orange-900 rounded-lg">
      <div className="font-bold text-xl text-orange-800 mb-2 flex space-x-2 items-center">
        <div>
          <GiCash />
        </div>
        <div>This swap needs funding!</div>
      </div>
      <div className="flex space-x-3 items-center">
        <span>Send</span>
        <span className="font-mono py-2 px-3 bg-orange-200 rounded">
          <Copy
            data={formatAmount(info.data.getAmount(), info.blockchain)}
            extra={` ${chainToAbrev(info.blockchain).toLowerCase()}`}
            btn={<BtnCopy />}
          />
        </span>
        <span>to</span>
        <span className="font-mono py-2 px-3 bg-orange-200 rounded">
          <Copy data={info.data.getAddress()} btn={<BtnCopy />} />
        </span>
      </div>
    </div>
  )
}
