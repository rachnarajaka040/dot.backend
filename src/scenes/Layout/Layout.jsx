import React from 'react'
import Sidebar from '../global/Sidebar'
const Layout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout