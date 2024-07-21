import './home.css';
import fact2 from '../images/Fact-2.png'
import fact1 from '../images/Fact-1.png'
import fact3 from '../images/Fact-3.png'
import fact4 from '../images/Fact-4.jpg'
import fact5 from '../images/Fact-5.jpg'
import fact6 from '../images/Fact-6.jpg'
import fact7 from '../images/Fact-7.jpg'
import fact8 from '../images/Fact-8.jpg'
import fact9 from '../images/Fact-9.jpg'
import back from './recycling-bin1.jpg'
import React, { useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Text from '../text'
import Section from '../Section';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';




function Home() {
  
  return (
    <><div 
      className="hero min-h-screen" 
      style={{ 
        backgroundImage: `url(${back})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', 
        height: '120vh' 
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content" style={{ marginTop: '-60vh' }}> {/* Adjust the marginTop to move the text up */}
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-gray-300">EcoTrade Hub</h1>
          <p className="mb-3 text-1x1 text-gray-200 font-bold">
            Welcome to EcoTrade Hub, your dedicated platform for promoting sustainable consumption and production. Buy and sell recyclable waste to contribute directly to achieving SDG 12.5.1, which measures national recycling rates. Join a community committed to reducing waste and conserving resources. Together, let's increase recycling rates and build a greener future for generations to come.
          </p>
          <Link to="/login">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div><>
    <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  modules={[EffectCoverflow, Pagination, Autoplay]}
  className="mySwiper"
>
  <SwiperSlide>
    <img src={fact9} />
  </SwiperSlide>
  <SwiperSlide>
    <img src={fact1} />
  </SwiperSlide>
  <SwiperSlide>
    <img src={fact8} />
  </SwiperSlide>
  <SwiperSlide>
    <img src={fact3} />
  </SwiperSlide>
  <SwiperSlide>
    <img src={fact5} />
  </SwiperSlide>
  <SwiperSlide>
    <img src={fact4} />
  </SwiperSlide>
  <SwiperSlide>
    <img src={fact6} />
  </SwiperSlide>
  <SwiperSlide>
    <img src={fact2} />
  </SwiperSlide>
  <SwiperSlide>
    <img src={fact7} />
  </SwiperSlide>
</Swiper>
          <Text></Text>
          <Section></Section>
        </></>
        
        

      
  );
}

export default Home;