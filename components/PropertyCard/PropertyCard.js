import React from 'react'

function PropertyCard(props) {
    console.log(props.keyVal)
  return (
    <div className='flex flex-row h-[250px] w-full rounded-[25px] border-2 boder-black p-3'>
        <div className=''>
            <img src={props.keyVal.images[0]} className="w-[200px] h-full object-cover rounded-[25px]"></img>
        </div>
        <div className='flex flex-col pl-5 justify-center'>
            <span className='text-[25px] text-sky-900 font-bold'>{props.keyVal.listingName}</span>
            <span>Property type: {props.keyVal.spaceType}</span>
            <span>Star: {props.keyVal.starRating}</span>
            <span>Reviews: {props.keyVal.reviewsCount}</span>
        </div>
    </div>
  )
}

export default PropertyCard