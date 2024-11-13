import { Factory, Cog, Globe, Zap, Wrench, BarChart } from 'lucide-react';
import flip1 from "../../assets/flip1.jpg"
import flip2 from "../../assets/flip2.jpg"
import flip3 from "../../assets/flip3.jpg"
import flip4 from "../../assets/flip4.jpg"
import wc1 from "../../assets/whychoose1.gif"
import wc2 from "../../assets/whychoose2.gif"
import wc3 from "../../assets/whychoose3.gif"
import wc4 from "../../assets/whychoose4.gif"
import { useState, useEffect } from 'react'
const offerings = [
    {
        icon: wc1,
        title: "Custom Solutions",
        description: "Tailored roller bed conveyors to meet your specific industry requirements, ensuring optimal performance for conveying both light and heavy goods.",

    },
    {
        icon: wc2,
        title: "Versatility in Design",
        description: "Our roller conveyors come in both chain- and belt-driven models, providing flexibility in choosing the right conveyor system for your applications.",

    },
    {
        icon: wc3,
        title: "Varied Types Available",
        description: "Choose from five different types of roller conveyors—chain driven, belt driven, line shaft driven, accumulation, or non-powered (gravity)—offering versatility in handling transfers, diverters, and stops within your system.",

    },
    {
        icon: wc4,
        title: "Material Options",
        description: "Rollers are available in mild steel, galvanized, plastic, or stainless steel, allowing you to select the most suitable material for your specific operational environment.",

    },

];

export default function WhyChooseUs() {
    const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
    return (

        <div className="ml-4">
            {/* above section  */}
            <section className=" ">
                <div className='flex flex-col justify-center items-start'>
                    <div className='p-4 '>
                        <h2 className='text-3xl font-bold text-[#052852]'>Why Choose Us</h2>
                    </div>

                    <div className='max-w-5xl p-3  text-justify' >
                        <p>Choose OSTECH for over 20 years of global expertise in machine building. With a foundation in quality workmanship from Gujarat, we prioritize teamwork, dedication, and excellence throughout our workflow. Our customer-centric approach ensures the design and construction of machinery that not only meets but exceeds industry standards, guaranteeing your satisfaction. Trust OSTECH for a reliable partner in delivering top-notch solutions.</p>
                    </div>
                </div>
            </section>

            {/* bottom section  */}
            <section className=" mb-10 mt-10 ">
      <div className="container mx-auto px-4">
     
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`bg-card  shadow-lg hover:shadow-md hover:shadow-[#1290ca] shadow-[#1290ca]/50  p-6 rounded-lg  transition-all duration-500 ease-in-out transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex justify-center">
                    <img src={offering.icon} alt="" className='w-[30%]' />
                </div>
                <h3 className="text-xl font-semibold mb-2">{offering.title}</h3>
                <p className="text-muted-foreground">{offering.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
            </div>



    );
}
