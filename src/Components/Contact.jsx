import React from 'react'
import LazyLoad from 'react-lazyload';
import bgcontact from '../assets/bgcontact.png'
import diamond from '../assets/diamond.png'
import {Button} from "@material-tailwind/react";
import {TbMail} from 'react-icons/tb'
import {FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa'
import {BsArrowUpCircle} from 'react-icons/bs'
import {Link} from 'react-scroll' 

const Contact = () => {
  return (
    <React.Fragment>
    <div id="contact" className="h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${bgcontact})`, }}>
     
     <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

<div className='md:ml-12 md:my-10 my-0 md:px-12 px-6'>
<div className="flex items-center md:mb-10 mb-5 md:mt-0">
<div className="flex-shrink-0 md:mt-36 mt-56">
  <img src={diamond} alt="" style={{ width: '10vw', height: 'auto' }} className="motion-safe:animate-pulse hover:motion-safe:animate-bounce w-fit object-scale-down" />
</div>
<div className="ml-4 md:mt-36 mt-56">
<div className="bg-gradient-to-b from-[#ffffff] to-[#3DDCFF] inline-block text-transparent bg-clip-text text-[28px] md:text-[50px] font-medium">CONTACT</div>
</div>
</div>
<div className='md:mt-2 md:ml-6 md:mr-0 '><p className='md:mt-0 mt-8 md:mx-0 mx-2 text-[#BBF3FF] text-[14px] md:text-[18px] font-normal'>
Have a project idea ? Lets get in touch and brew something new.
</p>
</div>
<div className='md:my-2 md:ml-6 md:mr-0 '><p className='md:mt-0 mt-2 md:mx-0 mx-2 text-[#BBF3FF] text-[14px] md:text-[18px] font-normal'>
Keenly interested in internships related to machine learning and data science. Comfortable working remotely and on-site in Bangalore.
</p>
</div>
{/* <div className='md:px-16 px-5 md:mt-6 mt-8'> */}
{/* <div className='md:mt-6 mt-4 flex '>
    <Button className="md:mx-4 md:ml-6 ml-2 md:py-1 py-0.5 md:px-4 px-2 border border-[#82E9FF] text-[#DDF9FF] text-[14px] md:text-[20px] font-medium rounded-full hover:border-[#F37EFF] hover:bg-[#2A0E2D] bg-[#2e5979bb]">Educational Background</Button>
</div> */}
<div className='md:block hidden md:mt-8 mt-8 flex '>
    {/* <button className='p-6 border-2 text-[#BBF3FF] text-[20px] font-medium'>My Resume</button>
    <button className='p-6 border-2 text-[#BBF3FF] text-[20px] font-medium'>Let's Talk</button> */}
    <Button onClick={() => window.location = 'mailto:anshavikhanna@gmail.com.com'}
    className="md:mx-4 md:ml-6 ml-2 md:px-2 md:py-2 border-2 border-[#82E9FF] rounded-full hover:border-[#F37EFF] hover:bg-[#2A0E2D] bg-[#2e5979bb]"><TbMail size={40} color='#DDF9FF'/></Button>
    <Button onClick={()=>{window.open('https://www.linkedin.com/in/ansh-avi-khanna-4a9a3421b/', '_blank');}}
    className="md:mx-4 md:ml-8 ml-4 md:px-2 md:py-2 border-2 border-[#82E9FF] rounded-full hover:border-[#F37EFF] hover:bg-[#2A0E2D] bg-[#2e5979bb]"><FaLinkedinIn size={40} color='#DDF9FF'/></Button>
    <Button onClick={()=>{window.open('https://www.instagram.com/anshavikhanna/', '_blank');}}
    className="md:mx-4 md:ml-8 ml-4 md:px-2 md:py-2 border-2 border-[#82E9FF] rounded-full hover:border-[#F37EFF] hover:bg-[#2A0E2D] bg-[#2e5979bb]"><FaInstagram size={40} color='#DDF9FF'/></Button>
    <Button onClick={()=>{window.open('https://github.com/AnshAviKhanna/', '_blank');}}
    className="md:mx-4 md:ml-8 ml-4 md:px-2 md:py-2 border-2 border-[#82E9FF] rounded-full hover:border-[#F37EFF] hover:bg-[#2A0E2D] bg-[#2e5979bb]"><FaGithub size={40} color='#DDF9FF'/></Button>
</div>
    <div className='md:hidden block md:mt-8 mt-8 flex '>
    {/* <button className='p-6 border-2 text-[#BBF3FF] text-[20px] font-medium'>My Resume</button>
    <button className='p-6 border-2 text-[#BBF3FF] text-[20px] font-medium'>Let's Talk</button> */}
    <Button onClick={() => window.location = 'mailto:anshavikhanna@gmail.com.com'}
    className="md:mx-4 md:ml-6 ml-2 px-2 py-2 border-2 border-[#82E9FF] rounded-full bg-[#2e5979bb]"><TbMail size={30} color='#DDF9FF'/></Button>
    <Button onClick={()=>{window.open('https://www.linkedin.com/in/ansh-avi-khanna-4a9a3421b/', '_blank');}}
    className="md:mx-4 md:ml-8 ml-4 px-2 py-2 border-2 border-[#82E9FF] rounded-full bg-[#2e5979bb]"><FaLinkedinIn size={30} color='#DDF9FF'/></Button>
    <Button onClick={()=>{window.open('https://www.instagram.com/anshavikhanna/', '_blank');}}
    className="md:mx-4 md:ml-8 ml-4 px-2 py-2 border-2 border-[#82E9FF] rounded-full bg-[#2e5979bb]"><FaInstagram size={30} color='#DDF9FF'/></Button>
    <Button onClick={()=>{window.open('https://github.com/AnshAviKhanna/', '_blank');}}
    className="md:mx-4 md:ml-8 ml-4 px-2 py-2 border-2 border-[#82E9FF] rounded-full bg-[#2e5979bb]"><FaGithub size={30} color='#DDF9FF'/></Button>
</div>
</div>
    </div>
    <div className='md:mt-4 mt-16 flex justify-center items-center'>
    <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
    <Button className="md:mx-4 md:ml-8 ml-4 md:px-2 md:py-2 rounded-full"><BsArrowUpCircle size={40} color='#82E9FF'/></Button>
    </Link>
    </div>
    </div>
    </React.Fragment>
  )
}

export default Contact
