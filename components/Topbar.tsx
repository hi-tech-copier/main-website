"use client";
import { FaPhone, FaEnvelope, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from "react-icons/io";

function Topbar() {
  const handlePhoneClick = () => {
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

  const handleEmailClick = () => {
    openInNewTab('mailto:Hitechcopiersolution1001@gmail.com');
  };

  const handleInstagramClick = () => {
    openInNewTab('https://instagram.com/hitechcopier');
  };

  const handleWhatsappClick = () => {
    openInNewTab('https://wa.me/918885621001');
  };

  const handleLinkedinClick = () => {
    openInNewTab('https://www.linkedin.com/company/hi-tech-copier');
  };

  const handleYoutubeClick = () => {
    openInNewTab('https://www.youtube.com/@HiTechCopier');
  };

  return (
    <div className="sticky top-0 z-50 bg-linear-to-r from-amber-500 via-orange-500 to-red-500 shadow-lg">
      {/* Top announcement bar */}
      <div className="bg-black bg-opacity-20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-1.5">
          <div className="flex justify-center md:justify-end items-center gap-6 text-white text-sm">
            <a 
              href="#!" 
              onClick={handlePhoneClick}
              className="flex items-center gap-2 hover:text-yellow-200 transition-colors duration-200"
            >
              <FaPhone className="text-xs" />
              <span className="hidden sm:inline font-medium">+91 888 562 1001</span>
            </a>
            <a 
              href="#!" 
              onClick={handleEmailClick}
              className="flex items-center gap-2 hover:text-yellow-200 transition-colors duration-200"
            >
              <FaEnvelope className="text-xs" />
              <span className="hidden lg:inline font-medium">Get Quote</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight">
              <span className="text-white drop-shadow-md">Hi-Tech</span>
              <span className="text-red-900 drop-shadow-md"> Copier Solutions</span>
            </h1>
            <p className="text-xs md:text-sm font-semibold text-white mt-1 tracking-wide">
              Digital Xerox Machines • Sales & Services
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-3 md:gap-4">
            <span className="hidden md:inline text-white text-sm font-semibold mr-2">Connect With Us:</span>
            <a 
              href="#!" 
              onClick={handlePhoneClick}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 text-orange-600 p-2.5 rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-200"
              aria-label="Phone"
            >
              <FaPhone className="text-base md:text-lg" />
            </a>
            <a 
              href="#!" 
              onClick={handleWhatsappClick}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 text-green-600 p-2.5 rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-200"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-base md:text-lg" />
            </a>
            <a 
              href="#!" 
              onClick={handleEmailClick}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 text-blue-600 p-2.5 rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-200"
              aria-label="Email"
            >
              <FaEnvelope className="text-base md:text-lg" />
            </a>
            <a 
              href="#!" 
              onClick={handleInstagramClick}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 text-pink-600 p-2.5 rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-200"
              aria-label="Instagram"
            >
              <FaInstagram className="text-base md:text-lg" />
            </a>
            <a 
              href="#!" 
              onClick={handleYoutubeClick}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 text-red-600 p-2.5 rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-200"
              aria-label="YouTube"
            >
              <IoLogoYoutube className="text-base md:text-lg" />
            </a>
            <a 
              href="#!" 
              onClick={handleLinkedinClick}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 text-blue-700 p-2.5 rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-base md:text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;