// import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import Typed from 'react-typed';
import bg_home from '../assets/hero_bg.png'
import me from '../assets/mesmall.png'
import diamond from '../assets/diamond.png'

const Hero = () => {
  return (
    <div id="hero" className="h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${bg_home})`, }}>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
        <div className="col-span-1 md:mt-0 mt-10">
          <LazyLoad>
          <img src={me} alt="Me"  className="w-fit" />
          </LazyLoad>
        </div>

      <div className="flex items-center mx-6 md:mx-0 mt-4 md:mt-10">
      <div className="flex-shrink-0 md:mt-12">
        <img src={diamond} alt="" style={{ width: '12vw', height: 'auto' }} className="motion-safe:animate-pulse hover:motion-safe:animate-bounce w-fit object-scale-down" />
      </div>
      <div className="ml-4 md:mt-12">
      <div className="text-sky-200 text-[16px] font-medium md:text-[22px] md:px-2 px-1 mt-4">Hey! I’m</div>
      <div className="bg-gradient-to-b from-[#ffffff] to-[#3DDCFF] inline-block text-transparent bg-clip-text text-[28px] md:text-[50px] font-medium">Ansh Avi Khanna</div>
      <div>
      <Typed
          className='bg-gradient-to-b from-[#ffffff] to-[#3DDCFF] inline-block text-transparent bg-clip-text text-[20px] md:text-[30px] font-normal '
            strings={['Web Developer', 'App Developer', 'UI/UX Designer']}
            typeSpeed={75}
            backSpeed={100}
            loop
          />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Hero;
