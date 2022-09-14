import React from 'react'
import { StyleContext } from '../../../components/context/StyleContext'
import AccountLayout from '../../../components/Layout/AccountLayout'

function index() {
    return (
        <div>
        </div>
    )
}

export default index

index.getLayout = function getLayout(page) {
    const setStyle = "bg-white"
    return (
        <>
            <AccountLayout>
                {page}
            </AccountLayout>
        </>
    )
}