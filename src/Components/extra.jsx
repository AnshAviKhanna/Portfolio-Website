import React from 'react'
import bg_projects from '../assets/bgprojects.png'
import diamond from '../assets/diamond.png'
import {Card,CardHeader,CardBody,CardFooter,Typography,Button} from "@material-tailwind/react";

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

function Projects() {
  return (
    <div id="about" className="h-screen bg-cover bg-center px-20"
    style={{ backgroundImage: `url(${bg_projects})`, }}>
    <div className="flex items-center md:mb-10 mb-5 md:mt-0">
        <div className="flex-shrink-0">
            <img src={diamond} alt="" style={{ width: '10vw', height: 'auto' }} className="motion-safe:animate-pulse hover:motion-safe:animate-bounce w-fit object-scale-down" />
        </div>
        <div className="ml-4">
            <div className="bg-gradient-to-b from-[#ffffff] to-[#3DDCFF] inline-block text-transparent bg-clip-text text-[28px] md:text-[50px] font-medium">PROJECTS</div>
        </div>
    </div>
    <div>
    <Swiper navigation className='mt-16'
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
    // effect={'coverflow'}
        // grabCursor={true}
        // centeredSlides={true}
        // loop={true}
        // slidesPerView={'auto'}
    >
    <SwiperSlide>
      <Card className="mt-6 w-[25vw] bg-black">
      <CardHeader className="relative h-56 bg-[#82E9FF]">
        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
      </CardHeader>
      <CardBody>
        <Typography className="mb-2 text-[#82E9FF] text-[22px] font-medium">
          UI/UX Review Check
        </Typography>
        <Typography className="text-[#BBF3FF] text-[16px] font-normal">
          The place is close to Barceloneta Beach and bus stop just 2 min by walk
          and near to &quot;Naviglio&quot; where you can enjoy the main night life
          in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
    </SwiperSlide>
    <SwiperSlide>
      <Card className="mt-6 w-[25vw]">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by walk
          and near to &quot;Naviglio&quot; where you can enjoy the main night life
          in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
    </SwiperSlide>
    <SwiperSlide>
      <Card className="mt-6 w-[25vw]">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by walk
          and near to &quot;Naviglio&quot; where you can enjoy the main night life
          in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
    </SwiperSlide>
    <SwiperSlide>
      <Card className="mt-6 w-[25vw]">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by walk
          and near to &quot;Naviglio&quot; where you can enjoy the main night life
          in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
    </SwiperSlide>
    </Swiper>
    </div>
    </div>
  )
}

export default Projects
