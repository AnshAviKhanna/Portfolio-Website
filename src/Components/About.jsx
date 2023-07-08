import React from 'react'
import LazyLoad from 'react-lazyload';
import bg_about from '../assets/aboutbg.png'
import pic from '../assets/picsmall.png'
import diamond from '../assets/diamond.png'
import {Button} from "@material-tailwind/react";
import {Link} from 'react-scroll' 

const About = () => {
  const handleButtonClick = () => {
    window.open('https://drive.google.com/file/d/1UsIewYKPpBNK4gf2X03HTFTw1w5YMiqT/view?usp=sharing', '_blank');
  };
  return (
    <div id="about" className="h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${bg_about})`, }}>
     
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

    <div className='md:ml-12 md:my-10 my-0 md:px-12 px-6'>
    <div className="flex items-center md:mb-10 mb-5 md:mt-0">
    <div className="flex-shrink-0">
      <LazyLoad>
      <img src={diamond} alt="" style={{ width: '10vw', height: 'auto' }} className="motion-safe:animate-pulse hover:motion-safe:animate-bounce w-fit object-scale-down" />
      </LazyLoad>
    </div>
    <div className="ml-4">
    <div className="bg-gradient-to-b from-[#ffffff] to-[#3DDCFF] inline-block text-transparent bg-clip-text text-[28px] md:text-[50px] font-medium">ABOUT ME</div>
    </div>
  </div>
    <div className='md:my-10 md:ml-6 md:mr-0 '><p className='md:mt-12 mt-8 md:mx-0 mx-2 text-[#BBF3FF] text-[14px] md:text-[22px] font-normal'>
    Hello there! I'm a computer science student at IIIT Bangalore. I love to design mobile and web apps and bring them to life. Lately, I've been immersing myself in the exciting realms of machine learning and AI. Beyond my tech interests, I've always been an avid sports enthusiast since my childhood days, constantly seeking new sports to master. And when it's time to unwind, you'll often find me tuning in to the soothing melodies of indie music.
    </p>
    </div>
    {/* <div className='md:px-16 px-5 md:mt-6 mt-8'> */}
    <div className='md:mt-6 mt-8 flex '>
        {/* <button className='p-6 border-2 text-[#BBF3FF] text-[20px] font-medium'>My Resume</button>
        <button className='p-6 border-2 text-[#BBF3FF] text-[20px] font-medium'>Let's Talk</button> */}
        <Button onClick={handleButtonClick} className="md:mx-4 md:ml-8 ml-2 md:py-1.5 py-0.5 md:px-4 px-2 border-2 border-[#82E9FF] text-[#DDF9FF] text-[14px] md:text-[20px] font-medium rounded-md md:hover:border-[#F37EFF] md:hover:bg-[#2A0E2D] bg-[#2e5979bb]">My Resume</Button>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
        <Button className="md:mx-4 md:ml-8 ml-4 md:py-1.5 py-0.5 md:px-7 px-4 border-2 border-[#82E9FF] text-[#DDF9FF] text-[14px] md:text-[20px] font-medium rounded-md md:hover:border-[#F37EFF] md:hover:bg-[#2A0E2D] bg-[#2e5979bb]">Let's Talk</Button>
        </Link>
    </div>
    </div>
  <div className="col-span-1 mt-0 ">
  <div className="flex-shrink-0 flex justify-center">
        <img src={pic} alt="Me" 
        // style={{ width: '75vw', height: 'auto' }} 
        className="w-fit" />
      </div>
  </div>
  </div> 

    </div>
  )
}

export default About
