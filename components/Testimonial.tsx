/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from 'react';
import { FaStar, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';

const Testimonials = () => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Harish",
      role: "Long-term Customer",
      feedback: "I'M USING THIS PRINTER SINCE 2 YEAR. MACHINE IS TOO GOOD AND I HAVE COMPLETED 9 LAKHS COPYS AND MACHINE IS TOO GOOD AND SMOOTH. THANKS HITECH COPIER",
      image: "/assets/review_photos/harish.png",
      rating: 5,
    },
    {
      name: "Mohammed Zaffer Uddin",
      role: "M.M Stationary",
      feedback: "I'm Zafar from M.M Stationary just brand new condition 1st R.c Xerox Machine Brand new condition installed in my stationary super service and explanation is also good.",
      image: "/assets/review_photos/Mohammed Zaffer Uddin.png",
      rating: 5,
    },
    {
      name: "BHAVANI vani",
      role: "5 Year Customer",
      feedback: "I'm using xerox machine since 5 year service is too good and very prompt person thank you HITECH COPIER SOLUTION",
      image: "/assets/review_photos/BHAVANI vani.png",
      rating: 5,
    },
    {
      name: "Shaik Ismail",
      role: "Satisfied Customer",
      feedback: "One stop for printers and its service...Good people with good nature. Very polite and humble. A must visit for any printers or copiers related queries and solutions",
      image: "/assets/review_photos/Shaik Ismail.png",
      rating: 5,
    },
    {
      name: "Mahesh",
      role: "Business Owner",
      feedback: "Hello friends i have purchase xerox wc 5855 digital xerox machine from HITECH COPIER SOLUTION the machine is too good and service also prompt. i have completed 200000 copies",
      image: "/assets/review_photos/Mahesh.png",
      rating: 5,
    },
  ];

  const renderStars = (rating:any) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => <FaStar key={i} className="text-yellow-400" />);
  };

  const goToSlide = (index:any) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-16 animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('testimonials-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="testimonials-header"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-4">
            <IoSparkles className="text-orange-500" />
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            What people say about
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Hi-Tech Copier
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from our valued customers across Hyderabad and beyond
          </p>
        </div>

        {/* Trust Indicators */}
        <div 
          className={`flex flex-wrap justify-center gap-8 mb-16 animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('trust-indicators') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="trust-indicators"
        >
          <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
            <FaStar className="text-yellow-400 text-2xl" />
            <div>
              <div className="text-2xl font-black text-gray-900">5.0</div>
              <div className="text-xs text-gray-600">Average Rating</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
            <FaCheckCircle className="text-green-500 text-2xl" />
            <div>
              <div className="text-2xl font-black text-gray-900">1000+</div>
              <div className="text-xs text-gray-600">Happy Clients</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
            <IoSparkles className="text-orange-500 text-2xl" />
            <div>
              <div className="text-2xl font-black text-gray-900">15+</div>
              <div className="text-xs text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Desktop View - 3 Cards Grid */}
        <div 
          className={`hidden lg:grid lg:grid-cols-3 gap-8 mb-12 animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('testimonials-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="testimonials-grid"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <FaQuoteLeft className="text-6xl text-orange-500" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Feedback */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10 line-clamp-6">
                {testimonial.feedback}
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-orange-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-500 rounded-b-3xl"></div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div 
          className={`lg:hidden animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('testimonials-carousel') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="testimonials-carousel"
        >
          <div className="relative">
            {/* Main Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 min-h-[400px] flex flex-col">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <FaQuoteLeft className="text-6xl text-orange-500" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonials[activeIndex].rating)}
              </div>

              {/* Feedback */}
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                {testimonials[activeIndex].feedback}
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-orange-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition-all duration-300 z-10"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition-all duration-300 z-10"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-gradient-to-r from-orange-500 to-red-500' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className={`text-center mt-16 animate-on-scroll transition-all duration-1000 ${
            visibleItems.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          id="cta"
        >
          <div className="bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join Our Happy Customers Today!
              </h3>
              <p className="text-white text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Experience the same quality service that our customers rave about
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/918885621001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-orange-600 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Your Free Quote
                </a>
                <a
                  href="tel:+918885621001"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
                >
                  Call +91 888 562 1001
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;