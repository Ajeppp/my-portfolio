import React from 'react'
import Particle from "./Particle"
import SkillText from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'

const Hero = () => {
    return (
        <div className="h-[88vh] bg-[#F8DDC9]">
            <Particle />
            <div className='sticky z-[9000] w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
                <div>
                    <h1 className='text-[35px] md:text-[48px] font-bold'>
                        HI, I'M <span className='text-[#EA5C25]'>JEFER SETIAWAN!</span>
                    </h1>
                    <SkillText />
                    <p className='mt-[1.5rem] text-[15px] text-[FBF9F1] font-semibold'>
                        Welcome to my corner of the web! I'm a passionate web developer and
                        full-stack developer based in Tangerang. Currently, I'm pursuing my
                        degree in Computer Science at Universitas Multimedia Nusantara. Whether
                        you're here to check out my portfolio, learn more about my skills, or
                        connect with a fellow tech enthusiast, you've come to the right place.
                    </p>
                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <a href="./CV_Jefer_Setiawan.pdf" target='_blank'>
                            <button className='px-[2rem] gap-[0.5rem] hover:bg-[#EA5C25] transition-all duration-200 py-[1rem] 
                                text-[18px] font-bold uppercase bg-[#0C9ADD] text-black flex items-center spcae-x-2'>
                                <p>Download CV</p>
                                <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                            </button>
                        </a>
                    </div>
                </div>
                <div className='w-[400px] bg-[#EA5C25] mx-auto hidden relative lg:flex items-center rounded-full h-[400px]'>
                    <Image src="/images/user2.png" alt="user" layout="fill" className="object-cover rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default Hero
