import React from 'react'
import {  FaBell, FaHome, FaTools } from 'react-icons/fa'
import { RxAvatar } from 'react-icons/rx'
import { logo } from '../assets';


const Navbar = () => {
  return (
    <>
        <nav className='border-b border-neutral-300 bg-neutral-100 w-full mb-20 flex items-center justify-between py-3'>
            <div className='flex flex-shrink-0 items-center'>
                <img src={logo}  alt='logo' />
                {/* <p className='logo w-15'>Tanvi</p> */}
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
              <FaHome />
              <FaTools />
              <FaBell />
              <RxAvatar />
            </div>
        </nav>
    </>
  )
}

export default Navbar
