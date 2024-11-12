import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from "../../assets/logo.png";
import { Outlet, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isHome = location.pathname === '/';

  const navClasses = `w-full transition-all duration-300 ${
    isFixed ? 'fixed top-0 shadow-lg bg-white' : isHome ? 'absolute bg-transparent' : 'absolute bg-white'
  } z-50`;

  const linkClasses = `transition-colors duration-300 font-medium ${
    isFixed || !isHome ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'
  }`;

  const buttonClasses = `transition-colors duration-300 px-4 py-2 rounded-md ${
    isFixed || !isHome ? 'bg-blue-500 text-white hover:bg-blue-700' : 'bg-white text-black hover:bg-gray-100'
  }`;

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
              <a href="/blogs" className={linkClasses}>Blogs</a>
               {/* Resources Dropdown */}
              <div className="relative">
                <button onClick={() => toggleDropdown('resources')} className={linkClasses}>
                  Resources
                </button>
              

                {activeDropdown === 'resources' && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    {resourcesItems.map((item) => (
                      <a key={item.title} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href="/contact-us" className={linkClasses}>Contact Us</a>
            
              <a href="" className={buttonClasses}>Inquiry</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ml-16">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`focus:outline-none ${isFixed || !isHome ? 'text-black' : 'text-white'}`}
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
                <a href="/blog" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">Blogs</a>
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
