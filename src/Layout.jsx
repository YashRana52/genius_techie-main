import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function Layout() {
    return (
        <>
            {/* Smooth schroll k liye scrollltop add kiya */}
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
