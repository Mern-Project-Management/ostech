import { Factory, Cog, Globe, Zap, Wrench, BarChart } from 'lucide-react';
import flip1 from "../../assets/flip1.jpg"
import flip2 from "../../assets/flip2.jpg"
import flip3 from "../../assets/flip3.jpg"
import flip4 from "../../assets/flip4.jpg"
const offerings = [
  {
    icon: <Factory className="w-12 h-12 text-primary" />,
    title: "HIGH-END AND LOW-COST AUTOMATION",
    description: "Redefining industry standards through cutting-edge machinery and innovative industrial solutions, we are committed to delivering excellence and driving success for your business with the finest technology and expertise.",
    image: flip1
  },
  {
    icon: <Cog className="w-12 h-12 text-primary" />,
    title: "IN-HOUSE DESIGNING AND MANAUFACTURING",
    description: "Our commitment lies in providing precise and tailored solutions that perfectly align with our clients' requirements. With a focus on accuracy, we ensure satisfaction by delivering results that meet and exceed expectations.",
    image: flip2
  },
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: "INCREASE EFFICIENCY",
    description: "Pioneering the forefront of the engineering business, we stand as the world's leader, dedicated to innovation, excellence, and driving global advancements.",
    image: flip3
  },
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "Ostech Has Potential To Find Efficient Solutions:",
    description: "Ostech is poised to discover and implement efficient solutions, showcasing its potential to lead in problem-solving and innovation within various industries.",
    image: flip4
  },
 
];

export default function WhatWeOffer() {
  return (
    <section className="bg-gray-50 mt-10">
    <div className="container mx-auto px-4 flex justify-center">
    <div className="grid grid-cols-2 gap-10 w-full sm:w-[100vh]">


        {offerings.map((offering, index) => (
          <div
            key={index}
            className="flip relative overflow-hidden rounded-lg shadow-lg"
          >
            {/* Front side */}
            <div
              className="front w-full h-96 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${offering.image}) ` }}
            >
              {/* Overlay Title */}
              <div className="absolute inset-0 flex-wrap  bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-2xl font-semibold uppercase text-center text-white">{offering.title}</h3>
              </div>
            </div>
  
            {/* Back side */}
            <div className="back p-6 bg-gray-800">
              <h3 className="text-2xl font-semibold text-white mb-2">{offering.title}</h3>
              <p className="text-white">{offering.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  
  
  );
}
