
import BrowseProperties from '../components/BrowseCard-section/BrowseProperties'
import Header from '../components/Header/Header'
import Layout from '../components/Layout/Layout'
import RewardCard from '../components/Reward-section/RewardCard'
import SpecialEvent from '../components/SpecialEvent-section/SpecialEvent'
import TravelNotice from '../components/TravelNotice-section/Travelnotice'

export default function Home() {

  return (
    <div className='md:overflow-visible'>
      <Layout>
        <Header />
        <TravelNotice />
        <BrowseProperties />
        <SpecialEvent />
        <RewardCard />
      </Layout>
    </div>
  )
}
