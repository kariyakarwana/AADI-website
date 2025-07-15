import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Footer from '../Footer';
import StarsBackground from '../StarsBackground'; // adjust path if needed

const Enquiry = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d350siz', 'template_1l5x5ur', formRef.current, 'crAdxPeO1C4GrHpys')
      .then(() => {
        alert('Message sent successfully!');
        formRef.current.reset();
      })
      .catch(() => alert('Failed to send message.'));
  };

  return (
    <div className="flex flex-col min-h-screen font-sans gradient-background text-white">
      <StarsBackground />
      {/* Main Content */}
      <div className="flex-grow p-8 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

        {/* Live Chat Script Notice */}
        <div className="mb-16 text-center">
          <p className="text-lg mb-4">Live Chat with Us (Powered by Tawk.to)</p>
          <p className="text-sm text-gray-300">The live chat widget should load automatically in the bottom right corner.</p>
        </div>

        {/* Glassmorphic EmailJS Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl shadow-xl space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 h-32 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white py-3 rounded font-semibold"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
};

export default Enquiry;
