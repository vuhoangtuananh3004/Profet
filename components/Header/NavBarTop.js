import { AccountCircleOutlined, CottageOutlined } from '@mui/icons-material'
import React from 'react'

function NavBarTop() {
    return (
        <div className='flex flex-col hover:bg-slate-200 text-white hover:text-black sticky top-0 z-10'>
            <div className='flex flex-row justify-between align-center p-7 border-b-2 border-stone-300/40'>
                <div className='flex justify-center items-center'>
                    <CottageOutlined fontSize="large" />
                    <div className='border border-white-900 ml-2 mr-2 h-10'></div>
                    <span className='font-Sacramento text-3xl tracking-wider font-bold'>Like Home</span>
                </div>
                <div className='flex flex-row justtify-center align-center'>
                    <button className='flex flex-col justify-center align-center px-4 text-center'>
                        <p className='hover:scale-125'>HOME</p>
                    </button>
                    <button className='flex flex-col justify-center align-center px-4 text-center'>
                        <p className='hover:scale-125'>DESTINATION</p>
                    </button>
                    <button className='flex flex-col justify-center align-center px-4 text-center'>
                        <p className='hover:scale-125'>ABOUT US</p>
                    </button>
                    <button className='flex flex-col justify-center align-center px-4 text-center'>
                        <p className='hover:scale-125'>CONTACT</p>
                    </button>
                </div>
                <div className='flex justify-center'>
                    <button className='flex justify-center items-center align-center hover:scale-125'>
                        <AccountCircleOutlined />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBarTop