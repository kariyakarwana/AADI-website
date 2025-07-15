import React, { useRef } from "react";
import HoverAnimation9 from "../Hoveranimation9";
import Hoveranimation10 from "../Hoveranimation10";
import Hoveranimation4 from "../Hoveranimation4";
import GetHelpButton from "../Gethelpbutton";
import { motion } from "framer-motion";
import { FaRocket, FaRegCalendarCheck, FaCertificate, FaHeadset } from "react-icons/fa";
import Footer from "../Footer";
import CustomerSlider from "../Customerslider";
import UserImg from '../../assets/Assignmentfeedback/images.jpg';

const feedbacks = [
  {
    image: UserImg,
    name: "Liam Turner",
    title: "Data Analyst",
    feedback: "The fast-track certification helped me land a better job in weeks!"
  },
  {
    image: UserImg,
    name: "Ava Robinson",
    title: "Graduate Student",
    feedback: "I got certified while still studying — quick, easy, and legit."
  },
  {
    image: UserImg,
    name: "Noah Green",
    title: "IT Technician",
    feedback: "Excellent platform for upgrading your resume in record time."
  },
];

const handleButtonClick = () => {
  window.open("https://wa.me/+94765329439", "_blank", "noopener,noreferrer");
};


const FastTrackCertificate = () => {
  const lottieRef9 = useRef();
  const lottieRef10= useRef();
  const lottieRef3 = useRef();
  const lottieRef4 = useRef();

  return (
    <div className="bg-transparent p-4 md:p-8 rounded-lg shadow-md">
      <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-6">
        Get Certified. Fast. Smart. Recognized.
      </h1>

      {/* 1st Section */}
      <div
        className="flex flex-col md:flex-row md:space-x-4 items-center"
        onMouseEnter={() => lottieRef9.current?.play()}
        onMouseLeave={() => lottieRef9.current?.stop()}
      >
        <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
          <p className="text-white text-lg md:text-2xl text-center mb-6">
            Whether you're upskilling for a job or proving your expertise — we’ve made it effortless.
          </p>
          <GetHelpButton onClick={handleButtonClick} text="Get Certified Now" />
        </div>
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <HoverAnimation9 lottieRef={lottieRef9} />
        </div>
      </div>

      {/* 2nd Section */}
      <motion.p
        className="text-white text-center text-base md:text-xl mt-12 mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Our fast-track programs are built for busy lives. No long lectures, no delays — just proof you know your stuff.
      </motion.p>

      <div className="flex flex-col md:flex-row justify-around text-white gap-8">
        <motion.div className="flex items-center gap-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
          <FaRocket size={40} className="text-pink-400" />
          <p className="text-lg font-semibold">Get Certified in Days</p>
        </motion.div>

        <motion.div className="flex items-center gap-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
          <FaRegCalendarCheck size={40} className="text-pink-400" />
          <p className="text-lg font-semibold">Flexible Deadlines</p>
        </motion.div>

        <motion.div className="flex items-center gap-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} viewport={{ once: true }}>
          <FaHeadset size={40} className="text-pink-400" />
          <p className="text-lg font-semibold">1-on-1 Certification Support</p>
        </motion.div>
      </div>

      {/* 3rd Section - Process */}
      <div className="mt-16" onMouseEnter={() => lottieRef10.current?.play()} onMouseLeave={() => lottieRef10.current?.stop()}>
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-6">
          Fast-Track in 3 Easy Steps
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-4 items-center">
          <div className="w-full md:w-1/2 p-4 text-white space-y-6">
            <motion.div className="flex items-center gap-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
              <FaCertificate size={40} className="text-yellow-400" />
              <p className="text-lg font-semibold">Choose a Certificate – Select your skill or domain</p>
            </motion.div>

            <motion.div className="flex items-center gap-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>
              <FaRegCalendarCheck size={40} className="text-yellow-400" />
              <p className="text-lg font-semibold">Book Your Slot – Pick a time that fits your schedule</p>
            </motion.div>

            <motion.div className="flex items-center gap-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} viewport={{ once: true }}>
              <FaRocket size={40} className="text-yellow-400" />
              <p className="text-lg font-semibold">Get Certified – Verified results delivered fast</p>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 p-4 flex justify-center">
            <Hoveranimation10 lottieRef={lottieRef10} />
          </div>
        </div>
      </div>

      {/* 4th Section - Motivation */}
      <div className="mt-16 text-white text-center space-y-6">
        <p className="text-lg md:text-2xl hover:translate-y-1 transition-transform duration-300">
          Show the world what you’re capable of — even without a degree.
        </p>
        <p className="text-lg md:text-2xl hover:translate-y-1 transition-transform duration-300">
          Upgrade your resume. Unlock better opportunities.
        </p>

        <GetHelpButton onClick={handleButtonClick} text="Talk to a Specialist" />
      </div>

      {/* Feedback */}
      <div className="mt-20 flex flex-col items-center justify-center p-4 gap-6">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center mb-6">
          What Our Certified Students Say
        </h1>
        <CustomerSlider slides={feedbacks} />
      </div>

      <Footer />
    </div>
  );
};

export default FastTrackCertificate;
