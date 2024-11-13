
import { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import IMG from "../../assets/about5.jpg"
import WhatWeOffer from './WhatWeOffer'
const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of digital services including web design, app development, SEO optimization, and digital marketing strategies."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex app could take 3-6 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes, we offer various support and maintenance packages to ensure your digital assets remain up-to-date and perform optimally after launch."
  },
  {
    question: "What makes your company different from others?",
    answer: "Our unique blend of creative design, technical expertise, and strategic thinking sets us apart. We don't just build products; we craft digital experiences that drive real business results."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-gray-50 py-12 relative md:py-20">
    <div
      className="absolute inset-0 opacity-5 z-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50m-40 0a40,40 0 1,0 80,0a40,40 0 1,0 -80,0' fill='none' stroke='%23333' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }}
    ></div>
  
    <div className="container relative z-10 mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We offer Industrial Solutions that are reliable, efficient, safe, and sustainable.
            </h2>
            <p className="text-xl text-gray-600  mx-auto">
              Ostech delivers world-class engineering solutions, combining cutting-edge machinery with expert problem-solving to meet your industrial needs.
            </p>
          </div>
  
          {/* FAQs */}
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
  
        {/* Right Section */}
        <div className="mt-8 flex items-center justify-center relative top-10 md:mt-0">
          <img
            src={IMG}
            alt="FAQ Illustration"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  
    {/* Additional Component */}
    <WhatWeOffer />
  </section>
  

  )
}
