import React, { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/Frame 2.json";

const HoverAnimation = ({ lottieRef }) => {
  const containerRef = useRef();
  const isInView = useInView(containerRef, { once: true });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isInView && window.innerWidth < 768) {
      lottieRef.current?.play();
    }
  }, [isInView, lottieRef]);

  return (
    <div
      ref={containerRef}
      className={`w-full sm:w-96 md:w-[450px] lg:w-[900px] mx-auto relative transform transition-all duration-500 
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
      <div className="transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HoverAnimation;
