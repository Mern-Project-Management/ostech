import React, { useState, useEffect } from 'react';
import { LightbulbIcon, Target } from 'lucide-react'; // Animated Icons
import mission from "../../assets/mission.jpg";
import vision from "../../assets/vision.jpg";
import backgroundImageUrl from "../../assets/slider3.jpg";

const MissionVisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('mission-vision-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      id="mission-vision-section"
      className="relative h-[85vh] flex items-center justify-center py-20"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0  bg-[#052852] bg-opacity-70 z-0"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 relative z-10">
        {/* Mission Text Section */}
        <div
          className={`bg-white p-12 flex flex-col items-center text-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
       
            <LightbulbIcon className="w-10 h-10 text-blue-600 mb-2 animate-float" />
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Our Mission
              <div className="h-1 w-20  bg-blue-600 mx-auto mt-2"></div>
            </h2>
        
          <p className="text-gray-700 max-w-md">
            We aspire to be one of the largest groups in the SPM manufacturing sector.
            We aim to achieve the impossible and guarantee best-in-class service
            with diversified products across varied industrial segments.
          </p>
        </div>

        {/* Mission Image Background Section */}
        <div
          className={`relative overflow-hidden transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{
            backgroundImage: `url(${mission})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '35vh',
            position: 'relative',
          }}
        >
          {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        </div>

        {/* Vision Image Background Section */}
        <div
          className={`relative overflow-hidden transition-all duration-1000 delay-400 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{
            backgroundImage: `url(${vision})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '35vh',
            position: 'relative',
          }}
        >
          {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        </div>

        {/* Vision Text Section */}
        <div
          className={`bg-white p-12 flex flex-col items-center text-center transition-all duration-1000 delay-600 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <Target className="w-10 h-10 text-blue-600 mb-2 animate-pulse" />
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Our Vision
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-2"></div>
          </h2>
          <p className="text-gray-700 max-w-md">
            To become the biggest brand in the automation industry –
            the most reliable, efficient, and customer-friendly company
            in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

// Add required animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-pulse {
    animation: pulse 2s infinite;
  }
`;
document.head.appendChild(style);

export default MissionVisionSection;
