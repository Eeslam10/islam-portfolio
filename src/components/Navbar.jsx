import React from 'react'
// import logo from '../assets/islam.jpg'
import  { FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-4'>
        <div className='flex flex-shrink-0 items-center'>
          <h2 className='text-4xl text-white'>Is</h2>  
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaSquareXTwitter />
        </div>
    </nav>
  )
}

export default Navbar