import React from 'react'
import StarIcon from '@mui/icons-material/Star';

function PropertyCard(props) {

  let temp = props.keyVal.price.split("$")
  const price = Math.floor(((temp[1].split(",")).join('') / 30))
  return (
    // <div className='flex flex-col mb-20'>
    //   <div className=''>
    //     <img src={props.keyVal.images[0]} className="w-[300px] h-[250px] object-cover rounded-[25px]"></img>
    //   </div>
    //   <div className='flex flex-col justify-center'>
    //     <span className='text-lg font-bold mt-3'>{props.keyVal.publicAddress}</span>
    //     <div className='h-[45px]'>
    //       <span className='text-sm text-gray-500'>{props.keyVal.listingName}</span>
    //     </div>
    //     <div className='flex text-md item-center'>
    //       <div>{props.keyVal.starRating} </div>
    //       <div className='item-center'><StarIcon fontSize="inherit" /></div></div>
    //     <span className=''>{`$` + price + `/night`}</span>
    <div className='gird gird-rows-5'>
      <div>
        <img src={props.keyVal.images[0]} className="w-[300px] h-[250px] object-cover rounded-[25px]"></img>
      </div>
      <div>
        <span className='text-lg font-bold mt-3'>{props.keyVal.publicAddress}</span>
      </div>
      <div className='flex flex-row'>
        <span className=' flex text-md justify-center items-center align-center text-gray-500'>{props.keyVal.avgRating} <StarIcon className='text-yellow-400' color="inherit" fontSize="small" /> ({props.keyVal.reviewsCount} reviews)</span>
      </div>
      <div>
        <span className='text-sm text-gray-500'>{`$` + price + `/night`}</span>
      </div>
      <div>
        <span className='text-sm text-gray-500'>{props.keyVal.listingName}</span>
      </div>
    </div>




    // {/* <span>Property type: {props.keyVal.spaceType}</span>
    //  <span>Star: {props.keyVal.starRating}</span>
    //  <span>Reviews: {props.keyVal.reviewsCount}</span>  */}
    //   </div>
    // </div>
  )
}

export default PropertyCard