"use client";
import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaStar, FaAward, FaShieldAlt } from 'react-icons/fa';

const Brands = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [activeIndex, setActiveIndex] = useState(0);

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

  const brands = [
    {
      name: "Canon",
      tagline: "Imaging Excellence",
      description: "Global leader in imaging innovation, delivering professional-grade cameras, printers, and copiers trusted by enterprises worldwide for unmatched reliability and cutting-edge technology.",
      image: "/assets/Canon-logo.jpg",
      features: ["4K Imaging", "Cloud Integration", "Energy Star Certified"],
      stats: { quality: "98%", uptime: "99.9%", warranty: "3 Years" },
      color: "red",
      gradient: "from-red-500 to-red-700"
    },
    {
      name: "Xerox",
      tagline: "Document Innovation",
      description: "Pioneer in document management solutions, offering industry-leading printers and copiers with advanced workflow automation, security features, and enterprise-grade performance.",
      image: "/assets/Xerox-logo.png",
      features: ["Smart Workflow", "Security Suite", "Mobile Print"],
      stats: { quality: "97%", uptime: "99.8%", warranty: "2 Years" },
      color: "blue",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      name: "Kyocera",
      tagline: "Sustainable Solutions",
      description: "Eco-conscious technology leader providing durable, long-life imaging systems with lowest TCO. Pioneering sustainable printing without performance compromise.",
      image: "/assets/kyocera-logo.jpeg",
      features: ["Eco-Friendly", "Low TCO", "Long-Life Components"],
      stats: { quality: "96%", uptime: "99.7%", warranty: "3 Years" },
      color: "green",
      gradient: "from-green-500 to-green-700"
    }
  ];

  const benefits = [
    { icon: FaAward, text: "Authorized Dealer", color: "orange" },
    { icon: FaShieldAlt, text: "Genuine Products", color: "blue" },
    { icon: FaStar, text: "Expert Support", color: "purple" },
    { icon: FaCheckCircle, text: "Best Pricing", color: "green" }
  ];

  return (
    <section id="brands" className="relative bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('brands-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="brands-header"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-4">
            <FaStar className="text-orange-500 animate-pulse" />
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Premium Partners</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            World-Class Brands
            <span className="block mt-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
              We Represent
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Authorized dealer for industry-leading brands, delivering premium equipment backed by expert service and genuine warranties.
          </p>
        </div>

        {/* Benefits Bar */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mb-16 animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="benefits"
        >
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 ${
                benefit.color === 'orange' ? 'border-orange-200 hover:border-orange-400' :
                benefit.color === 'blue' ? 'border-blue-200 hover:border-blue-400' :
                benefit.color === 'purple' ? 'border-purple-200 hover:border-purple-400' :
                'border-green-200 hover:border-green-400'
              }`}
            >
              <div className={`p-2 rounded-lg bg-gradient-to-br ${
                benefit.color === 'orange' ? 'from-orange-400 to-red-400' :
                benefit.color === 'blue' ? 'from-blue-400 to-cyan-400' :
                benefit.color === 'purple' ? 'from-purple-400 to-pink-400' :
                'from-green-400 to-emerald-400'
              }`}>
                <benefit.icon className="text-white text-sm" />
              </div>
              <span className="text-slate-700 font-semibold text-sm">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.has(`brand-${idx}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              id={`brand-${idx}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div 
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200 h-full cursor-pointer"
                onMouseEnter={() => setActiveIndex(idx)}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Brand Badge */}
                  <div className={`absolute top-4 right-4 px-4 py-2 bg-gradient-to-r ${brand.gradient} text-white font-bold text-sm rounded-full shadow-lg z-20`}>
                    Authorized
                  </div>

                  {/* Tagline Overlay */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="text-white font-bold text-2xl mb-1">{brand.name}</div>
                    <div className="text-white/90 text-sm font-medium">{brand.tagline}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {brand.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Features</div>
                    <div className="flex flex-wrap gap-2">
                      {brand.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1 px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-700">
                          <FaCheckCircle className={`text-${brand.color}-500 text-xs`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-xl font-bold text-slate-900">{brand.stats.quality}</div>
                      <div className="text-xs text-slate-500">Quality</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-slate-900">{brand.stats.uptime}</div>
                      <div className="text-xs text-slate-500">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-slate-900">{brand.stats.warranty}</div>
                      <div className="text-xs text-slate-500">Warranty</div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${brand.gradient} group-hover:w-full transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Brand Spotlight */}
        <div 
          className={`animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('spotlight') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="spotlight"
        >
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left: Image */}
              <div className="relative h-80 lg:h-auto">
                <img
                  src={brands[activeIndex].image}
                  alt={brands[activeIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-6">
                    <div className="text-5xl font-bold mb-2">{brands[activeIndex].name}</div>
                    <div className="text-xl text-slate-300">{brands[activeIndex].tagline}</div>
                  </div>
                </div>
              </div>

              {/* Right: Info */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6 w-fit">
                  <FaStar className="text-orange-400" />
                  <span className="text-orange-400 font-semibold text-sm">Featured Brand</span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  Why Choose {brands[activeIndex].name}?
                </h3>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {brands[activeIndex].description}
                </p>

                <div className="space-y-3 mb-8">
                  {brands[activeIndex].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${brands[activeIndex].gradient} flex items-center justify-center flex-shrink-0`}>
                        <FaCheckCircle className="text-white text-xs" />
                      </div>
                      <span className="text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/918885621001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 text-center"
                  >
                    Request Quote
                  </a>
                  <a
                    href="tel:+918885621001"
                    className="px-6 py-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white hover:text-slate-900 transition-all duration-300 text-center"
                  >
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-16 animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('bottom-cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="bottom-cta"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border-2 border-orange-200">
            <div className="text-slate-900 text-xl font-bold">
              Need help choosing the right brand for your business?
            </div>
            <a
              href="https://wa.me/918885621001"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Get Expert Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;