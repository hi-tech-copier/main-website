"use client";
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePhoneClick = (e:any) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // eslint-disable-next-line react-hooks/immutability
      window.location.href = 'tel:+918885621001';
    } else {
      alert('Contact Information: Call for Inquiries\n\nContact Number: +918885621001\n\nMake a Whatsapp Call');
      openInNewTab('https://wa.me/918885621001');
    }
  };

  const openInNewTab = (url:string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  const handleScrollTo = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', action: () => window.open('/') },
    { label: 'Products', action: () => window.open('/Products') },
    { label: 'Services', action: () => handleScrollTo('services') },
    { label: 'Rentals', action: () => handleScrollTo('rentals') },
    { label: 'About', action: () => handleScrollTo('about') },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg py-2' 
            : 'bg-white bg-opacity-95 backdrop-blur-md py-3'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center gap-8">
              <button
                className="lg:hidden text-2xl text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <FaBars />
              </button>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.action}
                    className="relative text-gray-700 font-semibold text-sm uppercase tracking-wide hover:text-orange-500 transition-colors duration-200 group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Search Icon */}
              <button
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 text-gray-600 hover:text-orange-500 transition-all duration-200"
                aria-label="Search"
              >
                <FaSearch className="text-lg" />
              </button>

              {/* Call Now Button */}
              <button
                onClick={handlePhoneClick}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <FaPhone className="text-sm" />
                <span className="text-sm">Call Now</span>
              </button>

              {/* Mobile Call Icon */}
              <button
                onClick={handlePhoneClick}
                className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200"
                aria-label="Call now"
              >
                <FaPhone className="text-sm" />
              </button>

              {/* Cart Icon */}
              <button
                className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 text-gray-600 hover:text-orange-500 transition-all duration-200"
                aria-label="Shopping cart"
              >
                <IoMdCart className="text-2xl" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-gray-600 hover:text-red-500 transition-colors"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto py-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full text-left px-6 py-4 text-gray-700 font-semibold hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-orange-600 transition-all duration-200 border-b border-gray-100"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <button
              onClick={handlePhoneClick}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <FaPhone />
              <span>Call +91 888 562 1001</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;