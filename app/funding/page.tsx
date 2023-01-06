import { FundingList } from '../../components/ui/funding/FundingList'
import Tabs from '../../components/ui/Tabs'
import { Title } from '../../components/ui/Title'
import { Blockchain } from '../../proto/farcaster_pb'

export default function FundingPage() {
  return (
    <div className="mb-16">
      <div className="my-8 mt-16">
        <Title>My Funding Addresses</Title>
      </div>
      <div className="mb-8">
        <Tabs
          tabs={[
            {
              tabHeader: <span className="text-xl">Bitcoin</span>,
              tabContent: (
                <div className="px-8">
                  <FundingList chain={Blockchain.BITCOIN} />
                </div>
              ),
            },
            {
              tabHeader: <span className="text-xl">Monero</span>,
              tabContent: (
                <div className="px-8">
                  <FundingList chain={Blockchain.MONERO} />
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  )
}
