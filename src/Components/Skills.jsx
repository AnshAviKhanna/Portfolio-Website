import React from 'react'
import bg_skills from '../assets/bgskills.png'
import diamond from '../assets/diamond.png'
import skills from '../assets/skills.png'

const Skills = () => {
  return (
    <div id="skills" className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bg_skills})`, }}>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className='md:ml-12 md:my-16 my-2 md:px-12 px-6'>
            <div className="flex items-center md:mb-10 mb-5 md:mt-0">
            <div className="flex-shrink-0">
                <img src={diamond} alt="" style={{ width: '10vw', height: 'auto' }} className="motion-safe:animate-pulse hover:motion-safe:animate-bounce w-fit object-scale-down" />
            </div>
            <div className="ml-4">
                <div className="bg-gradient-to-b from-[#ffffff] to-[#3DDCFF] inline-block text-transparent bg-clip-text text-[28px] md:text-[50px] font-medium">SKILLS</div>
            </div>
            </div>
            <div className='md:ml-10 ml-3 md:mt-12'>
                <div><p className='bg-gradient-to-b from-[#ffffff] to-[#3DDCFF] inline-block text-transparent bg-clip-text text-[16px] md:text-[30px] font-medium'>Web Development</p></div>
                <div><p className='mt-1.5 bg-gradient-to-b from-[#ffffff] to-[#3DDCFF] inline-block text-transparent bg-clip-text text-[12px] md:text-[18px] font-normal tracking-wider'>Frontend : Javascript | React | Tailwind CSS</p></div>
                <div><p className='bg-gradient-to-b from-[#ffffff] to-[#3DDCFF] inline-block text-transparent bg-clip-text text-[12px] md:text-[18px] font-normal tracking-wider'>Backend : Java | Spring boot | MySQL</p></div>
            </div>
            <div className='mt-8 md:ml-10 ml-3'>
                <div><p className='bg-gradient-to-b from-[#ffffff] to-[#3DDCFF] inline-block text-transparent bg-clip-text text-[16px] md:text-[30px] font-medium'>App Development</p></div>
                <div><p className='mt-1.5 bg-gradient-to-b from-[#ffffff] to-[#3DDCFF] inline-block text-transparent bg-clip-text text-[12px] md:text-[18px] font-normal tracking-wider'>Frontend : Dart | Flutter</p></div>
                <div><p className='bg-gradient-to-b from-[#ffffff] to-[#3DDCFF] inline-block text-transparent bg-clip-text text-[12px] md:text-[18px] font-normal tracking-wider'>Backend : Dart | Firebase</p></div>
            </div>
            <div className='mt-8 md:ml-10 ml-3'>
                <div><p className='bg-gradient-to-b from-[#ffffff] to-[#3DDCFF] inline-block text-transparent bg-clip-text text-[16px] md:text-[30px] font-medium'>UI/UX Design</p></div>
                <div><p className='mt-1.5 bg-gradient-to-b from-[#ffffff] to-[#3DDCFF] inline-block text-transparent bg-clip-text text-[12px] md:text-[18px] font-normal tracking-wider'>Figma : UI | UX | Wireframing | Prototyping</p></div>
            </div>
            </div>
            <div className="col-span-1 md:m-16 m-8">
                <img src={skills} alt="Me" />
        </div>
    </div> 

{/* Mockup
<div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
    <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
        <img src={skills} className="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt="" style={{ width: '10vw', height: 'auto' }}/>
        <img src={skills} className="hidden dark:block w-fit rounded-lg" alt="" style={{ width: '15vw', height: 'auto' }}/>
    </div>
</div>
<div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
</div> 
*/}

    </div>
  )
}

export default Skills
