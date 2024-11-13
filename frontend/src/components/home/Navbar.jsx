import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../../assets/logo.png";
import { Outlet, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();

  const resourcesItems = [
    { title: 'Documentation', href: '#documentation' },
    { title: 'Tutorials', href: '#tutorials' },
    { title: 'Case Studies', href: '#case-studies' },
    { title: 'FAQs', href: '#faqs' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / window.innerHeight) * 100;
      setIsFixed(scrollPercent >= 20); // Fixed after 20% scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `w-full transition-all duration-300 ${isFixed ? 'fixed top-0 shadow-lg bg-white' : 'absolute bg-white'} z-50`;

  const linkClasses = `transition-colors duration-300 font-medium ${isFixed ? 'text-black hover:text-gray-600' : 'text-gray-800 hover:text-gray-600'}`;


  const buttonClasses = `transition-colors duration-300 px-6 py-2 rounded-md ${isFixed ? 'bg-[#1290ca] text-white hover:bg-[#1290ca]' : 'bg-[#1290ca] text-white hover:bg-[#1290ca]'}`;


  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-8xl mx-auto md:p-1 p-5">
          <div className="flex lg:pl-3 lg:justify-between md:justify-center w-full h-16 lg:h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 md:hidden lg:py-4  lg:block font-bold text-xl">
              <img src={logo} alt="Logo" className="lg:py-4 h-[1.5cm] lg:h-[3cm]" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center mr-7 space-x-8">
              <a href="/" className={linkClasses}>Home</a>
              <a href="/about" className={linkClasses}>About Us</a>
              <a href="/products" className={linkClasses}>Products</a>
              <a href="/resources" className={linkClasses}>Resources</a>
              {/* <a href="/blog" className={linkClasses}>Blogs</a> */}
              <a href="/contact-us" className={linkClasses}>Contact Us</a>
              <a href="" className={buttonClasses}>Inquiry</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ml-16">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`focus:outline-none ${isFixed ? 'text-black' : 'text-white'}`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white mt-2 rounded-lg shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="/" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">Home</a>
                <a href="/about" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">About Us</a>
                <a href="/products" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">Products</a>
                {/* <a href="/blog" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">Blogs</a> */}
                <a href="/resources" className={linkClasses}>Resources</a>
             
                <a href="/contact-us" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">Contact Us</a>
              </div>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
