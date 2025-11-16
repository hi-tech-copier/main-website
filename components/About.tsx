"use client";
import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaTools, FaWrench, FaDollarSign, FaShieldAlt, FaUsers, FaAward, FaClock, FaCheckCircle, FaStar, FaTruck, FaHeadset } from 'react-icons/fa';

const About = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [activeTab, setActiveTab] = useState('mission');

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

  const features = [
    {
      icon: FaShoppingCart,
      title: 'Premium Sales',
      description: 'Curated selection of top-tier copier machines from global industry leaders.',
      badge: 'Best Sellers'
    },
    {
      icon: FaTools,
      title: 'Full Maintenance',
      description: 'Proactive servicing plans to maximize uptime and machine longevity.',
      badge: 'Popular'
    },
    {
      icon: FaWrench,
      title: 'Certified Repairs',
      description: 'Factory-trained technicians using authentic OEM parts exclusively.',
      badge: 'Warranty'
    },
    {
      icon: FaDollarSign,
      title: 'Smart Pricing',
      description: 'Competitive rates on genuine components with transparent pricing.',
      badge: 'Best Value'
    }
  ];

  const benefits = [
    { icon: FaTruck, text: 'Free Installation & Setup' },
    { icon: FaHeadset, text: '24/7 Customer Support' },
    { icon: FaShieldAlt, text: 'Extended Warranty Options' },
    { icon: FaStar, text: 'Certified Technicians' }
  ];

  const stats = [
    { icon: FaAward, number: '15+', label: 'Years in Business', color: 'orange' },
    { icon: FaUsers, number: '1,000+', label: 'Clients Served', color: 'blue' },
    { icon: FaCheckCircle, number: '50K+', label: 'Machines Serviced', color: 'green' },
    { icon: FaStar, number: '4.9/5', label: 'Customer Rating', color: 'yellow' }
  ];

  const tabContent: { [key: string]: { title: string; content: string } } = {
    mission: {
      title: 'Our Mission',
      content: 'To revolutionize office productivity by delivering premium copier solutions that combine cutting-edge technology with unmatched service excellence. We believe every business deserves reliable equipment backed by genuine expertise.'
    },
    values: {
      title: 'Core Values',
      content: 'Integrity, transparency, and customer-centricity form the foundation of everything we do. We refuse to compromise on quality or honesty, ensuring every interaction builds lasting trust with our clients.'
    },
    difference: {
      title: 'What Sets Us Apart',
      content: 'Unlike competitors focused solely on transactions, we build partnerships. Our technicians never recommend unnecessary repairs, our pricing is always transparent, and our service guarantees speak for themselves.'
    }
  };

  return (
    <section id="about" className="relative bg-white">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div 
            className={`max-w-4xl mx-auto text-center animate-on-scroll transition-all duration-1000 ${
              visibleItems.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            id="hero"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Trusted Since 2008</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Enterprise-Grade
              <span className="block mt-2 bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
                Copier Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Empowering businesses with premium equipment, expert service, and unwavering commitment to excellence for over 15 years.
            </p>

            {/* Benefits Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  <benefit.icon className="text-orange-400 text-sm" />
                  <span className="text-white text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918885621001"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="tel:+918885621001"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Call +91 888 562 1001
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border-y border-orange-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div 
            className={`grid grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll transition-all duration-1000 ${
              visibleItems.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            id="stats"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${
                  stat.color === 'orange' ? 'from-orange-400 to-red-400' :
                  stat.color === 'blue' ? 'from-blue-400 to-cyan-400' :
                  stat.color === 'green' ? 'from-green-400 to-emerald-400' :
                  'from-yellow-400 to-orange-400'
                } mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="text-2xl text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-1">{stat.number}</div>
                <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* About Tabs */}
        <div 
          className={`max-w-6xl mx-auto mb-20 animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('tabs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="tabs"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            {/* Tab Headers */}
            <div className="flex border-b border-slate-200 bg-slate-50">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-white text-orange-600 border-b-2 border-orange-600'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {tabContent[tab].title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-8 lg:p-12">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></span>
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {tabContent[activeTab].content}
                </p>
              </div>

              {activeTab === 'mission' && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <FaCheckCircle className="text-orange-600 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Quality Assured</div>
                      <div className="text-sm text-slate-600">Only authentic parts and equipment</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <FaCheckCircle className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Rapid Response</div>
                      <div className="text-sm text-slate-600">Same-day service available</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div 
            className={`text-center mb-12 animate-on-scroll transition-all duration-1000 ${
              visibleItems.has('features-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            id="features-header"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              End-to-end solutions designed to keep your business running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`animate-on-scroll group transition-all duration-1000 ${
                  visibleItems.has(`feature-${idx}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                id={`feature-${idx}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 h-full group-hover:border-orange-300">
                  {/* Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full">
                    {feature.badge}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <feature.icon className="text-2xl text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Section */}
        <div 
          className={`animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('guarantee') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="guarantee"
        >
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 rounded-3xl p-10 lg:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-500 mb-6 shadow-lg">
                <FaShieldAlt className="text-3xl text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry-Leading Service Guarantee
              </h2>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Coverage for <span className="text-orange-400 font-bold">50,000 copies</span> or <span className="text-orange-400 font-bold">3 months</span> on all B&W machines — whichever comes first. Your satisfaction is our commitment.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {['No Hidden Fees', 'Genuine Parts Only', 'Expert Technicians'].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-2 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                    <FaCheckCircle className="text-orange-400 text-xl flex-shrink-0" />
                    <span className="text-white font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/918885621001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Claim Your Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;