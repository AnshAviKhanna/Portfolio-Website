import React from 'react'
import LazyLoad from 'react-lazyload';
import { useState } from 'react';
import {Link} from 'react-scroll' 
import {useLocation } from 'react-router-dom';
import {GoHomeFill} from 'react-icons/go';
import {RiUser5Fill} from 'react-icons/ri';
import {FaLaptopCode,FaUserTie,FaCommentDots} from 'react-icons/fa';
import {BsFillRocketTakeoffFill} from 'react-icons/bs';
import {Button} from "@material-tailwind/react";

const Navbar = () => {
  return (
    <div className='flex justify-center items-center h-14 text-[18px] max-w-[screen] font-bold mx-auto px-4 text-white md:bg-gradient-to-r from-black via-[#1d0a1f] to-black'>
        <ul className='hidden lg:flex gap-5 '> 
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
            <Button className='p-4 text-[#BBF3FF] hover:text-[#FF81F2] tracking-widest'>HOME</Button>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={10} duration={500}>
            <Button className='p-4 text-[#BBF3FF] hover:text-[#FF81F2] tracking-widest'>ABOUT</Button>
          </Link>
          <Link to="skills" spy={true} smooth={true} offset={20} duration={500}>
            <Button className='p-4 text-[#BBF3FF] hover:text-[#FF81F2] tracking-widest'>SKILLS</Button>
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={10} duration={500}>
            <Button className='p-4 text-[#BBF3FF] hover:text-[#FF81F2] tracking-widest'>PROJECTS</Button>
          </Link>
          <Link to="experience" spy={true} smooth={true} offset={50} duration={500}>
            <Button className='p-4 text-[#BBF3FF] hover:text-[#FF81F2] tracking-widest'>EXPERIENCE</Button>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
            <Button className='p-4 text-[#BBF3FF] hover:text-[#FF81F2] tracking-widest'>CONTACT</Button>
          </Link>
        </ul>

        <ul className='hidden max-lg:flex'>
        <Link to="hero" spy={true} smooth={true} offset={1} duration={500}>
          <Button className='p-5 bg-black shadow-sm shadow-[#BBF3FF] border-2 rounded-full border-hidden border-[#BBF3FF]'><GoHomeFill size={16} color='#BBF3FF'/></Button>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={1} duration={500}>
          <Button className='p-5 bg-black shadow-sm shadow-[#BBF3FF] border-2 rounded-full border-hidden border-[#BBF3FF]'><RiUser5Fill size={16} color='#BBF3FF'/></Button>
        </Link>
        <Link to="skills" spy={true} smooth={true} offset={1} duration={500}>
          <Button className='p-5 bg-black shadow-sm shadow-[#BBF3FF] border-2 rounded-full border-hidden border-[#BBF3FF]'><BsFillRocketTakeoffFill size={16} color='#BBF3FF'/></Button>
        </Link>
        <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
          <Button className='p-5 bg-black shadow-sm shadow-[#BBF3FF] border-2 rounded-full border-hidden border-[#BBF3FF]'><FaLaptopCode size={16} color='#BBF3FF'/></Button>
        </Link>
        <Link to="experience" spy={true} smooth={true} offset={50} duration={500}>
          <Button className='p-5 bg-black shadow-sm shadow-[#BBF3FF] border-2 rounded-full border-hidden border-[#BBF3FF]'><FaUserTie size={16} color='#BBF3FF'/></Button>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}> 
          <Button className='p-5 bg-black shadow-sm shadow-[#BBF3FF] border-2 rounded-full border-hidden border-[#BBF3FF]'><FaCommentDots size={16} color='#BBF3FF'/></Button>
        </Link> 
        </ul>

      </div>
  )
}

export default Navbar
// hover : border-solid
// bg-gradient-to-b from-black to-[#59B1F0]