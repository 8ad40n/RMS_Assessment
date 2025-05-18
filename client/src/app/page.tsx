import Dishes from '@/components/Dishes/Dishes'
import Feedback from '@/components/Feedback/feedback'
import Banner from '@/components/Header/Banner'

export default function page() {
  return (
    <div>
      <Banner />
      <Dishes />
      <Feedback />
    </div>
  )
}
