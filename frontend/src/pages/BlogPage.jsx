import React from 'react'
import Blog from '../components/blogPage/Blog'
import banner from "../assets/about1.jpg"
import Banner from '../components/Banner'
const BlogPage = () => {
  return (
    <div className='pt-[4%]'>
         <Banner backgroundImage={banner} title="Blogs" />
      
        <Blog />
        </div>
  )
}

export default BlogPage