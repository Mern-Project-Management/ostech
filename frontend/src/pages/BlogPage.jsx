import React from 'react'
import Blog from '../components/blogPage/Blog'
import banner from "../assets/about1.jpg"
import Banner from '../components/Banner'
import Footer from '../components/home/Footer'
const BlogPage = () => {
  return (
    <div className='pt-[4%]'>
         <Banner backgroundImage={banner} title="Blogs" />
      
        <Blog />
        <Footer />
        </div>
  )
}

export default BlogPage