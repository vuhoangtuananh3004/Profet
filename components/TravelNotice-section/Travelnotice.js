import React, { useState } from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function TravelNotice() {
  // const [notice, setNotice] = useState('');
  const setNotice = "Get the advice you need. Check the latest COVID-19 restrictions before you travel.";


  return (
    <div className='flex w-2/3 mx-auto text-red-200 p-5 border border-slate-200/40 m-10 tracking-wider'>
      <InfoOutlinedIcon/>
      <p className='inline ml-3'> {setNotice} <span className='infoButton underline p-1'>Learn more</span></p>
      </div>
  )
}

export default TravelNotice