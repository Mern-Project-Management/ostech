import React from 'react'
import ProductGrid from '../components/Product/ProductGrid'
import banner from "../assets/about1.jpg"
import Banner from '../components/Banner'
import ProductDetail from '../components/Product/ProductDetail'
import Footer from '../components/home/Footer'
export const ProductDetailPage = () => {
  return (
    <div className='pt-[5%]'>
          <Banner backgroundImage={banner} title="Products" />
         <div className='max-w-[85rem] mx-auto'>
         <ProductDetail />
        
         </div>
         <Footer />
    </div>
  )
}
