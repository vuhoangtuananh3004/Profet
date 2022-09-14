import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NavBarTop from '../Header/NavBarTop'
import React from 'react'

function Layout({ children }) {
    return (
            <div className=''>
                <div className='sticky top-0 left-0 w-full z-10'><NavBarTop /></div>
                <div>
                    {children}
                </div>

            </div>
    )
}

export default Layout