import React, { useState } from 'react'
import styles from './OurClient.module.css'
import Line from '../../assets/line.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper';
import iAmazon from '../../assets/image-amazon.png'
import iBehance from '../../assets/image-behance.png'
import iInfosys from '../../assets/image-infosys.png'
import iJaguar from '../../assets/image-jaguar.png'
import iYahhoo from '../../assets/image-yahho.png'
import "swiper/css";
import 'swiper/css/navigation';



import { Navigation } from 'swiper';
const OurClients = () => {
  const imageData = [iAmazon, iBehance, iInfosys, iJaguar, iYahhoo, iYahhoo, iJaguar, iBehance, iAmazon]


  return (
    <div className={styles.main} id='Client'>
      <div className={styles.headername}>
        <div>Our Clients</div>
        <img src={Line} alt="" />
      </div>
      <div style={{ margin: "30px 50px" }}>
        <Swiper
         style={{
          "--swiper-navigation-color": "#000",
          "--swiper-navigation-size": "15px",
        }}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
        }}
          breakpoints={{
            300: {
              slidesPerView: 1
            },
            600: {
              slidesPerView: 2
            },
            900: {
              slidesPerView: 4
            },
            1200: {
              slidesPerView: 5
            }
          }}
          slidesPerView={3}
          spaceBetween={50}
          navigation
          className={styles.ourClientswiper}
        >
          {imageData.map((data, i) => {
            return (
              <SwiperSlide className={styles.ourClientswiperslide} key={i}><div className={styles.images}><img src={data}></img></div></SwiperSlide>)
          })}
          {/* <Navigations/> */}
        </Swiper>

      </div>
    </div>
  )
}

export default OurClients;

