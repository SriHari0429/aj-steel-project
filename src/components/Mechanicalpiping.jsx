import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Piping from '../assets/pipingsystem.jpg';
import Pipe from '../assets/pipe.jpg';
import Workers from '../assets/workers.jpg';

const slides = [
  {
    img: Pipe,
    title: 'Advanced Pipe Installations',
  },
  {
    img: Piping,
    title: 'Industrial Piping Systems',
  },
  {
    img: Workers,
    title: 'Expert Workers at Site',
  },
];

// Animation variants for fade-in and slide-in
const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

// Reusable scroll animation wrapper
const ScrollFadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

function Mechanicalpiping() {
  return (
    <div className="w-full pb-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 pt-24 mt-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Heading */}
        <div className="text-center">
          <ScrollFadeIn delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#b3042b] tracking-tight">
              Mechanical Painting and Blasting
              <span className="block h-1 w-16 bg-red-600 mt-3 mx-auto rounded"></span>
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.3}>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We deliver efficient solutions for Oil, Gas, Water, and Petrochemical sectors through
              specialized mechanical & piping expertise.
            </p>
          </ScrollFadeIn>
        </div>

        {/* Static Image Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {slides.map((slide, index) => (
            <ScrollFadeIn key={index} delay={0.4 + index * 0.2}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 transition duration-300 hover:shadow-2xl">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-52 object-cover" // slightly smaller image height
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold italic text-red-600 text-center">
                    {slide.title}
                  </h4>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* Highlight Box */}
        <ScrollFadeIn delay={1}>
          <div className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-3xl shadow-2xl p-10 md:p-14 text-gray-700 text-lg md:text-xl leading-relaxed transition-all duration-300 hover:shadow-3xl">
            <p className="mb-6">
              With experience in designing, fabricating, and installing mechanical pipework—including
              Carbon steel, Stainless steel, and Alloy steels—we ensure durability and reliability.
            </p>
            <p>
              We also offer prefabricated pipework, custom components, and piping brackets to optimize
              cost and reduce system downtime.
            </p>
          </div>
        </ScrollFadeIn>

        {/* Timeline Section */}
        <div className="max-w-5xl mx-auto">
          <ScrollFadeIn delay={1.2}>
            <h3 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-14">
              Our Piping Capabilities Journey
            </h3>
          </ScrollFadeIn>

          <div className="relative border-l-4 border-red-500 pl-6 space-y-10 ml-4 sm:ml-28">
            {[
              'Complete Commercial and Industrial mechanical installations',
              'Piping Fabrication including Skid Modular Units',
              'Large and Small Bore Pipe Prefabrications and Installations',
              'Steam and Thermal fluid Piping and Boiler Installations',
              'Stainless Steel Piping and Food-grade Sanitary Piping',
              'Natural Gas and Propane Piping and Installations',
              'Medical Gas Piping and Process Gas Installations',
              'Hydraulic & Pneumatic piping and controls',
              'Chilled Water Pipework (CHW)',
              'Condenser Water Pipework (CCW)',
              'Process Piping & Pipe Insulation etc.',
            ].map((text, index) => (
              <ScrollFadeIn key={index} delay={1.3 + index * 0.15}>
                <div className="flex items-start group transition-all">
                  <div className="w-5 h-5 bg-red-500 rounded-full mt-1.5 ring-4 ring-white shadow-md group-hover:scale-110 transition-transform"></div>
                  <div className="ml-4">
                    <p className="text-base md:text-lg font-medium text-gray-800 group-hover:text-red-600 transition">
                      {text}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Mechanicalpiping;
