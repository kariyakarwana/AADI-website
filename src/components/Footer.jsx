import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="
      w-full
      backdrop-blur-md bg-transparent bg-opacity-50
      text-white
      py-10 px-6
      mt-auto
      shadow-inner
      transition-all duration-300
    ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

        {/* Services Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-bold text-xl mb-4">Services</h3>
          <ul className="space-y-2 text-base">
            <li><a href="#" className="hover:text-blue-400 transition duration-300">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-400 transition duration-300">About Us</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-bold text-xl mb-4">Contact</h3>
          <ul className="space-y-2 text-base">
            <li><a href="#" className="hover:text-blue-400 transition duration-300">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-400 transition duration-300">Support</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-bold text-xl mb-4">Social Media</h3>
          <ul className="space-y-3 text-base">
            <li>
              <a href="https://www.facebook.com/share/1664p7DQKA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                className="flex items-center hover:text-blue-400 transition duration-300">
                <FaFacebookF size={22} className="mr-3" /> Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center hover:text-blue-400 transition duration-300">
                <FaInstagram size={22} className="mr-3" /> Instagram
              </a>
            </li>
            <li>
              <a href="https://wa.me/+94765329439" target="_blank" rel="noopener noreferrer"
                className="flex items-center hover:text-blue-400 transition duration-300">
                <FaWhatsapp size={22} className="mr-3" /> WhatsApp
              </a>
            </li>
            <li>
                <a href="mailto:udaralh@gmail.com" target="_blank" rel="noopener noreferrer"
                    className="flex items-center hover:text-blue-400 transition duration-300">
                    <FaEnvelope size={22} className="mr-3" /> Gmail
                </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-600 pt-6 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} AADI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
