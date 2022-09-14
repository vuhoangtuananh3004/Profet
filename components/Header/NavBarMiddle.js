import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

function NavBarMiddle() {
  return (
    <div className=''>
      <img className='absolute left-0 top-0 w-full h-full' src='/main-image/California.jpeg' />
      <div className='absolute left-0 top-0 bg-slate-800/40 w-full h-full'>
        <div className='flex flex-row w-full h-full '>
          <div className='flex items-center w-1/4 h-full p-5 text-white'> <span className='hover:border-4 hover:border-slate-100 hover:rounded-full hover:p-3'> <ArrowBackIosIcon fontSize='large' /></span></div>
          <div className='flex flex-col justify-center align-center items-center w-2/4 h-full'>
            <span className='text-white text-[30px] p-5'>Golden Gate Bridge</span>
            <span className='text-white text-[60px]'>San Francisco</span>
            <span className='text-white border border-white p-4 hover:animate-pulse hover:bg-red-400/20'>Take me there <ArrowRightAltRoundedIcon/></span>
          </div>
          <div className='flex flex-row-reverse items-center w-1/4 h-full p-5 text-white'> <span className='hover:border-4 hover:border-slate-100 hover:rounded-full hover:p-3'> <ArrowForwardIosIcon fontSize='large' /></span></div>
        </div>
      </div>

    </div>
  )
}

export default NavBarMiddle