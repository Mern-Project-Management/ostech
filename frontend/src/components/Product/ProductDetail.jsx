import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from './Button';
import { Card, CardContent, CardDescription, CardHeader } from './Card';
import { productCategories } from './ProductList'; // Assuming productCategories is imported
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './Collapsible'; // Assuming collapsible components
import WhyChooseUs from './WhyChooseUs';
import wc1 from "../../assets/whychoose1.gif"
import { IoIosContact } from "react-icons/io";
import InquiryForm from './InquiryForm';
const ProductDetail = () => {
  const { productId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
   
  const currentProduct = productCategories
    .flatMap(category => category.products)
    .find(product => product.id === parseInt(productId));

  if (!currentProduct) {
    return <div>Product not found</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === currentProduct.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? currentProduct.images.length - 1 : prevIndex - 1
    );
  };

  // Auto-play functionality for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === currentProduct.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentProduct.images.length]);

  return (
    <>
      <div className="px-4 py-8 flex  md:flex-row">
      {showInquiryForm && (
                <InquiryForm
                    productName="Conveyor"
                    onClose={() => setShowInquiryForm(false)}
                />
            )}

        <aside className="w-full md:w-[20%] bg-[#1290ca]/20 md:pr-8 lg:px-7 mb-8 ">
          <div className="md:sticky  h-[100vh] md:top-24">
            <h2 className="text-2xl text-[#052852] font-bold mb-4 p-4">Related Products</h2>
            {productCategories.map((category) => (
              <Collapsible key={category.name}>
                <CollapsibleTrigger className="flex my-3 items-center justify-between w-full font-medium text-left text-gray-700 bg-white text-[16px] hover:bg-gray-100 rounded-md">
                  {category.name}
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-2">
                  {category.products.map((product) => (
                    <Button
                      key={product.id}
                      variant="ghost"
                      className={`w-full justify-start text-[13px] hover:bg-white m-1 pl-4 ${product.id === parseInt(productId) ? 'bg-gray-100' : 'bg-white '}`}
                      asChild
                    >
                      <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </Button>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ))}
            <div className='w-[30vh]  rounded mt-10 h-[30vh] border bg-[#052852]'>
              <div className='flex justify-center items-center mt-7'>
                {/* <img src={wc1} alt="" className='w-1/4' /> */}
                <IoIosContact className='text-[6rem] text-white' />
              </div>
              <div className='flex flex-col mt-3 justify-center items-center'>
                <p className='text-xl font-bold text-white'>+91 99783 88388</p>
                <p className='text-xl font-bold text-white'>rajneesh@ostech.in</p>
              </div>
            </div>
          </div>

        </aside>

        <main className="flex-1">
          <Card className="border-none shadow-none rounded-xl">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left side Image Gallery */}
                <div className="flex  flex-col space-y-4">
                  {/* Main Image */}
                  <div className="relative h-[25rem] w-full rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={currentProduct.images?.[currentImageIndex] || '/default-image.jpg'}
                      alt={currentProduct.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-none"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-none"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Thumbnails */}
                  <div className="flex space-x-4 overflow-x-auto">
                    {currentProduct.images?.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => handleThumbnailClick(index)}
                        className={`relative w-24 h-16 m-2 rounded-lg overflow-hidden ${index === currentImageIndex
                          ? 'ring-2 ring-blue-500 ring-offset-2'
                          : 'hover:opacity-75'
                          }`}
                      >
                        <img
                          src={image}
                          alt={`${currentProduct.name} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Side Content */}
                <div className="flex flex-col space-y-6">
                  {/* Title, Subtitle, Description */}
                  <div>
                    <h1 className="text-3xl text-[#052852]  font-bold tracking-tight">
                      {currentProduct.name}
                    </h1>
                    <p className="mt-2 text-gray-500">
                      Efficient Soap Cutting, Billet Shaping, and Stamping Solution
                    </p>
                    <h2 className="text-xl font-semibold mt-4 text-[#052852] ">Description</h2>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {currentProduct.description}
                    </p>

                    <button  onClick={() => setShowInquiryForm(true)}
                    className='border bg-[#1290ca] p-2 px-7 rounded mt-5 text-white text-lg'>
                      Inquiry Now
                    </button>
                  </div>

                  {/* Features in Bottom Left */}

                </div>

                <div className="lg:col-span-2">
                  <h2 className="text-xl text-[#052852]  font-semibold">Key Features</h2>
                  <ul className="space-y-2 mt-3  lg:grid grid-cols-2">
                    {[
                      'High efficiency and reliability in material transport',
                      'Reduces manual handling, improving worker safety',
                      'Customizable design to suit various applications',
                      'Easy maintenance for long-term operation',
                      'Cost-effective solution for material handling needs',
                      'Durable construction for reliable performance',
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500" />
                        <span className="ml-4 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <WhyChooseUs />
          </Card>

        </main>

      </div>
    </>
  );
};

export default ProductDetail;
