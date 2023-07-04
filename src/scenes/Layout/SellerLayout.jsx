import React from 'react'
import SellerSidebar from '../seller-dashboard/SellerSidebar'
const SellerLayout = ({ children }) => {
    return (
        <>
            <SellerSidebar/>
            <main>
                {children}
            </main>
        </>
    )
}

export default SellerLayout