import React from 'react'
import Banner from '../components/Banner'
import banner from "../assets/about1.jpg"
import VideoGrid from '../components/resource/ResourceGrid'
import VideoBanner from '../components/home/PlayBanner2'
import Footer from '../components/home/Footer'
const Resource = () => {
  return (
    <div className='pt-[5%]'>
      <Banner backgroundImage={banner} title="Resource" />
      <VideoGrid />
      {/* <VideoBanner /> */}
        <Footer />
    </div>
  )
}

export default Resource
