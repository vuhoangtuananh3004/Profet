import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';

function Header() {
    const icons = [
        {
            iconStyle: <LanguageSharpIcon style={{color:'white'}} />,
            text: 'English',
            link: '#'
        },
        {
            iconStyle: <HomeOutlinedIcon style={{color:'white'}}/>,
            text: 'List your property',
            link: '#'
        },
        {
            iconStyle: <HelpOutlineOutlinedIcon style={{color:'white'}} />,
            text: 'Support',
            link: '#'
        },
        {
            iconStyle: <TravelExploreOutlinedIcon style={{color:'white'}} />,
            text: 'Explore',
            link: '#'
        },
        {
            iconStyle: <AccountCircleOutlinedIcon style={{color:'white'}} />,
            text: 'Sign in',
            link: '#'
        },
    ]


    return (
        <div className="flex flex-row justify-between items-center p-5 shadow-lg shadow-slate-800 mb-10 bg-slate-900/90 sticky top-0 z-40">
            <a href="#">
               <div className='flex justify-center items-center'>
                    <CottageOutlinedIcon style={{color:'white'}} fontSize="large"/>
                    <div className='border border-white-900 ml-2 mr-2 h-10'></div>
                    <span className='font-Sacramento text-3xl text-white tracking-wider font-bold'>Like Home</span>
               </div>
            </a>
            <div className='flex flex-row'>
                {icons.map((icon) => (
                    <a key={icon.text} href={icon.link} className="flex mr-5 p-2 px-5 items-center rounded-full tracking-widest border boder-white-400 shadow-lg shadow-sky-900 hover:shadow-indigo-500">
                        {icon.iconStyle} <span className='text-white ml-5'>{icon.text}</span>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Header