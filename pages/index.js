
import BrowseProperties from '../components/BrowseCard-section/BrowseProperties'
import Footer from '../components/Footer/Footer'
import RewardCard from '../components/Reward-section/RewardCard'

import SearchFlight from '../components/Search-section/SearchFlight'
import SpecialEvent from '../components/SpecialEvent-section/SpecialEvent'
import TravelNotice from '../components/TravelNotice-section/Travelnotice'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    // <div className='container p-5 mx-auto relative overflow-hidden w-1024 h-600'>
    //   <div className='relative'>

    //   </div>
    //   <Image src="/main-image/California.jpeg" className='absolute top-0 left-0 overflow-hidden'
    //     alt='main-image'
    //     width='1024'
    //     height='600'
    //   />
    //   <Image src="/main-image/California.jpeg" className='absolute top-0 left-10 overflow-hidden'
    //     alt='main-image'
    //     width='1024'
    //     height='600'
    //   />
    // </div>
    <div className='flex flex-col justify-center'>
        <SearchFlight />
        <SpecialEvent/>
        <TravelNotice/>
        <BrowseProperties/>
        <RewardCard/>
        <Footer/>
    </div>





    // <div className='container mx-auto bg-yellow-500 w-full h-[600px]'>
    //   <div className='relative w-[300px] h-[300px] bg-slate-500'>
    //     <div className='flex absolute top-0 left-0' id={styles.animate}>
    //       <div className='flex w-full justify-around'>
    //         <h1>Logo 1</h1>
    //         <h1>Logo 2</h1>
    //         <h1>Logo 3</h1>
    //         <h1>Logo 4</h1>
    //         <h1>Logo 5</h1>
    //       </div>
    //       <div className='flex w-full justify-around'>
    //         <h1>Logo 1</h1>
    //         <h1>Logo 2</h1>
    //         <h1>Logo 3</h1>
    //         <h1>Logo 4</h1>
    //         <h1>Logo 5</h1>
    //       </div>
    //     </div>

    //   </div>
    // </div>
    // <div className=''>

    // </div>
    /* <img src="/main-image/California.jpeg" className="object-cover overflow-hidden" alt="..." />
    <img src="/main-image/NewYorkCity.jpeg" className="object-cover overflow-hidden" alt="..." /> */


    // // <div id={styles.container} className="container mx-auto w-100 h-100">

    // //     <div id={styles.photobanner} className="container inline-flex w-100 h-100">
    // //       <img src="https://i.stack.imgur.com/xckZy.jpg" alt="" />
    // //       <img src="https://i.stack.imgur.com/CVgbr.jpg" alt="" />
    // //       <img src="https://i.stack.imgur.com/7c4yC.jpg" alt="" />
    // //       <img src="https://i.stack.imgur.com/RTiml.jpg" alt="" />
    // //       <img src="https://i.stack.imgur.com/xckZy.jpg" alt="" />
    // //       <img src="https://i.stack.imgur.com/CVgbr.jpg" alt="" />
    // //       <img src="https://i.stack.imgur.com/7c4yC.jpg" alt="" />
    // //       <img src="https://i.stack.imgur.com/RTiml.jpg" alt="" />

    // //   </div>
    // // </div>
  )
}
