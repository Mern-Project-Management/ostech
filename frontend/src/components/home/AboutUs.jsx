import React, { useState, useEffect, useRef } from 'react';
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/about3.jpg";
import about4 from "../../assets/about4.jpg";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutUs = () => {
    const statsRef1 = useRef(null);
    const statsRef = useRef(null);
    const headingRef = useRef(null);
    const descriptionRef = useRef(null);

    // Initialize GSAP and ScrollTrigger
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Only apply animations if the screen is larger than 'sm' (640px)
        if (window.innerWidth > 640) {
            // Animate Heading
            gsap.fromTo(headingRef.current,
                { opacity: 0, y: -50 },
                {
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
                }
            );
        }
    }, []);

    return (
        <div className="relative w-full  -mt-6  bg-white overflow-hidden">
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50m-40 0a40,40 0 1,0 80,0a40,40 0 1,0 -80,0' fill='none' stroke='%23333' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '100px 100px'
                }}
            ></div>
            {/* Hero Section */}
            <div className="flex justify-center w-[98%] mx-auto gap-10 pt-10 items-center p-6 ">
                <div ref={headingRef} className="space-y-6 w-[60%]">
                    <div className="space-y-2">
                        <p className="text-lg text-[#1290CA] mb-4 font-bold">WHAT WE DO</p>
                        <p className="lg:text-4xl text-2xl md:text-3xl font-bold text-[#052852] mb-6">
                            Transforming Ideas With Innovations
                        </p>
                    </div>
                    <p className="text-xl font-bold text-gray-700">Safety, Quality, Excellence.</p>
                    <p className="text-gray-600 mt-2 max-w-4xl">
                        With our excellent reputation, we are proud to be the best low-cost SPM
                        (Special Purpose Machineries) builder for Detergent, Pharmaceuticals,
                        Paints, FMCG, and Chemical industries worldwide. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dignissimos delectus illo quas placeat minima deserunt cumque, harum porro cupiditate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati soluta sequi corrupti praesentium ullam optio culpa hic excepturi quidem maxime maiores molestiae amet dolor natus earum, neque vero aspernatur illum?
                        <br />
                        <span> Founded by the dynamic Mr. Anil Singh, OSTECH has been serving the global market for 20+ years.</span>
                    </p>
                    <button className="bg-[#052852] p-2 rounded text-white px-4 hover:border hover:bg-white hover:text-black transition-all duration-200">
                        Learn More
                    </button>
                </div>
                <div className="relative w-[40%] aspect-video">
                    <iframe
                        className="w-full h-full object-cover rounded-lg"
                        src="https://www.youtube.com/embed/ytW2bhgKMn4?si=VaNiOKDICqrmtcQG"
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* Features Grid */}
            <div className="flex  justify-center  w-[98%] mx-auto items-center gap-8 p-6  ">
                {/* Power Home */}
                <div className='flex justify-center items-center w-1/2 gap-10'>
                    {/* First Section */}
                    <div className="space-y-4 relative group w-full">
                        <div className="relative h-[30vh]"> {/* Set both divs to same height */}
                            <img
                                src={about2}
                                alt="NIO Power Home Charging"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            {/* Black overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#1290ca]/10 to-[#1290ca]/10 group-hover:translate-y-0 translate-y-full transition-all duration-300"></div>
                        </div>
                        <div className='px-5'>
                            <h3 className="font-bold text-black">NIO Power Home</h3>
                            <p className="text-sm text-black">Wake up and hit the road with full battery</p>
                        </div>
                    </div>

                    {/* Second Section */}
                    <div className="space-y-4 relative group w-full">
                        <div className="relative h-[30vh]"> {/* Ensure this div also has the same height */}
                            <img
                                src={about3}
                                alt="NIO Power Swap Station"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            {/* Black overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#1290ca]/10 to-[#1290ca]/10 group-hover:translate-y-0 translate-y-full transition-all duration-300"></div>
                        </div>
                        <div className='px-5'>
                            <h3 className="font-bold text-black">Power Swap Station</h3>
                            <p className="text-sm text-black">Automatic battery swap in just a short coffee break</p>
                        </div>
                    </div>
                </div>

                {/* Power Mobile */}
                <div className="space-y-4 relative group w-1/2">
                        <div className="relative h-[30vh]"> {/* Set both divs to same height */}
                            <img
                                src={about4}
                                alt="NIO Power Home Charging"
                                className="w-full h-full object-cover "
                            />
                            {/* Black overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#1290ca]/10 to-[#1290ca]/10 group-hover:translate-y-0 translate-y-full transition-all duration-300"></div>
                        </div>
                        <div className='px-5'>
                            <h3 className="font-bold text-black">NIO Power Home</h3>
                            <p className="text-sm text-black">Wake up and hit the road with full battery</p>
                        </div>
                    </div>
            </div>

        </div>
    );
};

export default AboutUs;
