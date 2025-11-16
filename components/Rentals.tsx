"use client";
import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaRocket, FaShieldAlt, FaClock, FaTools, FaStar, FaTrophy, FaChartLine, FaHeadset } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';

const Rentals = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const advantages = [
    { icon: FaCheckCircle, text: 'No Investment', color: 'text-green-400' },
    { icon: FaCheckCircle, text: 'No Maintenance charges', color: 'text-green-400' },
    { icon: FaCheckCircle, text: 'No Risk & No Surprise Bills', color: 'text-blue-400' },
    { icon: FaCheckCircle, text: 'Low Copy Cost & High Copy Quality', color: 'text-purple-400' },
    { icon: FaCheckCircle, text: 'Free Upgrade of Latest Technology', color: 'text-orange-400' },
    { icon: FaCheckCircle, text: 'Replacement of Copier every Two years', color: 'text-pink-400' },
    { icon: FaCheckCircle, text: 'Rent is inclusive of all Spares & Consumables', color: 'text-cyan-400' }
  ];

  const bonusFeatures = [
    { icon: FaRocket, text: 'Express Service' },
    { icon: FaTools, text: 'Free Operator&apos;s training' },
    { icon: FaShieldAlt, text: 'Free Delivery in Hyderabad' },
    { icon: FaChartLine, text: 'High Speed Machines - 20 ppm to 70 ppm' },
    { icon: FaTrophy, text: 'Heavy Print Capacity - Upto 1 Lakh copies per day' }
  ];

  const whyChooseUs = [
    { icon: FaStar, text: 'Skilled technicians' },
    { icon: FaTrophy, text: 'Largest Inventory of Digital Copiers & Printers' },
    { icon: FaTools, text: 'Largest Inventory for Spares & Consumables' },
    { icon: FaClock, text: 'On time Delivery, Installation and support' },
    { icon: FaShieldAlt, text: '100% Service satisfaction' }
  ];

  return (
    <section id="rentals" className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Header */}
        <div 
          className={`text-center mb-16 animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('rentals-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="rentals-header"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-full mb-6 border border-orange-500/30">
            <IoSparkles className="text-orange-400 text-xl" />
            <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">Premium Rental Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
              Rentals
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            When it comes to renting office equipment in <span className="text-orange-400 font-bold">Hyderabad</span> and across <span className="text-orange-400 font-bold">Andhra Pradesh</span> and <span className="text-orange-400 font-bold">Telangana</span>, Hi-Tech Copier Solutions is your go-to choice. We specialize in providing top-notch photocopiers, always well-maintained and equipped with the latest technology. Whether you need a photocopier for a short-term project or a long-term rental plan, you can count on us for reliability and quality. Partner with Hi-Tech Copier Solutions and experience the difference in office equipment rental.
          </p>
        </div>

        {/* Rental Advantages */}
        <div 
          className={`mb-20 animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('advantages-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="advantages-grid"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <FaRocket className="text-orange-500" />
              Rental Advantages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 border border-gray-700/30"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <advantage.icon className={`text-3xl ${advantage.color} flex-shrink-0 mt-1`} />
                  <span className="text-lg text-gray-200 font-medium">{advantage.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* With this also get */}
        <div 
          className={`mb-20 animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('bonus-features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="bonus-features"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            With this <span className="text-orange-400">also get</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">Premium features included with your rental</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {bonusFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-center hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-gray-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <feature.icon className="text-3xl text-white" />
                  </div>
                  <p className="text-white font-semibold">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reasons for Opting Hi-Tech */}
        <div 
          className={`mb-20 animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('why-us') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="why-us"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-1 shadow-2xl">
            <div className="bg-gray-900 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                <span className="text-white">Reasons for Opting </span>
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Hi-Tech Copier Solutions</span>
              </h2>
              <p className="text-gray-400 text-center mb-12 text-lg">Why businesses trust us</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {whyChooseUs.map((reason, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                  >
                    <reason.icon className="text-5xl text-orange-400 mb-4" />
                    <p className="text-white font-semibold">{reason.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Convenient Rental Packages */}
        <div 
          className={`mb-20 animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('packages') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="packages"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Convenient <span className="text-orange-400">Rental Packages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Once a month payment with flexible rental schemes.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div 
          className={`animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('contact-cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="contact-cta"
        >
          <div className="bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative z-10">
              <FaHeadset className="text-7xl text-white mx-auto mb-6 animate-bounce" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Need More Information?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Please feel free to contact, if you need any further information.
              </p>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto mb-8 border border-white/20">
                <p className="text-white text-2xl font-bold mb-4">Mohammad Jaffar Ahmed</p>
                <div className="space-y-3 text-white">
                  <p className="text-xl">
                    <a href="tel:+918885621001" className="hover:text-yellow-200 transition-colors font-semibold">
                      📞 +91 8885621001
                    </a>
                  </p>
                  <p className="text-base text-white/80">(10am to 8pm Monday to Saturday)</p>
                  <p className="text-xl">
                    <a href="mailto:HITECHCOPIERSOLUTION1001@gmail.com" className="hover:text-yellow-200 transition-colors break-all">
                      ✉️ HITECHCOPIERSOLUTION1001@gmail.com
                    </a>
                  </p>
                  <p className="text-base text-white/80">Sunday & General holiday closed.</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="https://wa.me/918885621001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-orange-600 font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  WhatsApp Now
                </a>
                <a
                  href="tel:+918885621001"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
              
              <p className="text-white/90 text-lg italic">
                Thanking you and assuring you of our prompt and best services at all times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rentals;