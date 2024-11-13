import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarousalData';

const MainCarousel = () => {

  const reversedItems = [...MainCarouselData].reverse().map((item, index) => (
    <div className="w-full min-h-[50vh] md:min-h-[70vh] lg:min-h-[70vh] flex flex-col items-center bg-[#E6E6E6] px-4 md:px-6 lg:px-8">
   
      <div className="w-full md:w-[70%] mb-5 lg:w-[50%] mt-8 md:mt-12 lg:mt-20 flex justify-center">
        <img 
          className="cursor-pointer mb-5 object-contain w-full h-auto max-h-[40vh] md:max-h-[50vh] lg:max-h-[70vh]" 
          alt={item.title || "Carousel image"} 
          src={item.image} 
          loading="lazy"
        />
      </div>
      {/* Uncomment if you want to show title and content
      <div className="text-center mt-4 px-4">
        <h2 className="text-xl md:text-2xl font-semibold">{item.title}</h2>
        <p className="text-base md:text-lg text-gray-600">{item.content}</p>
      </div> */}
    </div>
  ));

  const renderButton = (direction) => {
    const isNext = direction === 'next';
    return (
      <button 
        className={`
          hidden md:block
          absolute top-1/2 transform -translate-y-1/2
          ${isNext ? 'right-2 md:right-4 lg:right-8' : 'left-2 md:left-4 lg:left-8'}
          w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
          bg-gray-700 hover:bg-gray-800
          text-white rounded-full
          flex items-center justify-center
          transition-all duration-300
          opacity-75 hover:opacity-100
        `}
        aria-label={`${isNext ? 'Next' : 'Previous'} slide`}
      >
        {isNext ? '❯' : '❮'}
      </button>
    );
  };

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <><div className='flex flex-col justify-center items-center mb-9'>
      <h2 className='text-4xl font-bold p-2 mb-2 text-[#052852]  '>Best-Selling Products</h2>
   <p className='text-gray-700'>Discover the top-rated and most popular products that have captured the attention of our customers, offering exceptional quality and value, and continue to be the go-to choices for shoppers.</p>
    </div>
    <div className="relative w-full">
        <AliceCarousel
          items={reversedItems}
          autoPlay
          autoPlayInterval={3000}
          infinite
          animationDuration={1000}
          disableDotsControls
          responsive={responsive}
          renderPrevButton={() => renderButton('prev')}
          renderNextButton={() => renderButton('next')}
          mouseTracking
          touchTracking
          ssrSilentMode />
      </div></>
  );
};

export default MainCarousel;