import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    setLogo(!logo)
  }
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
           <a href='/'><h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BEACHES.</h1></a>
        </div>
        <ul className='hidden md:flex'>
<a href='/'><li>Home</li></a>
<a href='/'><li>Destinations</li></a>
<a href='/'><li>Travel</li></a>
<a href='/'><li>Views</li></a>
<a href='/'><li>Book</li></a>
        </ul>
        <div className='hidden md:flex'>
            <BiSearch size={20} className='mr-4' />
            <BsPerson size={20} />
        </div>

        {/* The Mobile menu Section */}
<div onClick={handleNav} className='md:hidden z-10'>
 {nav ? <AiOutlineClose className='text-black' size={20}/> :  <HiOutlineMenuAlt4 size={20} />}
  
  <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
  <ul>
    <h1>BEACHES.</h1>
<a href='/'><li className='border-b'>Home</li></a>
<a href='/'><li className='border-b'>Destinations</li></a>
<a href='/'><li className='border-b'>Travel</li></a>
<a href='/'><li className='border-b'>Views</li></a>
<a href='/'><li className='border-b'>Book</li></a>
<div className='flex flex-col'>
  <button className='my-6'>Search</button>
  <button>Account</button>
</div>
<div className='flex justify-between my-6'>
  <FaFacebook className='icon'/>
  <FaTwitter className='icon'/>
  <FaPinterest className='icon'/>
  <FaInstagram className='icon'/>
  <FaYoutube className='icon'/>
</div>
        </ul>
  </div>
</div>


    </div>
  )
}

export default Navbar