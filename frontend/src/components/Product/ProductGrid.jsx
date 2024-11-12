import React, { useState } from 'react'
import { Input } from './Input'
import { Card, CardContent, CardHeader, CardTitle } from './Card'
import { Button } from "./Button"
import Conveyor1 from "../../assets/product01.jpg"
import Conveyor3 from "../../assets/product3.jpg"
// import { ScrollArea } from '@/components/ui/scroll-area'
// Product data with categories as arrays
const productCategories = [
  {
    name: 'Conveyors',
    products: [
      { id: 1, name: 'Belt Conveyor', description: 'Efficient material handling solution', image: Conveyor1 },
      { id: 2, name: 'Roller Conveyor', description: 'Smooth transportation of goods', image: Conveyor3 },
      { id: 3, name: 'Modular Conveyor', description: 'Flexible and customizable conveyor system', image: '/placeholder.svg?height=200&width=300' },
    ]
  },
  {
    name: 'Customized Equipment Solution',
    products: [
      { id: 4, name: 'Custom Robotic Cell', description: 'Tailored automation system', image: '/placeholder.svg?height=200&width=300' },
      { id: 5, name: 'Automated Guided Vehicle', description: 'Intelligent material transport', image: '/placeholder.svg?height=200&width=300' },
    ]
  },
  {
    name: 'End of Line Solution',
    products: [
      { id: 6, name: 'Palletizer', description: 'Efficient palletizing system', image: '/placeholder.svg?height=200&width=300' },
      { id: 7, name: 'Case Packer', description: 'Automated packaging solution', image: '/placeholder.svg?height=200&width=300' },
    ]
  },
  {
    name: 'Robotics Arms for Pick and Place',
    products: [
      { id: 8, name: 'Pick and Place Robot', description: 'Precise and fast automation', image: '/placeholder.svg?height=200&width=300' },
      { id: 9, name: 'Collaborative Robot', description: 'Safe human-robot interaction', image: '/placeholder.svg?height=200&width=300' },
    ]
  },
  {
    name: 'Sparklite',
    products: [
      { id: 10, name: 'LED Work Light', description: 'Bright and energy-efficient lighting', image: '/placeholder.svg?height=200&width=300' },
      { id: 11, name: 'Portable Floodlight', description: 'High-intensity mobile lighting', image: '/placeholder.svg?height=200&width=300' },
    ]
  },
  {
    name: 'Special Purpose Machine',
    products: [
      { id: 12, name: 'Custom Inspection Machine', description: 'Specialized quality control equipment', image: '/placeholder.svg?height=200&width=300' },
      { id: 13, name: 'Automated Assembly Machine', description: 'High-speed product assembly', image: '/placeholder.svg?height=200&width=300' },
    ]
  },
]

export default function ProductGrid() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = productCategories.flatMap(category => 
    category.products.filter(product =>
      (selectedCategory === 'All' || category.name === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  return (
    <div className="container gap-10 mx-auto px-4 py-8 flex">
      {/* Sidebar */}
      <aside className="w-[20%]  bg-[#1290ca]/20 p-5 sticky top-0 self-start">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
          aria-label="Search products"
        />
        {/* <ScrollArea className="h-[calc(100vh-200px)]"> */}
          <div className="space-y-2">
            <Button
              onClick={() => setSelectedCategory('All')}
              variant={selectedCategory === 'All' ? 'default' : 'outline'}
              className="w-full justify-start bg-[#1290ca]"
            >
              All
            </Button>
            {productCategories.map(category => (
              <Button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                className="w-full justify-start text-black bg-white/50"
              >
                {category.name}
              </Button>
            ))}
          </div>
        {/* </ScrollArea> */}
      </aside>

      {/* Main content */}
      <main className="flex-1">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
               <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 relative">
               <CardHeader>
                 <img
                   src={product.image}
                   alt={product.name}
                   width={300}
                   height={200}
                   className="w-full h-48 object-cover rounded-t-lg"
                 />
               </CardHeader>
               <CardContent>
                 <CardTitle className="mb-2">{product.name}</CardTitle>
                 <p className="text-sm text-gray-500 mb-2">
                   {productCategories.find(cat => cat.products.some(p => p.id === product.id))?.name}
                 </p>
                 <p className="text-gray-600">{product.description}</p>
                 <div className="mt-4 text-right">
                   <Button
                     variant="outline"
                     size="sm"
                     asChild
                   >
                     <a href={`/products/${product.id}`}>Read More</a>
                   </Button>
                 </div>
               </CardContent>
             </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-8" role="alert">No products found. Try a different search term or category.</p>
        )}
      </main>
    </div>
  )
}
