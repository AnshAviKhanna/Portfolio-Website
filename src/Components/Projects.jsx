import React from 'react'
import LazyLoad from 'react-lazyload';
import bg_projects from '../assets/bgprojects.png'
import diamond from '../assets/diamond.png'
import lp from '../assets/lp.png'
import dd from '../assets/dd.png'
import tb from '../assets/tb.png'
import sc from '../assets/sc.png'
import zing from '../assets/zing.png'
import des from '../assets/des.png'
import {Card,CardHeader,CardBody,CardFooter,Typography,Button} from "@material-tailwind/react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
    const settings = {
        // className: "center",
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        // autoplaySpeed:3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        cssEase: "linear",
        appendDots: dots => (
          <div className='flex justify center items-center bg-transparent'>
            <ul className='bg-transparent'>{dots}</ul>
          </div>
        ),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              autoplaySpeed:4000,
              // centerMode: true,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              autoplaySpeed:3000,
              // centerMode: true
              // initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              // centerMode: true,
              autoplaySpeed:3000,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div id="projects" className="h-screen bg-cover bg-center px-14"
    style={{ backgroundImage: `url(${bg_projects})`, }}>
      <div className='md:my-0 my-20'></div>
    <div className="flex items-center md:mb-5 mb-10">
        <div className="flex-shrink-0 md:mt-0 mt-16">
            <img src={diamond} alt="" style={{ width: '10vw', height: 'auto' }} className="motion-safe:animate-pulse hover:motion-safe:animate-bounce w-fit object-scale-down" />
        </div>
        <div className="ml-4 md:mt-0 mt-16 ">
            <div className="bg-gradient-to-b from-[#ffffff] to-[#3DDCFF] inline-block text-transparent bg-clip-text text-[28px] md:text-[50px] font-medium">PROJECTS</div>
        </div>
    </div>
    <Slider {...settings}>

<div className="max-w-sm border-[#82E9FF] rounded-2xl shadow">
        <img className="rounded-t-lg" src={lp} alt="" />
    <div className="p-5">
        <Typography className="mb-2 text-[#82E9FF] md:text-[22px] text-[20px] font-medium">
          Laptop Price Predictor
        </Typography>
        <Typography className="mb-1 text-[#BBF3FF] md:text-[15px] text-[13px] font-normal">
          Domain : Data Analysis | Machine Learning
        </Typography>
        <Typography className="mb-1 text-[#BBF3FF] md:text-[15px] text-[13px] font-normal">
          Technologies : Python | Jupyter | Scikit Learn
        </Typography>
          <Typography className="mb-3 text-[#BBF3FF] md:text-[15px] text-[13px] font-normal">Overview : Performed Exploratory Data Analysis on a Laptops dataset.<br></br> Used Linear Regression model to train the data and predict Laptop price on the basis of its specifications.</Typography>
        <Button onClick={()=>{window.open('https://github.com/AnshAviKhanna/Laptop-Price-Predictor', '_blank');}}
        className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-[#DDF9FF] bg-[#2e5979bb] md:hover:bg-[#2A0E2D] border-2 md:hover:border-[#F37EFF] border-[#82E9FF] rounded-lg">
            Github
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Button>
    </div>
</div>

<div className="max-w-sm border-[#82E9FF] rounded-2xl shadow">
        <img className="rounded-t-lg" src={tb} alt="" />
    <div className="p-5">
        <Typography className="mb-2 text-[#82E9FF] md:text-[22px] text-[20px] font-medium">
          Travel Bot
        </Typography>
        <Typography className="mb-1 text-[#BBF3FF] md:text-[15px] text-[13px] font-normal">
          Domain : Automation | Bot Development 
        </Typography>
        <Typography className="mb-1 text-[#BBF3FF] md:text-[15px] text-[13px] font-normal">
          Technologies : Python | Discord API
        </Typography>
          <Typography className="mb-3 text-[#BBF3FF] md:text-[15px] text-[13px] font-normal">Overview : An all in one travel guide Discord bot in Python.<br></br> Bot features include Weather Forecast, Currency Exchange Calculator, Maps, Covid-19 Satistics</Typography>
        <Button onClick={()=>{window.open('https://github.com/AnshAviKhanna/Travel-Guide-Hack_Nite_22-', '_blank');}}
        className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-[#DDF9FF] bg-[#2e5979bb] md:hover:bg-[#2A0E2D] border-2 md:hover:border-[#F37EFF] border-[#82E9FF] rounded-lg">
            Github
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Button>
    </div>
</div>

<div className="max-w-sm border-[#82E9FF] rounded-2xl shadow">
        <img className="rounded-t-lg" src={dd} alt="" />
    <div className="p-5">
        <Typography className="mb-2 text-[#82E9FF] md:text-[22px] text-[20px] font-medium">
          Drowsiness Detector
        </Typography>
        <Typography className="mb-1 text-[#BBF3FF] md:text-[15px] text-[13px] font-normal">
          Domain : Machine Learning | Computer Vision 
        </Typography>
        <Typography className="mb-1 text-[#BBF3FF] md:text-[15px] text-[13px] font-normal">
          Technologies : Python | OpenCV | Dlib
        </Typography>
          <Typography className="mb-3 text-[#BBF3FF] md:text-[15px] text-[13px] font-normal">Overview : Takes real time video input to detect state of driver’s face and alarms if the driver is drowsy/sleepy.<br></br> Used OpenCV and dlib for face detection and mapping eye movement.</Typography>
        <Button onClick={()=>{window.open('https://github.com/AnshAviKhanna/Drowsiness-Detector', '_blank');}}
        className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-[#DDF9FF] bg-[#2e5979bb] md:hover:bg-[#2A0E2D] border-2 md:hover:border-[#F37EFF] border-[#82E9FF] rounded-lg">
            Github
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Button>
    </div>
</div>

<div className="max-w-sm border-[#82E9FF] rounded-2xl shadow">
        <img className="rounded-t-lg" src={sc} alt="" />
    <div className="p-5">
        <Typography className="mb-2 text-[#82E9FF] md:text-[22px] text-[20px] font-medium">
          Swift Cart
        </Typography>
        <Typography className="mb-1 text-[#BBF3FF] md:text-[15px] text-[13px] font-normal">
          Domain : Software Development 
        </Typography>
        <Typography className="mb-1 text-[#BBF3FF] md:text-[15px] text-[13px] font-normal">
          Technologies : Java | C++
        </Typography>
          <Typography className="mb-3 text-[#BBF3FF] md:text-[15px] text-[13px] font-normal">Overview : A command-line driven E-Commerce platform implemented using Object Oriented programming.<br></br> Implemented the Seller end in Java and Consumer end in C++ and integrated it.</Typography>
        <Button onClick={()=>{window.open('https://github.com/AnshAviKhanna/SwiftCart', '_blank');}}
        className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-[#DDF9FF] bg-[#2e5979bb] md:hover:bg-[#2A0E2D] border-2 md:hover:border-[#F37EFF] border-[#82E9FF] rounded-lg">
            Github
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Button>
    </div>
</div>

<div className="max-w-sm border-[#82E9FF] rounded-2xl shadow">
        <img className="rounded-t-lg" src={zing} alt="" />
    <div className="p-5">
        <Typography className="mb-2 text-[#82E9FF] md:text-[22px] text-[20px] font-medium">
          Zing (3rd Prize @ Proto UI)
        </Typography>
        <Typography className="mb-1 text-[#BBF3FF] md:text-[15px] text-[13px] font-normal">
          Domain : Web App UI
        </Typography>
        <Typography className="mb-1 text-[#BBF3FF] md:text-[15px] text-[13px] font-normal">
          Technologies : Figma
        </Typography>
          <Typography className="mb-3 text-[#BBF3FF] md:text-[15px] text-[13px] font-normal">Overview : Won 3rd prize in the Pan-India UI/UX Design competition conducted by IIT Patna. Designed a cloud gaming website.<br></br>  </Typography>
          <div>
          <Button onClick={()=>{window.open('https://drive.google.com/file/d/1aim7AbeyJ08Q3vzRtTczH80ql4CXnXno/view?usp=sharing', '_blank');}}
          className="inline-flex items-center px-0.5 py-1 mb-2 text-base font-medium text-center text-[#f392fd] md:hover:text-[#82E9FF] border-2 border-transparent">
            Certificate
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Button>
            </div>
        <Button onClick={()=>{window.open('https://www.figma.com/proto/UIEaT1YRyRfSnvKbcXbwH0/Ansh-Avi-Khanna-Ansh.Khanna%40iiiitb.ac.in?page-id=0%3A1&type=design&node-id=1-2&viewport=583%2C523%2C0.09&t=X7O4lIAIxSiblN9a-1&scaling=scale-down-width&starting-point-node-id=52%3A7&mode=design', '_blank');}}
        className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-[#DDF9FF] bg-[#2e5979bb] md:hover:bg-[#2A0E2D] border-2 md:hover:border-[#F37EFF] border-[#82E9FF] rounded-lg">
            Prototype
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Button>
    </div>
</div>

<div className="max-w-sm border-[#82E9FF] rounded-2xl shadow">
        <img className="rounded-t-lg" src={des} alt="" />
    <div className="p-5">
        <Typography className="mb-2 text-[#82E9FF] md:text-[22px] text-[20px] font-medium">
          Design
        </Typography>
        <Typography className="mb-1 text-[#BBF3FF] md:text-[15px] text-[13px] font-normal">
          Domain : College fests & clubs 
        </Typography>
        <Typography className="mb-1 text-[#BBF3FF] md:text-[15px] text-[13px] font-normal">
          Technologies : Figma | Adobe Illustrator
        </Typography>
          <Typography className="mb-3 text-[#BBF3FF] md:text-[15px] text-[13px] font-normal">Overview : Designed the following -<br></br> Web & Mobile Apps<br></br> Logos<br></br> Merchandise <br></br>Posters</Typography>
        <Button onClick={()=>{window.open('https://www.figma.com/proto/oGC9eZMMHXNfw4ocKdwwX3/My-Designs?page-id=0%3A1&type=design&node-id=1-27&viewport=481%2C355%2C0.19&t=DrTPl5SWPzabBMIg-1&scaling=min-zoom&mode=design', '_blank');}}
        className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-[#DDF9FF] bg-[#2e5979bb] md:hover:bg-[#2A0E2D] border-2 md:hover:border-[#F37EFF] border-[#82E9FF] rounded-lg">
            Designs
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Button>
    </div>
</div>

    </Slider>
    </div>
  )
}

export default Projects
