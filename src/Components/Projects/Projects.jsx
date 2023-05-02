import React, { useState } from 'react'
import styles from './Projects.module.css'
import Line from '../../assets/line.svg'
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from '../../assets/projectDemo.svg'
import ladyImg from '../../assets/lady.svg'


const imagedata = [{name:"Demo1", photo:img1}, {name: "demo2", photo:ladyImg}, {name:"demo3", photo:img1}];
const Projects = () => {
  const [index, setindex] = useState(0)
  return (
    <>
      <div id='Projects' className={styles.main}>
        <div className={styles.headername}>
          <div>Projects</div>
          <img src={Line} alt="" />
        </div>
        <div className={styles.Projects}>

          {/* ///Swiper Start */}



          <div className={styles.swipermaindiv}>
            <Swiper
              slidesPerView={1}
              className={styles.SwiperStyle}
              onSlideChange={(data)=>setindex(data.realIndex)}
              loop
            >
              {imagedata.map((data, i) => {
                return (<SwiperSlide key={i} className={styles.SwiperSlideStyle}>
                  <img className={styles.Swiperimg} src={data.photo}></img>
                </SwiperSlide>)
              })}

              <Navigation nameindex={index}/>
            </Swiper>
          </div>




          {/* ///Swiper End */}
        </div>
      </div>
    </>
  )
}

export default Projects;



const Navigation = (props) => {
  const Swiper = useSwiper();
  return (
    <div className={styles.projectnavigation}>
      <div className={styles.projectName}>{imagedata[props.nameindex].name}</div>
      <div className={styles.navigationbuttons}>
        <div className={styles.prev} onClick={()=>{Swiper.slidePrev()}}>
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>

        </div>
        <div className={styles.next} onClick={()=>{Swiper.slideNext()}}>
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
        </div>
      </div>
    </div>
  )
}
