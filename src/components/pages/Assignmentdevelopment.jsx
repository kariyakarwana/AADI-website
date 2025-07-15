import React, { useRef } from "react";
import HoverAnimation from "../HoverAnimation";
import HoverAnimation2 from "../Hoveranimation2";
import Hoveranimation3 from "../Hoveranimation3";
import Hoveranimation4 from "../Hoveranimation4";
import GetHelpButton from "../Gethelpbutton";
import { motion } from "framer-motion";
import { FaCheckCircle, FaBookOpen, FaClock, FaCloudUploadAlt ,FaBriefcase ,FaDownload } from "react-icons/fa";
import Footer from '../Footer';
import CustomerSlider from '../Customerslider';
import John from '../../assets/Assignmentfeedback/images.jpg';


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

const handleButtonClick = () => {
  window.open("https://wa.me/+94765329439", "_blank", "noopener,noreferrer");
};
const handleButtonClick2 = () => {
  window.open("https://www.facebook.com/share/1664p7DQKA/?mibextid=wwXIfr", "_blank", "noopener,noreferrer");
};

const Assignmentdevelopment = () => {
  const lottieRef1 = useRef();
const lottieRef2 = useRef();
const lottieRef3 = useRef();
const lottieRef4 = useRef();

  return(
  <div className="bg-transparent p-4 md:p-8 rounded-lg shadow-md">
    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
    Stuck with Assignments? We’ve Been There.
    </h1>
        <div
        className="flex flex-col md:flex-row md:space-x-4 items-center"
        onMouseEnter={() => lottieRef1.current?.play()}
        onMouseLeave={() => lottieRef1.current?.stop()}
      >
              
        {/* Left */}
        <div className="w-full md:w-1/2 p-4 rounded-md flex flex-col items-center">
          <p className="text-base sm:text-lg md:text-3xl text-white text-center mb-9">
            Your future depends on passing that exam — but <br /> the deadlines are crushing.
          </p>
          <GetHelpButton onClick={handleButtonClick} text="Get Help Now" />
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 p-4 rounded-md flex justify-center">
          <HoverAnimation lottieRef={lottieRef1} />
        </div>
      </div>


    {/*2nd section */}
          {/* Heading with scroll animation */}
      <motion.p
        className="text-base sm:text-lg md:text-xl text-white text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Thousands of students struggle with academic overload. Balancing work, life, and studies can be overwhelming — especially when an important assignment could decide your exam results. But help is just a click away.
      </motion.p>

      {/* Bullet points with icons */}
      <div className="flex flex-col md:flex-row justify-around items-center text-white gap-8">

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <FaCheckCircle size={40} className="text-green-400" />
          <p className="text-lg font-semibold">10,000+ assignments completed</p>
        </motion.div>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <FaBookOpen size={40} className="text-green-400" />
          <p className="text-lg font-semibold">Experts in 50+ subjects</p>
        </motion.div>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <FaClock size={40} className="text-green-400" />
          <p className="text-lg font-semibold">24/7 student support</p>
        </motion.div>

      </div>

    {/* 3rd section */}
        <div
      className="flex flex-col md:flex-row md:space-x-4 items-center"
      onMouseEnter={() => lottieRef2.current?.play()}
      onMouseLeave={() => lottieRef2.current?.stop()}
    >
      {/* Left */}
      <div className="w-full md:w-1/2 p-4 rounded-md flex justify-center">
        <HoverAnimation2 lottieRef={lottieRef2} />
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 p-4 rounded-md flex flex-col items-center">
        <p className="text-base sm:text-lg md:text-3xl text-white text-center mb-9">
          When you're at your lowest, finding reliable academic support is a game-changer...
        </p>
        <GetHelpButton onClick={handleButtonClick2}text="Browse Our Services" />
      </div>
    </div>


    {/* 4th section */}
    <div
      className="p-4"
      onMouseEnter={() => lottieRef3.current?.play()}
      onMouseLeave={() => lottieRef3.current?.stop()}
    >
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
        From Stress to Success in 3 Simple Steps
      </h1>

      <div className="flex flex-col md:flex-row md:space-x-4 items-center">
        {/* Left */}
        <div className="w-full md:w-1/2 p-4 rounded-md flex flex-col items-center text-white flex-col mb-10 space-y-4 justify-center">

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FaCloudUploadAlt size={40} className="text-yellow-400" />
              <p className="text-lg font-semibold">Upload Your Assignment – Secure and fast submission</p>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <FaBriefcase size={40} className="text-yellow-400" />
              <p className="text-lg font-semibold">Work With Experts – Chat with qualified professionals</p>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <FaDownload size={40} className="text-yellow-400" />
              <p className="text-lg font-semibold">Receive High-Quality Work – On time, every time</p>
            </motion.div>

        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 p-4 rounded-md flex justify-center">
          <Hoveranimation3 lottieRef={lottieRef3} />
        </div>
      </div>
    </div>

    {/*5th Section */}
    <div
      className="p-4"
      onMouseEnter={() => lottieRef4.current?.play()}
      onMouseLeave={() => lottieRef4.current?.stop()}
    >
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
        Achieve More, Stress Less
      </h1>

      <div className="flex flex-col md:flex-row md:space-x-4 items-center">
        {/* Left */}
        <div className="w-full md:w-1/2 p-4 rounded-md flex justify-center">
          <Hoveranimation4 lottieRef={lottieRef4} />
        </div>

        

        {/* Right */}
        <div className="w-full md:w-1/2 p-4 rounded-md flex flex-col items-center">
          <p className="text-base sm:text-lg md:text-3xl text-white text-center mb-9">
            We don’t just help you submit your project — we help you move forward. Every completed assignment is a step toward your goals, and we’re proud to be part of your journey.
          </p>
        </div>
      </div>
    </div>


    {/* 6th Section */}
    <div className="flex flex-col items-center justify-center p-4 gap-6">

      {/* First <p> with hover animation */}
      <div className="transition-transform duration-500 hover:translate-y-2">
        <p className="text-base sm:text-lg md:text-3xl text-white text-center">
          Don’t Let One Assignment Hold You Back.
        </p>
      </div>

      {/* Second <p> with hover animation */}
      <div className="transition-transform duration-500 hover:translate-y-2">
        <p className="text-base sm:text-lg md:text-3xl text-white text-center">
          Join thousands of students who trust us to help them succeed.
        </p>
      </div>


      {/* Second button */}
      <div>
        <GetHelpButton onClick={handleButtonClick} text="Talk to a Specialist" />
      </div>

    </div>

    {/* 7th section */}
    <div className="flex flex-col items-center justify-center p-4 gap-6">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
      Customer Feedback
      </h1>
      <CustomerSlider slides={feedbacks} />

    </div>




  <Footer />
  </div>
);};

export default Assignmentdevelopment;
