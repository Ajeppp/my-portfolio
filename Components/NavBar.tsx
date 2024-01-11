import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props {
    openNav: () => void;
}

const NavBar = ({ openNav }: Props) => {
    return (
        <div className='bg-[#F8DDC9] w-[100%] top-0 h-[12vh] shadow-md'>
            <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
                <div className='flex items-center justify-between md:w-[30%] w-[100%] md:mx-0 mx-auto font-semibold'>
                    <div className='nav-link'>Home</div>
                    <div className='nav-link'>Project</div>
                    <div className='nav-link'>About</div>
                    <div className='nav-link'>Resume</div>
                </div>
                <div onClick={openNav}>
                    <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-red-400' />
                </div>
                <h1 className='cursor-pointer text-[20px] font-semibold md:block hidden'>
                    jefersetiawan04@gmail.com
                </h1>
            </div>
        </div >
    )
}

export default NavBar