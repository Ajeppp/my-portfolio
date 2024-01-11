import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'
import { FaGithubSquare, FaWhatsappSquare } from 'react-icons/fa';
import { IoLogoLinkedin } from "react-icons/io";
import { RiInstagramFill } from 'react-icons/ri';


interface Props {
    openNav: () => void;
}

const NavBar = ({ openNav }: Props) => {
    return (
        <div className='bg-[#F8DDC9] w-[100%] top-0 h-[12vh] shadow-md'>
            <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
                <div className='md:hidden flex items-center justify-between md:w-[35%] w-[100vh] md:mx-0 mx-auto font-semibold'>
                    <div className='h-[2rem] cursor-pointer text-black'>
                        <a href="https://www.linkedin.com/in/jefer-setiawan-9453b0236/"><IoLogoLinkedin className='text-[35px]' /></a>
                    </div>
                    <div className='h-[2rem] cursor-pointer text-black'>
                        <a href="https://www.instagram.com/jefersetiawann/"><RiInstagramFill className='text-[34px]' /></a>
                    </div>
                    <div className='h-[2rem] cursor-pointer text-black'>
                        <a href="https://github.com/Ajeppp"><FaGithubSquare className='text-[33px]' /></a>
                    </div>
                    <div className='h-[2rem] cursor-pointer text-black'>
                        <a href="https://wa.me/+6281257643560"><FaWhatsappSquare className='text-[33px]' /></a>
                    </div>
                </div>
                <div className='flex items-center justify-between md:w-[35%] w-[100%] md:mx-0 mx-auto font-semibold'>
                    <div className='nav-link pointer-events-none'>Project</div>
                    <a href="./CV_Jefer_Setiawan.pdf" target='_blank'>
                        <div className='nav-link'>Resume</div>
                    </a>
                    <div className='nav-link'>
                        <a href="https://www.linkedin.com/in/jefer-setiawan-9453b0236/"><IoLogoLinkedin className='text-[35px]' /></a>
                    </div>
                    <div className='nav-link'>
                        <a href="https://www.instagram.com/jefersetiawann/"><RiInstagramFill className='text-[34px]' /></a>
                    </div>
                    <div className='nav-link'>
                        <a href="https://github.com/Ajeppp"><FaGithubSquare className='text-[33px]' /></a>
                    </div>
                    <div className='nav-link'>
                        <a href="https://wa.me/+6281257643560"><FaWhatsappSquare className='text-[33px]' /></a>
                    </div>
                </div>
                <div onClick={openNav}>
                    <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-black' />
                </div>
                <h1 className='cursor-pointer text-[20px] font-semibold md:block hidden'>
                    jefersetiawan04@gmail.com
                </h1>
            </div>
        </div >
    )
}

export default NavBar