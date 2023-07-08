import React from 'react'
import LazyLoad from 'react-lazyload';
import bgexp from '../assets/bgexp.png'
import diamond from '../assets/diamond.png'
import logo from '../assets/logo.svg'
import shrota from '../assets/shrota.svg'
import syn from '../assets/syn.svg'
import tedx from '../assets/tedx.svg'
import inf from '../assets/inf.svg'
import {Button} from "@material-tailwind/react";

const Experience = () => {
  return (
    <div id="experience" className="h-screen bg-cover bg-center "
    style={{ backgroundImage: `url(${bgexp})`, }}>
     
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:mb-0">

    <div className='md:ml-6 md:my-10 my-0 md:px-12 px-6'>
    <div className="flex items-center md:mb-10 mb-5 md:mt-0">
    <div className="flex-shrink-0 md:mt-0 mt-20">
      <img src={diamond} alt="" style={{ width: '8vw', height: 'auto' }} className="motion-safe:animate-pulse hover:motion-safe:animate-bounce w-fit object-scale-down" />
    </div>
    <div className="md:ml-0 ml-4 md:mt-0 mt-20">
    <div className="bg-gradient-to-b from-[#ffffff] to-[#3DDCFF] inline-block text-transparent bg-clip-text text-[28px] md:text-[40px] font-medium">WORK EXPERIENCE</div>
    </div>
  </div>
  <ol class="relative border-l border-gray-200">                  
    <li class="md:mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-2 ring-[#cf6adb]">
            {/* <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg> */}
            <img src={logo}></img>
        </span>
        <h3 class="flex items-center mb-1 text-xl md:font-semibold font-medium text-[#82E9FF]">Full Stack Web Dev Intern</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-[#92e9fde0]">E-Health Reasearch Centre, IIITB</time>
        <time class="block mb-2 text-sm font-normal leading-none text-[#92e9fde0]">June 2023 - Present</time>
        <div className='block mb-2'><span class="mr-1 text-sm font-medium px-2.5 py-0 rounded-xl bg-transparent border border-[#82e8ffcd] text-[#BBF3FF]">React</span><span class="mr-1 text-sm font-medium px-2.5 py-0 rounded-xl bg-transparent border border-[#82e8ffcd] text-[#BBF3FF]">Spring Boot</span><span class="mr-1 text-sm font-medium px-2.5 py-0 rounded-xl bg-transparent border border-[#82e8ffcd] text-[#BBF3FF]">MySQL</span></div>
        <p class="mb-4 md:text-[16px] text-[14px] font-normal text-[#BBF3FF]">Worked on a software used in NIMHANS labs. Redesigned the database. Shifted the frontend code from Angular to React.</p>
        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a> */}
    </li>
    <li class="md:mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-2 ring-[#cf6adb]">
            {/* <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg> */}
            <img src={shrota}></img>
        </span>
        <h3 class="flex items-center mb-1 text-xl md:font-semibold font-medium text-[#82E9FF]">UI/UX Design Intern</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-[#92e9fde0]">Shrota House, Bangalore</time>
        <time class="block mb-2 text-sm font-normal leading-none text-[#92e9fde0]">May 2023 - Present</time>
        <div className='block mb-2'><span class="mr-1 text-sm font-medium px-2.5 py-0 rounded-xl bg-transparent border border-[#82e8ffcd] text-[#BBF3FF]">Figma</span></div>
        <p class="mb-4 font-normal md:text-[16px] text-[14px] text-[#BBF3FF]">Developed interactive quiz games on Indian classical music for kids, utilizing Figma for design and animation creation. Collaborated with the development team to successfully deploy the app.</p>
        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a> */}
    </li>
</ol>
    </div>
    <div className='md:my-10 my-0 md:px-12 px-6'>
    <div className="flex items-center md:mb-10 mb-5 md:mt-0">
    <div className="flex-shrink-0">
      <img src={diamond} alt="" style={{ width: '8vw', height: 'auto' }} className="motion-safe:animate-pulse hover:motion-safe:animate-bounce w-fit object-scale-down" />
    </div>
    <div className="md:ml-0 ml-4">
    <div className="bg-gradient-to-b from-[#ffffff] to-[#3DDCFF] inline-block text-transparent bg-clip-text text-[28px] md:text-[40px] font-medium">EXTRACURRICULARS</div>
    </div>
  </div>
  <ol class="relative border-l border-gray-200 md:mb-0 mb-40">     
  <li class="md:mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-2 ring-[#cf6adb]">
            {/* <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg> */}
            <img src={syn}></img>
        </span>
        <h3 class="flex items-center mb-1 text-xl md:font-semibold font-medium text-[#82E9FF]">Organizing Committee [Core Member]</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-[#92e9fde0]">Synergy [Annual Technical Fest of IIITB]</time>
        <time class="block mb-2 text-sm font-normal leading-none text-[#92e9fde0]">Oct 2022 - Present </time>
        <p class="md:block hidden mb-4 font-normal md:text-[16px] text-[14px] text-[#BBF3FF]">Engaged with the sponsorship, marketing, content, and design teams to strategize numerous events. Worked closely with technical and cultural clubs to coordinate and arrange a series of events and captivating performances.</p>
        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a> */}
    </li>             
    <li class="md:mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-2 ring-[#cf6adb]">
            {/* <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg> */}
            <img src={tedx}></img>
        </span>
        <h3 class="flex items-center mb-1 text-xl md:font-semibold font-medium text-[#82E9FF]">Core Member [Design Team]</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-[#92e9fde0]">TedX IIIT Bangalore</time>
        <time class="block mb-2 text-sm font-normal leading-none text-[#92e9fde0]">Jan 2023 - Present</time>
        <p class="md:block hidden mb-4 md:text-[16px] text-[14px] font-normal text-[#BBF3FF]">Played a vital role in the thoughtful planning and efficient coordination of the event. Designed instagram posts, posts, banners for the event.</p>
        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a> */}
    </li>
    <li class="mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-2 ring-[#cf6adb]">
            {/* <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg> */}
            <img src={inf}></img>
        </span>
        <h3 class="flex items-center mb-1 text-xl md:font-semibold font-medium text-[#82E9FF]">Design Lead</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-[#92e9fde0]">Infin8 [Annual Cultural Fest of IIITB]</time>
        <time class="block mb-2 text-sm font-normal leading-none text-[#92e9fde0]">Dec 2022 - Feb 2023 </time>
        <p class="md:block hidden mb-4 md:text-[16px] text-[14px] font-normal text-[#BBF3FF]">Led a team of 10 designers. Designed merchandise, brochure, posters, banners, standees and certificates for multiple events conducted under Infin8 2023.</p>
        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a> */}
    </li>
</ol>
    </div>
  </div> 
  

    </div>
  
  )
}

export default Experience
