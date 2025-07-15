import React, { useState } from "react";
import { Menu, X } from "lucide-react";  // You can install lucide-react for icons: npm install lucide-react
import LOGO from "../assets/Logo1.png";

const NavLink = ({ name, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`text-white py-2 px-4 relative group transition-all duration-300 ease-in-out focus:outline-none text-lg ${isActive ? 'font-bold' : ''}`}
  >
    {name}
    <span
      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-white rounded-full transition-all duration-300
      ${isActive ? 'w-10 opacity-100' : 'w-0 opacity-0 group-hover:w-10 group-hover:opacity-100'}`}
    />
  </button>
);

// Accept gradientProgress as a prop
const Navbar = ({ setActiveComponent, gradientProgress }) => {
  const [activeLink, setActiveLink] = useState('Assignmentdevelopment');
  const [menuOpen, setMenuOpen] = useState(false);  // <-- for mobile menu

  const handleLinkClick = (componentName, linkName) => {
    setActiveComponent(componentName);
    setActiveLink(linkName);
    setMenuOpen(false); // close menu on click (mobile)
  };

  return (
      <nav
        className={`p-4 shadow-lg w-full fixed top-0 left-0 z-[9999] transition-colors duration-300 ${gradientProgress > 0 ? 'navbar-gradient-reveal' : 'bg-transparent'}`}
        style={{ '--gradient-size': `${gradientProgress}%` }}
      >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo left */}
       <div className="p-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105">
          <img 
            src={LOGO} 
            alt="Logo" 
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
          />
        </div>



        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          {menuOpen ? (
            <X className="text-white w-8 h-8" onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu className="text-white w-8 h-8" onClick={() => setMenuOpen(true)} />
          )}
        </div>

        {/* Menu links */}
        <div className={`flex-col md:flex md:flex-row md:space-x-8 text-lg font-medium absolute md:static top-20 right-0 bg-transparent bg-opacity-50 backdrop-blur-md md:bg-transparent w-full md:w-auto z-40 transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'}`}>
          <NavLink name="Academic Writing" onClick={() => handleLinkClick('Assignmentdevelopment', 'Assignmentdevelopment')} isActive={activeLink === 'Assignmentdevelopment'} />
          <NavLink name="Website & Development" onClick={() => handleLinkClick('webns', 'webns')} isActive={activeLink === 'webns'} />
          <NavLink name="Fast Track Certificate" onClick={() => handleLinkClick('fasttrack', 'fasttrack')} isActive={activeLink === 'fasttrack'} />
          <NavLink name="ITsupport" onClick={() => handleLinkClick('ITsupport', 'ITsupport')} isActive={activeLink === 'ITsupport'} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
