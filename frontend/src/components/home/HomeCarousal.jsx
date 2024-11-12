import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, HardHat, Factory, Settings, Workflow } from 'lucide-react';
import hero1 from "../../assets/slider3.jpg"
import hero2 from "../../assets/slider1.jpg"
import hero3 from "../../assets/slider4.jpg"
import hero4 from "../../assets/slider2.jpg"
export const HomeCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const carouselItems = [
    {
      id: 1,
      image: hero1,
      title: "Committed to Quality....",
      subtitle: "Committed to You!",
      description: "Leading the industry with innovative solutions",
      icons: [
        { icon: HardHat, label: "Safety First" },
        { icon: Factory, label: "Modern Facilities" },
        { icon: Settings, label: "Advanced Tech" }
      ]
    },
    {
      id: 2,
      image: hero2,
      title: "Innovation Drives",
      subtitle: "Our Success!",
      description: "Transforming ideas into reality",
      icons: [
        { icon: Settings, label: "Precision" },
        { icon: Workflow, label: "Efficiency" },
        { icon: Factory, label: "Scale" }
      ]
    },
    {
      id: 3,
      image: hero3,
      title: "Excellence in",
      subtitle: "Manufacturing",
      description: "Setting new industry standards",
      icons: [
        { icon: Factory, label: "Quality" },
        { icon: Settings, label: "Innovation" },
        { icon: HardHat, label: "Safety" }
      ]
    },
    {
      id: 4,
      image: hero4,
      title: "Global Solutions",
      subtitle: "Local Impact",
      description: "Serving industries worldwide",
      icons: [
        { icon: Workflow, label: "Global" },
        { icon: Factory, label: "Local" },
        { icon: Settings, label: "Impact" }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIsAnimating(true);
    setActiveSlide((prev) => (prev + 1) % carouselItems.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setActiveSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="relative h-[50vh] lg:h-screen ">
      <div className="relative h-full overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute w-full h-full transition-all duration-1000 
              ${index === activeSlide ? 'opacity-100 translate-x-0' : 
                index < activeSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-screen h-[100vh]  object-cover"
            />

            <div className="absolute  inset-0 bg-black bg-opacity-40">
              <div className="h-full md:ml-20 flex flex-col items-start justify-center max-w-7xl mx-auto px-8">
                {/* White border decoration */}
                <div className="relative sm:block hidden">
                  <div className="absolute -left-4 top-0 w-1 h-24 md:h-12 bg-white" />
                  <div className="absolute -left-4 top-0 w-24 md:w-12 h-1 bg-white" />
                </div>

                {/* Text content with animations */}
                <div className={`space-y-4 transition-all duration-700 
                  ${isAnimating ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
                  <h1 className="text-white md:pt-2 xl:text-6xl lg:text-4xl text-lg font-bold">
                    {item.title}
                    <br />
                    {item.subtitle}
                  </h1>
                  <p className="text-white text-lg  mb-8">{item.description}</p>
                  
                  <button className="bg-cyan-400 text-white lg:px-8 lg:py-3 lg:text-lg text-sm px-4 py-2 rounded hover:bg-cyan-500 transition-colors">
                    LEARN MORE
                  </button>
                </div>

                {/* Icons with animations */}
                <div className="absolute hidden  bottom-16 right-8 sm:flex gap-8">
                  {item.icons.map((iconItem, i) => (
                    <div
                      key={i}
                      className={`flex flex-col items-center transition-all duration-700 delay-${i * 200}
                        ${isAnimating ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}
                    >
                      <div className="bg-white p-4 rounded-full mb-2">
                        <iconItem.icon className="w-8 h-8 md:w-4 md:h-4 text-cyan-400" />
                      </div>
                      <span className="text-white text-sm">{iconItem.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute hidden sm:block left-4 top-1/2 transform -translate-y-1/2 bg-white/80  p-2 rounded-full hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6 " />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 hidden sm:block top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${index === activeSlide ? 'bg-white w-8' : 'bg-white/50'}`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  ); 
};

export default HomeCarousel;