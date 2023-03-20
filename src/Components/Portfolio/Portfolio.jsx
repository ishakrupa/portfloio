import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import "./Portfolio.css";
import car from "../../Images/car.png";
import Foodorder from "../../Images/Foodorder.png";
import { themeContext } from "../../Context";
import { useContext } from 'react';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;



  return (
   <div className="Portfolio">
<span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
<span>Portfolio</span>
<Swiper
spaceBetween={30}
slidesPerView={2}
grabCursor={true}
className ="portfolio-slider"

>
<SwiperSlide>
    <img src={car}alt="" />
</SwiperSlide>

<SwiperSlide>
    <img src={Foodorder} alt="" />
</SwiperSlide>





</Swiper>





   </div>
      

  )
}

export default Portfolio
