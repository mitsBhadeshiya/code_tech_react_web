import React from 'react'
import Header from '../Components/Header/Header';
import info from '../assets/Web-Landing.svg'
import About from '../Components/About/About';
import OurClients from '../Components/OurClients/OurClients';
import OurServices from '../Components/OurServices/OurServices';
import Technologies from '../Components/Technologies/Technologies.Jsx';
import Projects from '../Components/Projects/Projects';
import Intro from '../Components/Intro/Intro';
import Testimonials from '../Components/Testimonials/Testimonials';
import Footer from '../Components/Footer/Footer';
const HomePage = () => {
  return (
    <>
    <Header/>
    <About/>
    <OurClients/>
    <OurServices/>
    <Intro/>
    <Technologies/>
    <Projects/>
    <Testimonials/>
    <Footer/>
    </>
  )
}


export default HomePage;