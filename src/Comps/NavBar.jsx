import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

import { Link, } from 'react-scroll'

const NavBar = () => {
const [nav,setNav] = useState(false)
const handleClick= () => setNav(!nav)
const handleClose = ()=> setNav(!nav)




  return (
    // Desktop menu
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Brand.</h1>
                <ul className='hidden md:flex'>
                    <li><Link to="home" smooth={true}  duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li><Link to="support" smooth={true} offset={-100} duration={500}>Support</Link></li>
                    <li><Link to="platforms" smooth={true} offset={-280} duration={500}>Platform</Link></li>
                    <li><Link to="pricing" smooth={true} offset={50} duration={500}>Pricing</Link></li>
                </ul>
            </div>

            {/* sign in& up btns */}
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-8'>Sign in</button>
                <button className='px-8 py-3'>Sign up</button>

            </div>

            {/* buttons hamburger & close */}
            <div className='md:hidden mr-8' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-6'/> : <XIcon className='w-6'/>}
            
            </div>
        </div>

        {/* drop down menu */}
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8  md:hidden'}>
                    <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true}  duration={500}>Home</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-100} duration={500}>Support</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="platforms" smooth={true} offset={-280} duration={500}>Platform</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={50} duration={500}>Pricing</Link></li>
            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-500 px-8 py-3 mb-4'>Sign Up</button>
                <button className='px-8 py-3'>Sign in</button>
            </div>
        </ul>

    </div>

   
  )
}

export default NavBar