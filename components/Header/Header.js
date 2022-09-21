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
import NavBarBottom from './NavBarBottom';
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
        <div className='relative mx-auto justify-between border-b border-gray-400 w-full h-[850px]'>
            <NavBarMiddle />
            <div className="absolute mx-auto sm:bottom-[-50px]  md:bottom-[-25px] w-full">
                <NavBarBottom />
            </div>
        </div>
    )
}

export default Header