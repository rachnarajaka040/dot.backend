import React from 'react'
import DeliverySidebar from '../delivery-dashboard/DeliverySidebar'
const DeliveryLayout = ({ children }) => {
    return (
        <>
            <DeliverySidebar/>
            <main>
                {children}
            </main>
        </>
    )
}

export default DeliveryLayout 