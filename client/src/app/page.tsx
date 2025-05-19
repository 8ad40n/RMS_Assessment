import Feedback from '@/components/Feedback/feedback'
import Foods from '@/components/Foods/Foods'
import Banner from '@/components/Header/Banner'
import Members from '@/components/Members/members'
import PartnersAndClients from '@/components/PartnersAndClients/PartnersAndClients'

export default function page() {
  return (
    <div>
      <Banner />
      <Foods />
      <Feedback />
      <Members />
      <PartnersAndClients />
    </div>
  )
}
