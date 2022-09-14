import React, { useState } from 'react'
import { StyleContext } from '../../components/context/StyleContext'
import AccountLayout from '../../components/Layout/AccountLayout'
import Account from './Account';

function index() {

    return (
        <Account/>
    )
}

export default index

index.getLayout = function getLayout(page) {
    const setStyle = "bg-slate-900 hover:bg-slate-900 hover:text-white"
    return (
        <>
            <StyleContext.Provider value={{ setStyle }}>
                <AccountLayout>
                    {page}
                </AccountLayout>
            </StyleContext.Provider>
        </>
    )
}