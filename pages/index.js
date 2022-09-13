
import BrowseProperties from '../components/BrowseCard-section/BrowseProperties'
import Footer from '../components/Footer/Footer'
import RewardCard from '../components/Reward-section/RewardCard'

import SearchFlight from '../components/Search-section/SearchFlight'
import SpecialEvent from '../components/SpecialEvent-section/SpecialEvent'
import TravelNotice from '../components/TravelNotice-section/Travelnotice'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=''>
      <TravelNotice />
      <BrowseProperties />
      <SpecialEvent/>
      <RewardCard/>
      <Footer/>
    </div>
  )
}
