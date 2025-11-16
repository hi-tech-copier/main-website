/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState, useRef } from 'react';
import { FaWhatsapp, FaVolumeUp, FaVolumeMute, FaPhone, FaShoppingCart } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';

const FlipWords = ({ words, className }:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={`inline-block ${className}`}>
      <span className="inline-block animate-[fadeInUp_0.6s_ease-in-out]" key={currentIndex}>
        {words[currentIndex]}
      </span>
    </span>
  );
};

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const words = ["Sales", "Services", "Repair", "Rentals"];
  const whatsappNumber = '918885621001';

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank', 'noopener,noreferrer');
  };

  const handleCallClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `tel:+${whatsappNumber}`;
    } else {
      window.open(`https://wa.me/${whatsappNumber}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      {isClient && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/hero1_edit.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/70 to-black/90 opacity-70"></div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10">
        {/* Main Heading */}
        <div className="max-w-5xl mx-auto space-y-6 animate-[fadeIn_1s_ease-in]">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white text-sm font-medium">Trusted by 1000+ Businesses</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            <span className="block mb-2">Your Premier Destination</span>
            <span className="block">for Copier Machine</span>
            <span className="block bg-linear-to-r from-orange-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
              <FlipWords words={words} className="" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Premium digital xerox machines with expert support and flexible rental options
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={handleWhatsAppClick}
              className="group relative px-8 py-4 bg-linear-to-r from-orange-500 via-red-500 to-orange-500 text-white font-bold rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative flex items-center gap-3 text-lg">
                <FaWhatsapp className="text-2xl" />
                Get Instant Quote
              </span>
            </button>

            <button
              onClick={handleCallClick}
              className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <span className="flex items-center gap-3 text-lg">
                <FaPhone className="text-xl" />
                Call +91 888 562 1001
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-12 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Free Installation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Warranty Included</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="group relative w-14 h-14 bg-linear-to-br from-green-400 to-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
          <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us
          </span>
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
        </button>

        {/* Mute Toggle Button */}
        <button
          onClick={toggleMute}
          className="w-14 h-14 bg-white/10 backdrop-blur-md text-white rounded-full shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 flex items-center justify-center border border-white/20"
          aria-label="Toggle sound"
        >
          {isMuted ? <FaVolumeMute className="text-xl" /> : <FaVolumeUp className="text-xl" />}
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;