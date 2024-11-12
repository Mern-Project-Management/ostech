import React from 'react'
import ProductGrid from '../components/Product/ProductGrid'
import banner from "../assets/about1.jpg"
import Banner from '../components/Banner'
export const ProductPage = () => {
  return (
    <div>
          <Banner backgroundImage={banner} title="Products" />
          <ProductGrid />
          
    </div>
  )
}
