import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollFadeIn from './ScrollFadeIn'; // Assuming this is your animation wrapper

import {
  FaIndustry,
  FaTools,
  FaHardHat,
  FaShippingFast,
  FaCogs,
  FaExchangeAlt,
} from 'react-icons/fa';

const services = [
  {
    title: 'STRUCTURAL STEEL FABRICATION & INSTALLATION',
    icon: <FaIndustry size={40} className="text-[#b3042b]" />,
    route: '/services/steel-fabrication',
  },
  {
    title: 'GENERAL MAINTENANCE SERVICE',
    icon: <FaCogs size={40} className="text-[#b3042b]" />,
    route: '/services/general-maintenance',
  },
  {
    title: 'MECHANICAL BLASTING and PAINTING',
    icon: <FaTools size={40} className="text-[#b3042b]" />,
    route: '/services/mechanical-piping',
  },
  {
    title: 'TECHNICAL SERVICES+',
    icon: <FaShippingFast size={40} className="text-[#b3042b]" />,
    route: '/services/technical-service',
  },
  {
    title: 'PROJECT SUPPORT SERVICES',
    icon: <FaHardHat size={40} className="text-[#b3042b]" />,
    route: '/services/project-support',
  },
  {
    title: 'STRUCTURAL STEEL TRADING',
    icon: <FaExchangeAlt size={40} className="text-[#b3042b]" />,
    route: '/services/steel-trading',
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-6 bg-white mt-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#b3042b] mb-2">
          OUR SERVICES
        </h1>
        <div className="w-24 h-1 bg-[#b3042b] rounded-full mx-auto"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ScrollFadeIn key={index} delay={index * 0.1}>
            <div
              onClick={() => navigate(service.route)}
              className="relative group cursor-pointer overflow-hidden bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              {/* Main content */}
              <div className="flex flex-col items-center text-center z-10">
                {service.icon}
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-sm font-medium">
                Click for more details
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>

      <p className="mt-16 text-center text-lg font-semibold text-gray-700 italic">
        “No matter what you require, our team can make your expectations a reality !!!”
      </p>
    </section>
  );
};

export default Services;
