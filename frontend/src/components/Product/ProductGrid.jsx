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
      { id: 3, name: 'Modular Conveyor', description: 'Flexible and customizable conveyor system', image: Conveyor1 },
    ]
  },
  {
    name: 'Customized Equipment Solution',
    products: [
      { id: 4, name: 'Custom Robotic Cell', description: 'Tailored automation system', image: Conveyor1 },
      { id: 5, name: 'Automated Guided Vehicle', description: 'Intelligent material transport', image: Conveyor3 },
    ]
  },
  {
    name: 'End of Line Solution',
    products: [
      { id: 6, name: 'Palletizer', description: 'Efficient palletizing system', image: Conveyor1 },
      { id: 7, name: 'Case Packer', description: 'Automated packaging solution', image: Conveyor3 },
    ]
  },
  {
    name: 'Robotics Arms for Pick and Place',
    products: [
      { id: 8, name: 'Pick and Place Robot', description: 'Precise and fast automation', image: Conveyor1 },
      { id: 9, name: 'Collaborative Robot', description: 'Safe human-robot interaction', image: Conveyor3 },
    ]
  },
  {
    name: 'Sparklite',
    products: [
      { id: 10, name: 'LED Work Light', description: 'Bright and energy-efficient lighting', image: Conveyor3 },
      { id: 11, name: 'Portable Floodlight', description: 'High-intensity mobile lighting', image: Conveyor1 },
    ]
  },
  {
    name: 'Special Purpose Machine',
    products: [
      { id: 12, name: 'Custom Inspection Machine', description: 'Specialized quality control equipment', image: Conveyor1 },
      { id: 13, name: 'Automated Assembly Machine', description: 'High-speed product assembly', image: Conveyor1 },
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
    <div className="container relative gap-10 mx-auto px-4 py-8 flex">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50m-40 0a40,40 0 1,0 80,0a40,40 0 1,0 -80,0' fill='none' stroke='%23333' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      ></div>
      {/* Sidebar */}
      <aside className="w-[20%] bg-[#1290ca]/20 p-5 h-[100vh] sticky top-20 self-start">
  <h2 className="text-2xl font-bold text-[#052852] mb-4">Categories</h2>
  <Input
    type="text"
    placeholder="Search products..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="mb-4"
    aria-label="Search products"
  />
  <div className="space-y-2">
    <Button
      onClick={() => setSelectedCategory('All')}
      variant={selectedCategory === 'All' ? 'default' : 'outline'}
      isSelected={selectedCategory === 'All'}
      className="w-full justify-start bg-white"
    >
      All
    </Button>
    {productCategories.map(category => (
      <Button
        key={category.name}
        onClick={() => setSelectedCategory(category.name)}
        variant={selectedCategory === category.name ? 'default' : 'outline'}
        isSelected={selectedCategory === category.name}
        className="w-full justify-start bg-[#ffffff] text-black"
      >
        {category.name}
      </Button>
    ))}
  </div>
</aside>



      {/* Main content */}
      <main className="flex-1">
        <h1 className="text-3xl font-bold text-[#052852] mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id} className="transition-shadow duration-300 transform hover:scale-105 shadow-lg hover:shadow-md hover:shadow-[#1290ca] shadow-[#1290ca]/50 relative">
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover "
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
                    className="bg-[#1290ca]/90  text-white"
                  >
                    <a href={`/products/${product.id}`} className=''>Read More</a>
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
