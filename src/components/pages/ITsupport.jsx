import React, { useRef } from "react";
import Hoveranimation6 from "../Hoveranimation6";
import HoverAnimation7 from "../Hoveranimation7";
import Hoveranimation8 from "../Hoveranimation8";
import Hoveranimation4 from "../Hoveranimation4";
import GetHelpButton from "../Gethelpbutton";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { FaServer, FaNetworkWired, FaCloud, FaShieldAlt, FaDatabase, FaCogs } from "react-icons/fa";
import CustomerSlider from "../Customerslider";
import John from "../../assets/Assignmentfeedback/images.jpg";

const ITSupport = () => {
  const lottieRef6 = useRef();
  const lottieRef7 = useRef();
  const lottieRef8 = useRef();
  const lottieRef4 = useRef();

const handleButtonClick = () => {
  window.open("https://wa.me/+94765329439", "_blank", "noopener,noreferrer");
};


const feedbacks = [
  {
    image: John,
    name: "John Doe",
    title: "Software Engineer",
    feedback: "The team provided outstanding IT support during our cloud migration!"
  },
  {
    image: John,
    name: "Sarah Smith",
    title: "Project Manager",
    feedback: "Incredible response time and professional troubleshooting every time."
  },
  {
    image: John,
    name: "Michael Lee",
    title: "CTO",
    feedback: "Their firewall & security team prevented multiple threats before they became serious."
  },
];

  return (
    <div className="bg-transparent p-4 md:p-8 rounded-lg shadow-md">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
        Comprehensive IT Support Services
      </h1>

      {/* 1st Section: Introduction */}
      <div
        className="flex flex-col md:flex-row md:space-x-4 items-center"
        onMouseEnter={() => lottieRef6.current?.play()}
        onMouseLeave={() => lottieRef6.current?.stop()}
      >
        {/* Left */}
        <div className="w-full md:w-1/2 p-4 rounded-md flex flex-col items-center">
          <p className="text-base sm:text-lg md:text-3xl text-white text-center mb-9">
            End-to-End IT Support — from Level 1 troubleshooting to full infrastructure management.
          </p>
          <GetHelpButton onClick={handleButtonClick} text="Contact Our Team" />
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 p-4 rounded-md flex justify-center">
          <Hoveranimation6 lottieRef={lottieRef6} />
        </div>
      </div>

      {/* 2nd Section: Support Levels */}
      <motion.p
        className="text-base sm:text-lg md:text-xl text-white text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        We provide reliable Level 1 & Level 2 support to ensure your business operations stay smooth.
      </motion.p>

      <div className="flex flex-col md:flex-row justify-around items-center text-white gap-8">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <FaCogs size={40} className="text-green-400" />
          <p className="text-lg font-semibold">Level 1: End-user support, troubleshooting, software issues.</p>
        </motion.div>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <FaServer size={40} className="text-green-400" />
          <p className="text-lg font-semibold">Level 2: System administration, network & security configuration.</p>
        </motion.div>
      </div>

      {/* 3rd Section: Services */}
      <div
        className="flex flex-col md:flex-row md:space-x-4 items-center mt-20"
        onMouseEnter={() => lottieRef7.current?.play()}
        onMouseLeave={() => lottieRef7.current?.stop()}
      >
        {/* Left */}
        <div className="w-full md:w-1/2 p-4 rounded-md flex justify-center">
          <HoverAnimation7 lottieRef={lottieRef7} />
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 p-4 rounded-md flex flex-col items-center">
          <p className="text-base sm:text-lg md:text-3xl text-white text-center mb-9">
            We handle your servers, databases, firewalls, proxies, load balancers, and cloud platforms (Azure, AWS).
          </p>
        </div>
      </div>

      {/* 4th Section: Individual services with icons */}
      <div className="flex flex-col md:flex-row md:space-x-4 items-center text-white flex-col mb-10 space-y-6 justify-center mt-10">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <FaNetworkWired size={40} className="text-yellow-400" />
          <p className="text-lg font-semibold">Network — switches, routers, VPN configuration.</p>
        </motion.div>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <FaShieldAlt size={40} className="text-yellow-400" />
          <p className="text-lg font-semibold">Firewall, WAF & Security — real-time protection & traffic control.</p>
        </motion.div>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <FaDatabase size={40} className="text-yellow-400" />
          <p className="text-lg font-semibold">Databases — SQL Server, MySQL, PostgreSQL optimization & backups.</p>
        </motion.div>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <FaCloud size={40} className="text-yellow-400" />
          <p className="text-lg font-semibold">Cloud Platforms — Azure & AWS management, backup & monitoring.</p>
        </motion.div>
      </div>

      {/* 5th Section */}
      <div
        className="p-4"
        onMouseEnter={() => lottieRef8.current?.play()}
        onMouseLeave={() => lottieRef8.current?.stop()}
      >
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
          Total Coverage — 24/7 Support
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-4 items-center">
          {/* Left */}
          <div className="w-full md:w-1/2 p-4 rounded-md flex justify-center">
            <Hoveranimation8 lottieRef={lottieRef8} />
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 p-4 rounded-md flex flex-col items-center">
            <p className="text-base sm:text-lg md:text-3xl text-white text-center mb-9">
              We monitor your systems continuously — minimizing downtime and maximizing security and performance.
            </p>
          </div>
        </div>
      </div>

      {/* 6th Section (Call to action) */}
      <div className="flex flex-col items-center justify-center p-4 gap-6 mt-20">
        <div className="transition-transform duration-500 hover:translate-y-2">
          <p className="text-base sm:text-lg md:text-3xl text-white text-center">
            Don't wait for problems — prevent them with our proactive IT support.
          </p>
        </div>

        <div>
          <GetHelpButton onClick={handleButtonClick} text="Schedule a Consultation" />
        </div>
      </div>

    {/*Slider */}
    <div className="flex flex-col items-center justify-center p-4 gap-6">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
      Customer Feedback
      </h1>
      <CustomerSlider slides={feedbacks} />

    </div>

    
      <Footer />
    </div>
  );
};

export default ITSupport;
