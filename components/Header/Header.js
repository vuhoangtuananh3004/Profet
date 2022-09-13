import React, { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import SearchAutoComplete from '../Search-section/SearchAutoComplete';
import NavBarTop from './NavBarTop';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';

import NavBarMiddle from './NavBarMiddle';
function Header() {
    const [menu, setMenu] = useState(false);
    const icons = [
        {
            iconStyle: <LanguageSharpIcon style={{ color: 'white' }} />,
            text: 'English',
            link: '#'
        },
        {
            iconStyle: <HomeOutlinedIcon style={{ color: 'white' }} />,
            text: 'List your property',
            link: '#'
        },
        {
            iconStyle: <HelpOutlineOutlinedIcon style={{ color: 'white' }} />,
            text: 'Support',
            link: '#'
        },
        {
            iconStyle: <TravelExploreOutlinedIcon style={{ color: 'white' }} />,
            text: 'Explore',
            link: '#'
        },
        {
            iconStyle: <AccountCircleOutlinedIcon style={{ color: 'white' }} />,
            text: 'Sign in',
            link: '#'
        },
    ]
    const popupMenu = () => {
        var element = document.getElementById("menu");


        if (menu == false) {
            element.classList.remove("hidden")
            setMenu(true)
        } else {
            element.classList.add("hidden")
            setMenu(false)
        }

    }


    return (
        // <div>
        //     <div className="flex justify-between items-center p-5 shadow-lg shadow-slate-800 lg:mb-10 bg-slate-900/90 sticky top-0 z-40 xl:text-lg lg:text-xs">
        //         <a href="#">
        //             <div className='flex justify-center items-center'>
        //                 <CottageOutlinedIcon style={{ color: 'white' }} fontSize="large" />
        //                 <div className='border border-white-900 ml-2 mr-2 h-10'></div>
        //                 <span className='font-Sacramento text-3xl text-white tracking-wider font-bold'>Like Home</span>
        //             </div>
        //         </a>
        //         <div className='xs:hidden lg:flex flex-row overflow-hidden'>
        //             {icons.map((icon) => (
        //                 <a key={icon.text} href={icon.link} className="flex mr-3 p-2 items-center rounded-full tracking-widest border boder-white-400 shadow-lg shadow-sky-900 hover:shadow-indigo-500 xl:p-3 xl:px-4">
        //                     {icon.iconStyle} <span className='text-white ml-2'>{icon.text}</span>
        //                 </a>
        //             ))}
        //         </div>
        //         <div className='lg:hidden text-white'>
        //             <button onClick={popupMenu}>
        //                 <div className='container bg-slate-400 h-[8px] w-[8px] border border-white rounded-full'></div>
        //                 <div className='container bg-slate-400 h-[8px] w-[8px] border border-white rounded-full mt-1 mb-1'></div>
        //                 <div className='container bg-slate-400 h-[8px] w-[8px] border border-white rounded-full'></div>
        //             </button>
        //         </div>
        //     </div>
        //     <div className='hidden h-100% w-100% bg-slate-400/10 flex flex-col p-3 lg:hidden' id='menu'>
        //         {icons.map((icon) => (
        //             <a key={icon.text} href={icon.link} className="flex mr-3 p-6 items-center tracking-wider hover:text-green-400 xl:p-3 xl:px-4 justify-end text-white border-b-2 border-slate-300/20">
        //                 {icon.text} <span className='text-white ml-2'>{icon.iconStyle}</span>
        //             </a>
        //         ))}
        //     </div>
        // </div>
        <div className='relative mx-auto justify-between border-b border-gray-400 w-full bg-yellow-400 h-[850px]'>
            <NavBarTop />
            <NavBarMiddle />
            <div className="absolute mx-auto bottom-[-25px] h-[50px] w-full justify-center align-center items-center text-center">
                <div className='h-full w-2/4 mx-auto bg-white'>
                    <div className='grid grid-cols-4 border border-slate-900/10 h-full divide-x-[3px]'>
                        <div className='flex h-full w-full justify-center items-center mr-2 ml-2 hover:shadow-xl'>
                            <SearchIcon />
                            <input className='h-full w-full outline-none mr-2 ml-2' placeholder='Search'></input>
                        </div>
                        <div className='flex h-full w-full justify-center items-center hover:shadow-xl'>
                            <CalendarTodayIcon className='mr-3 ml-2' /> <span className='text-slate-400'>Dates</span>
                        </div>
                        <div className='flex h-full w-full justify-center items-center hover:shadow-xl'>
                            <PersonIcon className='mr-3 ml-2' /><span className='text-slate-400'>Guests</span>
                        </div>
                        <div className='flex h-full w-full justify-center items-center hover:shadow-xl'>
                            <SearchIcon />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header