import { FundingItem } from '../../lists/RunningList'
import { formatAmount } from '../../utils'

export function FundingInfo({ info }: { info: FundingItem }) {
  return (
    <div className="p-4 mt-6 mb-12 bg-orange-100 text-orange-900 rounded-lg">
      <div className="font-bold text-xl text-orange-800 mb-2">This swap needs funding!</div>
      <div className="flex space-x-3 items-center">
        <span>Send</span>
        <span className="font-mono py-1 px-3 bg-orange-200 rounded">
          {formatAmount(info.data.getAmount(), info.blockchain)}
        </span>
        <span>to</span>
        <span className="font-mono py-1 px-3 bg-orange-200 rounded">{info.data.getAddress()}</span>
      </div>
    </div>
  )
}
