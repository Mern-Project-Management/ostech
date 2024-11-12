import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import slider3 from "../../assets/about5.jpg";  // Ensure this is the correct path

const VideoBannerSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${slider3})`,  // Use the imported image here
        }}
      >
        {/* Blue overlay with transparency */}
        <div className="absolute inset-0 bg-blue-900/60" />

        {/* Content container */}
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          {/* Small line above title */}
          <div className="w-12 h-0.5 bg-blue-400 mb-6" />
          
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We Leverage?
          </h2>

          {/* Watch text and play button */}
          <div className="flex flex-col items-center">
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="w-20 h-20 rounded-full bg-white/10 hover:bg-white/20 
                       flex items-center justify-center mb-4 transition-all
                       border border-white/30 hover:scale-110 group"
            >
              {/* Play icon with glow effect */}
              <div className="w-0 h-0 border-t-[15px] border-t-transparent 
                            border-l-[25px] border-l-white 
                            border-b-[15px] border-b-transparent
                            ml-2 group-hover:border-l-blue-200
                            transition-colors relative"
              >
                <div className="absolute inset-0 blur-sm opacity-75 scale-150 bg-white rounded-full" />
              </div>
            </button>
            <p className="text-sm italic opacity-90">
              Watch our latest development
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onClose={() => setIsVideoOpen(false)}>
  <DialogContent className="xl:w-[600px] h-[40vh] p-0 overflow-hidden">
    <DialogTitle className="p-6">Our Latest Development</DialogTitle>
    <div className="relative pb-[56.25%] h-0 w-full">
      <iframe
        width="100%"  // Take full width of the container
        height="100%"  // Take full height of the container
        src="https://www.youtube.com/embed/ytW2bhgKMn4?si=VaNiOKDICqrmtcQG"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      ></iframe>
    </div>
  </DialogContent>
</Dialog>

    </>
  );
};

export default VideoBannerSection;
