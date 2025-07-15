import React from 'react';

const FloatingEnquiryButton = () => {
  const handleClick = () => {
    window.open("/enquiry", "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed left-2 sm:left-0 top-1/2 transform -translate-y-1/2 z-50
                 bg-white/20 backdrop-blur-md text-white px-3 sm:px-5 py-3 sm:py-4 
                 rounded-r-xl shadow-lg hover:bg-white/30 hover:scale-105 transition duration-300
                 border border-white/30 font-bold text-sm sm:text-base lg:text-xl"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
    >
      Enquiry
    </button>
  );
};

export default FloatingEnquiryButton;
