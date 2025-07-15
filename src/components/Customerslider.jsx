// components/CustomerSlider.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CustomerSlider = ({ slides, autoSlide = true, autoSlideInterval = 5000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, slides.length]);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-6 sm:px-6 sm:py-10 md:p-12 bg-black/40 backdrop-blur-md rounded-lg shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <img
            src={slides[current].image}
            alt={slides[current].name}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-md"
          />
          <p className="text-white text-sm sm:text-base md:text-lg italic px-2 sm:px-4">
            "{slides[current].feedback}"
          </p>
          <div className="text-white font-bold text-lg sm:text-xl">{slides[current].name}</div>
          <div className="text-gray-300 text-sm sm:text-base">{slides[current].title}</div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 sm:left-4 transform -translate-y-1/2 text-white text-xl sm:text-2xl md:text-3xl hover:scale-110 transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 sm:right-4 transform -translate-y-1/2 text-white text-xl sm:text-2xl md:text-3xl hover:scale-110 transition"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CustomerSlider;
