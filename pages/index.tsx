import Hero from '@/Components/Hero'
import MobileNav from '@/Components/MobileNav'
import NavBar from '@/Components/NavBar'
import React from 'react'

const HomePage = () => {

    const [nav, setNav] = React.useState(false)
    const openNav = () => setNav(true)
    const closeNav = () => setNav(false)

    return (
        <div className='overflow-x-hidden'>
            <div>
                {/* Navbar Section */}
                <MobileNav nav={nav} closeNav={closeNav} />
                <NavBar openNav={openNav} />
                {/* Hero Section */}
                <Hero />
            </div>
        </div>
    )
}

export default HomePage