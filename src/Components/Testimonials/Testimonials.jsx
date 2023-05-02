import React from 'react'
import styles from './Testimonials.module.css'
import Line from '../../assets/line.svg'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

import Comma from '../../assets/comma.png'
import StarIcon from '../../assets/icon-Star.svg'
import Pic1 from '../../assets/Images/Pic-1.jpg'
import Pic2 from '../../assets/Images/Pic-2.jpg'
import Pic3 from '../../assets/Images/Pic-3.jpg'
import Pic4 from '../../assets/Images/Pic-4.jpg'
import Pic5 from '../../assets/Images/Pic-5.jpg'
import Pic6 from '../../assets/Images/Pic-6.jpg'
import Pic7 from '../../assets/Images/Pic-7.jpg'
import Pic8 from '../../assets/Images/Pic-8.jpg'
import Pic9 from '../../assets/Images/Pic-9.jpg'


const testimonialData = [
    {
        name: "SMITH",
        Position: "CEO - 3DX Industries",
        testimonial: "Codetech solutions is responsive to volatile market data and provides timely responses to their clients. Codetech solutions has brought that kind of world class solutions expertise and implementation process improvements.",
        photo: Pic1,
        rating: 4.9,
    },
    {
        name: "JOHNSON",
        Position: "Founder - Alchemy Goods",
        testimonial: "“I was beyond impressed, not only with Codetech Solutions Private limited and his willingness to help me and my auditor understand how to use the program, which is so simple, but the program itself is amazing.’’",
        photo: Pic2,
        rating: 5.0,
    },
    {
        name: "MILLER",
        Position: "Project Manager - Applied Motion Systems, Inc",
        testimonial: "“Their staff is well trained with broad skill sets that range from spend analysis to research to negotiations and contracting. They also value the customer’s relationship and that is reflected in the professionalism of their interactions. They make solutions easier and help get to result faster.’’",
        photo: Pic3,
        rating: 4.6
    },
    {
        name: "RODRIGUEZ",
        Position: "CEO - ALTEK,Inc.",
        testimonial: "“Ever since we got introduced to Codetech team, we are very happy with their services as they are well versed with the product and are prompt to resolve the issues quickly. In case of critical issues, they speak with the principal company in Bangalore to find a solution and that is highly appreciated.’’",
        photo: Pic4,
        rating: 4.8,
    },
    {
        name: "GONZALEZ",
        Position: "CO-Founder - Healers Petcare, Inc.",
        testimonial: "Everytime I call for assistance, everyone I speak to is very helpful and knowledgeable. I appreciate it!!!",
        photo: Pic5,
        rating: 5.0,
    },
    {
        name: "THOMAS",
        Position: "Project Manager - Huntron, Inc.",
        testimonial: "“Their staff is well trained with broad skill sets that range from spend analysis to research to negotiations and contracting. They also value the customer’s relationship and that is reflected in the professionalism of their interactions. They make solutions easier and help get to result faster.’’",
        photo: Pic6,
        rating: 4.9,
    },
    {
        name: "TAYLOR",
        Position: "Co-Founder - nLight Photonics Corporation",
        testimonial: "Your engineer makes things easy for me. He is thorough and polite. I know things are going to get fixed in a timely matter.",
        photo: Pic7,
        rating: 4.8,
    },
    {
        name: "SANCHEZ",
        Position: "CEO - NW Etch",
        testimonial: "They are on top of their game, go above and beyond, and leave no stone un-turned when dealing with our many issues. We are a 100% satisfied customer of theirs.",
        photo: Pic8,
        rating: 5.0,
    },
    {
        name: "ALLEN",
        Position: "CO-Founder - Ozone International",
        testimonial: "All you guys are awesome! Thanks for always helping me. Always very nice and friendly.",
        photo: Pic9,
        rating: 4.9,
    },
]





const Testimonials = () => {
    return (
        <div className={styles.main}>
            <div className={styles.headername}>
                <div>Testimonials</div>
                <img src={Line} alt="" />
            </div>
            <div className={styles.Testimonials}>
                <div className={styles.swiperDiv}>
                    <Swiper
                        // style={{maxWidth: "1400px"}}
                        className={styles.Swiper}
                        slidesPerView={1}
                        spaceBetween={30}
                        // centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        breakpoints={{
                            400: {
                              slidesPerView: 1
                            },
                            800: {
                              slidesPerView: 2
                            },
                            1000: {
                              slidesPerView: 3
                            },
                            1200: {
                              slidesPerView: 3
                            }
                          }}

                        modules={[Pagination, Autoplay]}

                    >
                        {testimonialData.map((data, i) => {
                            return (
                                <SwiperSlide className={styles.swiperSlide} key={i}>
                                    <TestimonialsBlock
                                    name={data.name}
                                    position={data.Position}
                                    testimonial={data.testimonial}
                                    photo={data.photo}
                                    rating={data.rating}
                                    />
                                </SwiperSlide>

                            )
                        })}

                        <Navigations />

                    </Swiper>
                </div>
            </div>
        </div>

    )
}


export default Testimonials;




const TestimonialsBlock = (props) => {
    return (
        <>

            <div className={styles.infodiv}>
                <div className={styles.tesimonialfeedback}>
                    <div className={styles.commaimg}>
                        <img src={Comma} alt="" />
                    </div>
                    {props.testimonial}
                </div>
                <div className={styles.userinfo}>
                    <div className={styles.userPic}>
                        <img className={styles.userImg} src={props.photo} alt="" />
                    </div>
                    <div className={styles.username}>
                        <div id={styles.name}>
                            {props.name}
                        </div>
                        <div id={styles.extra}>
                            {props.position}
                        </div>
                    </div>
                    <div className={styles.rating}>
                        <img src={StarIcon} alt="" />
                        <div>{props.rating}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Navigations = () => {
    const Swiper = useSwiper();
    return (
        <>
            <div className={styles.navigationbuttons}>
                <div onClick={() => { Swiper.slidePrev() }}>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                </div>
                <div onClick={() => { Swiper.slideNext() }}>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                </div>
            </div>
        </>)
}

