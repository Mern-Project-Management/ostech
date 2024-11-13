import React, { useState, useEffect } from 'react';
import c1 from "../../assets/abott.png";
import c2 from "../../assets/be.png";
import c3 from "../../assets/kkc.png";
import c4 from "../../assets/mee.png";
import c5 from "../../assets/be.png";

const OurClientsPage = () => {
    const [images] = useState([
        { id: '1', title: 'Client 1', url: c1, alt: 'Client 1 Image' },
        { id: '2', title: 'Client 2', url: c2, alt: 'Client 2 Image' },
        { id: '3', title: 'Client 3', url: c3, alt: 'Client 3 Image' },
        { id: '4', title: 'Client 4', url: c4, alt: 'Client 4 Image' },
        { id: '5', title: 'Client 5', url: c5, alt: 'Client 5 Image' }
    ]);

    const [loading, setLoading] = useState(false);
    const [heading, setHeading] = useState('Our Clients');
    const [subheading, setSubheading] = useState('Here are some of our valued clients');

    const handleSplashEnd = () => {
        setLoading(false);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='flex flex-col justify-center mt-8 items-center mb-10'>
                <h2 className='lg:text-4xl md:text-3xl text-[#052852] text-lg font-bold'>{heading}</h2>
                <p className='w-[80%] text-center lg:text-lg mt-3 text-sm '>{subheading}</p>
            </div>

            <div className="w-[80%] mb-10 mx-auto p-2">
                <div className="slider-container">
                    <div className="slider">
                        {/* Duplicate the images for smooth looping */}
                        {[...images, ...images].map((image) => (
                            <div
                                key={image.id}
                                className="client-image relative flex justify-center items-center overflow-hidden rounded-lg"
                            >
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    className="lg:w-[60%] w-[15cm] h-full object-cover lg:p-3"
                                    onError={(e) => {
                                        e.target.src = `/images/placeholder.jpg`; 
                                    }}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex justify-center items-center">
                                    <h3 className="text-white font-medium text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {image.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurClientsPage;
