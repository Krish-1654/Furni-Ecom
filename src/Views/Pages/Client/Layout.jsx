import React from 'react'
import Navbar from '../../Layouts/Header/Navbar'
import Footer from '../../Layouts/Footer/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <header className='sticky-top'>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout
