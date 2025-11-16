"use client";
import React, { useEffect, useState } from 'react';
import { FaTools, FaCalendarCheck, FaShieldAlt, FaStar, FaCheckCircle, FaClock, FaAward } from 'react-icons/fa';

const Services = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [activeService, setActiveService] = useState(0);

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

  const services = [
    {
      icon: FaTools,
      title: "Expert Repair",
      description: "Rapid diagnostics and certified repairs to minimize downtime and restore peak performance.",
      image: "/assets/repair.png",
      gradient: "from-orange-500 to-red-500",
      features: ["Quick Turnaround", "Genuine Parts", "Certified Technicians"]
    },
    {
      icon: FaCalendarCheck,
      title: "Periodic Maintenance",
      description: "Proactive servicing schedules that prevent issues and extend equipment lifespan.",
      image: "/assets/periodicService.jpg",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Scheduled Checkups", "Performance Optimization", "Priority Support"]
    },
    {
      icon: FaShieldAlt,
      title: "Warranty Service",
      description: "Comprehensive coverage protecting your investment with guaranteed peace of mind.",
      image: "/assets/warantyservice.jpg",
      gradient: "from-purple-500 to-pink-500",
      features: ["50K Copies Coverage", "3-Month Protection", "No Hidden Costs"]
    },
    {
      icon: FaStar,
      title: "Full Service Package",
      description: "All-inclusive solution combining repair, maintenance, and optimization in one package.",
      image: "/assets/fullservice.webp",
      gradient: "from-green-500 to-emerald-500",
      features: ["Complete Care", "Best Value", "Unlimited Support"]
    }
  ];

  const benefits = [
    { icon: FaClock, text: "24/7 Support", color: "orange" },
    { icon: FaAward, text: "Certified Team", color: "blue" },
    { icon: FaCheckCircle, text: "Quality Guaranteed", color: "green" }
  ];

  return (
    <section id="services" className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-16 animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="header"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4 backdrop-blur-sm">
            <FaStar className="text-orange-400 animate-pulse text-sm" />
            <span className="text-orange-400 font-semibold text-xs uppercase tracking-wider">What We Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Service Excellence
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Comprehensive solutions to keep your business running smoothly
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
            <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300">
              <benefit.icon className={`${
                benefit.color === 'orange' ? 'text-orange-400' :
                benefit.color === 'blue' ? 'text-blue-400' :
                'text-green-400'
              } text-sm`} />
              <span className="text-white text-sm font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`animate-on-scroll transition-all duration-1000 ${
                visibleItems.has(`service-${idx}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              id={`service-${idx}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              onMouseEnter={() => setActiveService(idx)}
            >
              <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-500 h-full cursor-pointer">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg z-20 transform group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white text-xl" />
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-white font-bold text-xl">{service.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1 px-2 py-1 bg-slate-700/50 rounded-lg text-xs text-slate-300">
                        <FaCheckCircle className="text-green-400 text-xs" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Border */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Service Spotlight */}
        <div 
          className={`animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('spotlight') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="spotlight"
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${services[activeService].gradient} flex items-center justify-center shadow-2xl`}>
                    {React.createElement(services[activeService].icon, { className: "text-white text-3xl" })}
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <FaStar className="text-orange-400" />
                  <span className="text-orange-400 font-semibold text-xs uppercase">Featured Service</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {services[activeService].title}
                </h3>

                <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                  {services[activeService].description}
                </p>

                <div className="space-y-2 mb-6">
                  {services[activeService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-400 text-sm flex-shrink-0" />
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/918885621001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg shadow-lg hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 text-sm"
                  >
                    Book Service
                  </a>
                  <a
                    href="tel:+918885621001"
                    className="px-6 py-2.5 bg-white/10 border border-white/20 text-white font-bold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 text-sm"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-12 animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="cta"
        >
          <div className="inline-flex flex-col items-center gap-3 p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl backdrop-blur-sm">
            <div className="text-white text-lg font-bold">
              Need a custom service plan?
            </div>
            <a
              href="https://wa.me/918885621001"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg shadow-lg hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 text-sm flex items-center gap-2"
            >
              Get Custom Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;