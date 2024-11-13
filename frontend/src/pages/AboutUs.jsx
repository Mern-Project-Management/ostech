import React from 'react'
import Banner from '../components/Banner'
import banner from "../assets/about1.jpg"
import AboutUs from '../components/home/AboutUs'
import OurClientsPage from '../components/home/OurClients'
import MissionVisionSection from '../components/aboutUs/MissionVision'
import WhatWeOffer from '../components/aboutUs/WhatWeOffer'
import FAQSection from '../components/aboutUs/FAQ'
import VideoBanner from '../components/home/PlayBanner2'
import Footer from '../components/home/Footer'
const AboutUsPage = () => {
  return (
    <div className='pt-[4%]'>
        <Banner backgroundImage={banner} title="About Us" />
        <AboutUs />
        <FAQSection />
        <MissionVisionSection />
     
        <OurClientsPage />
        <VideoBanner />
        <Footer />
    </div>
  )
}

export default AboutUsPage