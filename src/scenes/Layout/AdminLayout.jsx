import React from 'react'
import Sidebar from '../global/Sidebar'
const AdminLayout = ({ children }) => {
    return (
        <>
            <Sidebar />
            
            {children}
        </>
    )
}

export default AdminLayout