import React from 'react'
import { Pagination } from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "./Education.css"
import hsc from "../../Images/hsc.png";
import sslc from "../../Images/sslc.png";
import degree from "../../Images/degree.png";


const Education = () => {
 
    const Degrees =[{
        img:degree ,
        degree : "BSC IT",
        percentage: "93.4%",
        Institute: "PSG CAS"
    },{
        img: hsc,
        degree : "12TH HSC",
        percentage: "94.4%",
        Institute: "SNMHSS"



    },{
        img: sslc,
        degree : "10TH SSLC",
        percentage: "93.2%",
        Institute: "SNMHSS"

    }];

  return (
    <div className='t-wrapper' id="Education">
        <div className="t-heading">
            <span>Education Details</span>
            <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        </div>
      <Swiper 
      modules={[Pagination]}
      slidesPerView ={1}
      pagination={{clickable:true}}
      >
{Degrees.map((items,index)=>{
    return(
        <SwiperSlide key={index}>
<div className="testimonial">

    <img src={items.img} alt=""/>
    <span>Degree:</span>
    <span>{items.degree} </span>
    <span>Percentage:</span>
    <span>{items.percentage} </span>
    <span>Institute:</span>
    <span>{items.Institute} </span>
</div>
        </SwiperSlide>
    );
})}





      </Swiper>
    </div>
  )
}

export default Education
