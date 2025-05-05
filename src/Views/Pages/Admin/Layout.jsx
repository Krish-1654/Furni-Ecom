import React from 'react'
import AdminNavBar from '../../Layouts/Header/AdminNavBar'

const Layout = ({children}) => {
    return (
        <>
            <header>
                <AdminNavBar />
            </header>
            <main>
                {children}
            </main>
            <footer></footer>
        </>
    )
}

export default Layout