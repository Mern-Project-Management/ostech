import React, { useState, useEffect } from 'react';
import Navbar from '../components/home/Navbar';
import { HomeCarousel  } from '../components/home/HomeCarousal';
import ProductGridView from '../components/home/ProductGridView';
import AboutUs from '../components/home/AboutUs';
import ValuesCarousel from '../components/home/OurValue';
import VideoBannerSection from '../components/home/PlayBanner';
import VideoBanner from '../components/home/PlayBanner2';
import OurClientsPage from '../components/home/OurClients';
import Footer from '../components/home/Footer';
import Counter from '../components/home/Counter';
import MainCarousel from '../components/home/MainCarousel';

const Homepage = () => {
    const [isVisible, setIsVisible] = useState({});
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: entry.isIntersecting
            }));
          });
        },
        { threshold: 0.1 }
      );
  
      document.querySelectorAll('[data-animate]').forEach(
        el => observer.observe(el)
      );
  
      return () => observer.disconnect();
    }, []);
  
    return (
      <div className="min-h-screen bg-gray-50">
        {/* <Navbar /> */}
        <HomeCarousel  />
        <ProductGridView />
        <AboutUs />

        {/* <Counter /> */}
        <OurClientsPage />
        <MainCarousel  />
        <ValuesCarousel /> 
        <VideoBannerSection />
        <VideoBanner />
        <Footer />
      </div>
    );
  };
  
  export default Homepage;