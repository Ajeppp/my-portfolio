import React from 'react'

const NavBar = () => {
    return (
        <div className='w-[100%] top-0 h-[12vh] shadow-md'>
            <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
                <div className='flex items-center justify-between w-[30%] font-semibold'>
                    <div className='nav-link'>Home</div>
                    <div className='nav-link'>Project</div>
                    <div className='nav-link'>About</div>
                    <div className='nav-link'>Resume</div>
                </div>
                <h1 className='cursor-pointer text-[20px] font-semibold'>
                    jefersetiawan04@gmail.com
                </h1>
            </div>
        </div >
    )
}

export default NavBar