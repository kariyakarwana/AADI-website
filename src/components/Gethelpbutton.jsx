// components/GetHelpButton.jsx
import React from 'react';

const GetHelpButton = ({ onClick,text }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-blue-500 hover:bg-blue-700
        text-white font-bold
        rounded-full shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        transform hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75

        /* Default (mobile-first) styles for smaller screens */
        text-xs                 /* Base font size for small screens */
        py-1                     /* Base vertical padding */
        px-4                     /* Base horizontal padding */

        /* Responsive styles for medium screens (e.g., tablets) */
        md:text-xl               /* Medium screens: larger font size */
        md:py-4                  /* Medium screens: increased vertical padding */
        md:px-8                  /* Medium screens: increased horizontal padding */

        /* Responsive styles for large screens (e.g., desktops) */
        lg:text-2xl              /* Large screens: even larger font size */
        lg:py-5                  /* Large screens: even more vertical padding */
        lg:px-10                 /* Large screens: even more horizontal padding */
      "
    >
      {text}
    </button>
  );
};

export default GetHelpButton;