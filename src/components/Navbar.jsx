import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';
import {
  FaChevronDown,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaEnvelope,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const services = [
  { title: ' Fabrication,Blasting and Painting', route: '/services/steel-fabrication' },
  { title: 'General Maintenance Services', route: '/services/general-maintenance' },
  { title: 'Mechanical Painting and Blasting', route: '/services/mechanical-piping' },
  { title: 'Technical Services', route: '/services/technical-service' },
  { title: 'Project Support Service', route: '/services/project-support' },
  { title: 'Trading Service', route: '/services/steel-trading' },
  { title: 'Installation', route: '/services/installation' }, // ✅ New service added here
];

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const location = useLocation();

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowBackground(false);
    } else {
      setShowBackground(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const isActive = (path) => location.pathname === path;
  const isServicePage = location.pathname.startsWith('/services');

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        showBackground ? 'bg-white shadow-md' : 'bg-transparent shadow-none'
      }`}
    >
      <div className="h-20 py-4 px-6 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="w-48">
          <Link to="/"><img src={Logo} alt="AJ" /></Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold relative items-center">
          <Link to="/" className={`flex items-center gap-2 hover:text-blue-500 ${isActive('/') ? 'text-blue-600' : 'text-gray-700'}`}><FaHome /> Home</Link>
          <Link to="/about" className={`flex items-center gap-2 hover:text-blue-500 ${isActive('/about') ? 'text-blue-600' : 'text-gray-700'}`}><FaInfoCircle /> About</Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link to="/services" className={`flex items-center gap-2 hover:text-blue-500 ${isServicePage ? 'text-blue-600' : 'text-gray-700'}`}>
              <FaCogs /> Services <FaChevronDown className="mt-1" size={14} />
            </Link>

            {showDropdown && (
              <div className="absolute top-full left-0 w-80 bg-white border shadow-lg rounded-md z-50 animate-fadeIn">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.route}
                    className="block px-4 py-2 hover:bg-blue-50 text-gray-700 transition duration-200"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className={`flex items-center gap-2 hover:text-blue-500 ${isActive('/contact') ? 'text-blue-600' : 'text-gray-700'}`}><FaEnvelope /> Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-md">
          <Link to="/" onClick={() => setMenuOpen(false)} className={`block py-2 ${isActive('/') ? 'text-blue-600' : 'text-gray-700'}`}><FaHome className="inline mr-2" /> Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className={`block py-2 ${isActive('/about') ? 'text-blue-600' : 'text-gray-700'}`}><FaInfoCircle className="inline mr-2" /> About</Link>

          {/* Mobile Services Toggle */}
          <button onClick={() => setMobileServiceOpen(!mobileServiceOpen)} className="block py-2 w-full text-left text-gray-700">
            <FaCogs className="inline mr-2" /> Services <FaChevronDown className="inline ml-1" size={12} />
          </button>
          {mobileServiceOpen && (
            <div className="pl-6">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.route}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-1 text-sm ${isActive(service.route) ? 'text-blue-600' : 'text-gray-700'}`}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          )}

          <Link to="/contact" onClick={() => setMenuOpen(false)} className={`block py-2 ${isActive('/contact') ? 'text-blue-600' : 'text-gray-700'}`}><FaEnvelope className="inline mr-2" /> Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
