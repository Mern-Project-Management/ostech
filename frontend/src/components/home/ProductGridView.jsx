import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import about1 from "../../assets/about001.jpg";
import product1 from "../../assets/product01.jpg";
import product2 from "../../assets/about3.jpg";
import product3 from "../../assets/product3.jpg";
import productv1 from "../../assets/productv01.mp4";
import productv2 from "../../assets/productv02.mp4";

const ProductGridView = () => {
  const [isAnimating, setIsAnimating] = useState({});
  const headingRef = useRef(null);

  const gridItems = [
    {
      id: 1,
      type: 'video',
      src: productv1,
      alt: 'Product video 1',
      caption: 'Experience the future of driving',
      title: 'Future of Driving',
      className: 'col-span-2', // Only first video spans full width
    },
    {
      id: 2,
      type: 'image',
      src: about1,
      alt: 'Car exterior view',
      caption: 'An elegant silver car, sleek and modern luxury.',
      title: 'Luxury Car Exterior',
      className: 'col-span-1',
    },
    {
      id: 3,
      type: 'image',
      src: product2,
      alt: 'Car interior seats',
      caption: 'Spacious upgrades with all new business class seats.',
      title: 'Interior Comfort',
      className: 'row-span-2',
    },
    {
      id: 4,
      type: 'image',
      src: product1,
      alt: 'Car dashboard display',
      caption: 'Hi-tech interface with gesture recognition for the infotainment.',
      title: 'Advanced Dashboard',
      className: 'col-span-1',
    },
    {
      id: 5,
      type: 'image',
      src: product3,
      alt: 'Range indicator',
      caption: '1050km range',
      title: 'Extended Range',
      className: 'col-span-1',
    },
    {
      id: 6,
      type: 'video',
      src: productv2,
      alt: 'Product video 2',
      caption: 'Advanced driving features showcase',
      title: 'Driving Features',
      className: 'col-span-2',
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(headingRef.current, {
      opacity: 0,
      y: -50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse',
        once: false
      }
    });

    gridItems.forEach((item) => {
      gsap.fromTo(
        `#item-${item.id}`,
        { y: 50, opacity: 1 },
        {
          y: 30,
          opacity: 1,
          scrollTrigger: {
            trigger: `#item-${item.id}`,
            start: 'top 90%',
            end: 'bottom',
            scrub: true,
          },
        }
      );
    });
  }, [gridItems]);

  const handleMouseEnter = (id) => {
    setIsAnimating((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setIsAnimating((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="container mx-auto mb-16  0 p-4">
      <div className="text-center font-bold lg:text-3xl md:text-3xl text-2xl lg:mb-8 mt-12 product-title" id="product-title">
        <h2 ref={headingRef} className="text-[#052852]">Our Products</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {gridItems.map((item) => (
          <div
            key={item.id}
            id={`item-${item.id}`}
            className={`relative overflow-hidden rounded-lg transition-all duration-500 ${item.className}`}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={() => handleMouseLeave(item.id)}
          >
            {item.type === 'image' ? (
              <div className="relative h-full">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-sm lg:text-lg text-white bg-[#052852]/50 px-3 py-1 rounded">
                  {item.caption}
                </div>
                <div
                  className={`absolute inset-0 flex items-center justify-center text-2xl text-white font-semibold transition-all duration-500 ease-in-out transform ${
                    isAnimating[item.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } bg-[#042852]/40`}
                >
                  {item.title}
                </div>
              </div>
            ) : (
              <div className="relative h-[50vh] w-full aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  poster={item.src}
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-4 left-4 text-sm lg:text-lg text-white bg-[#052852]/50 px-3 py-1 rounded">
                  {item.caption}
                </div>
                <div
                  className={`absolute inset-0 flex items-center justify-center text-2xl text-white font-semibold transition-all duration-500 ease-in-out transform ${
                    isAnimating[item.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  } bg-[#042852]/40`}
                >
                  {item.title}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGridView;
