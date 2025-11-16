/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoSparkles, IoRocketSharp } from 'react-icons/io5';

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebookF, url: 'https://www.facebook.com/people/Xerox-Machines-sales-and-service/100063738321138', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: FaYoutube, url: 'https://www.youtube.com/channel/UCdgZOHjQ0V34QnO4LXWvD5w?sub_confirmation=1', label: 'YouTube', color: 'hover:bg-red-600' },
    { icon: FaXTwitter, url: 'https://x.com/hitechcopier', label: 'Twitter', color: 'hover:bg-gray-900' },
    { icon: FaInstagram, url: 'https://www.instagram.com/hitechcopier', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: FaLinkedinIn, url: 'https://www.linkedin.com/company/hi-tech-copier', label: 'LinkedIn', color: 'hover:bg-blue-700' },
  ];

  const quickLinks = [
    { label: 'Home', action: () => handleScrollTo('home') },
    { label: 'Products', action: () => window.open('/Products') },
    { label: 'Services', action: () => handleScrollTo('services') },
    { label: 'Rentals', action: () => handleScrollTo('rentals') },
    { label: 'About Us', action: () => handleScrollTo('about') },
    { label: 'Testimonials', action: () => handleScrollTo('testimonials') },
  ];

  const handlePhoneClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = 'tel:+918885621001';
    } else {
      window.open('https://wa.me/918885621001', '_blank', 'noopener,noreferrer');
    }
  };

  const handleScrollTo = (id:any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918885621001', '_blank', 'noopener,noreferrer');
  };

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/AaKHxodpF8mxhXKNA', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-black mb-2">
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Hi-Tech
                  </span>
                  <span className="text-white"> Copier</span>
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Your trusted partner for Xerox machine Sales, Services, Rentals, and Repairs since 2008.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30 text-xs font-semibold text-orange-400">
                  15+ Years
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30 text-xs font-semibold text-orange-400">
                  1000+ Clients
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30 text-xs font-semibold text-orange-400">
                  24/7 Support
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={link.action}
                      className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-orange-500 group-hover:w-4 transition-all duration-300"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></span>
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={handlePhoneClick}
                    className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                      <FaPhone className="text-sm" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-500">Call Us</div>
                      <div className="font-semibold">+91 888 562 1001</div>
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-all duration-300">
                      <FaWhatsapp className="text-lg" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-500">WhatsApp</div>
                      <div className="font-semibold">Chat Now</div>
                    </div>
                  </button>
                </li>
                <li>
                  <a
                    href="mailto:HITECHCOPIERSOLUTION1001@gmail.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                      <FaEnvelope className="text-sm" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-500">Email</div>
                      <div className="font-semibold text-sm break-all">HITECHCOPIER...</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Location & Social */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></span>
                Visit Us
              </h4>
              <div className="space-y-6">
                <button
                  onClick={handleLocationClick}
                  className="group text-left"
                >
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-orange-400 transition-colors duration-300">
                    Shop No: 3, 1-766, near Bharat petrol, Tirmala Arcade, Nimboliadda, Kachiguda, Hyderabad, Telangana 500027
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-orange-400 group-hover:gap-3 transition-all duration-300">
                    <FaMapMarkerAlt />
                    <span className="text-sm font-semibold">View on Google Maps</span>
                  </div>
                </button>

                {/* Social Media */}
                <div>
                  <h5 className="text-sm font-semibold text-gray-400 mb-3">Follow Us</h5>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                        aria-label={social.label}
                      >
                        <social.icon className="text-lg" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} <span className="text-orange-400 font-semibold">Hi-Tech Copier Solutions</span>. All rights reserved.
                </p>
              </div>

              {/* Developer Credit - HIGHLIGHTED */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
                <a
                  href="https://AdnanTheCoder.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-3 px-6 py-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-orange-500 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <IoSparkles className="text-orange-400 text-xl animate-pulse" />
                    <div className="text-left">
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Crafted by</div>
                      <div className="text-lg font-black bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                        Adnan
                      </div>
                    </div>
                    <IoRocketSharp className="text-orange-400 text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;