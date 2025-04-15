import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Ser1 from '../assets/ser1.webp';
import Ser2 from '../assets/ser2.webp';
import Ser3 from '../assets/ser3.jpeg';
import Ser4 from '../assets/ser4.jpg';
import Ser5 from '../assets/ser5.webp';
import Ser6 from '../assets/ser6.jpg';

// Scroll animation wrapper
const ScrollFadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

function GeneralMaintenance() {
  const services = [
    {
      image: Ser1,
      title: 'Structural Steel Inspection & Repairs',
      desc: 'Detection and correction of wear, corrosion, and fatigue to ensure long-term structural stability.',
    },
    {
      image: Ser2,
      title: 'Welding Repairs & Reinforcements',
      desc: 'High-quality welding solutions for damaged joints, cracks, or load-bearing components.',
    },
    {
      image: Ser3,
      title: 'Surface Treatment & Corrosion Protection',
      desc: 'Cleaning, painting, and coating services to prevent rust and extend the life of your steel structures.',
    },
    {
      image: Ser4,
      title: 'Replacement of Worn or Damaged Components',
      desc: 'Sourcing and installation of replacement parts to maintain functionality and appearance.',
    },
    {
      image: Ser5,
      title: 'Preventive Maintenance Programs',
      desc: 'Scheduled maintenance to minimize downtime and costly repairs in the future.',
    },
    {
      image: Ser6,
      title: 'Emergency Call-Out Services',
      desc: 'Fast and efficient response to urgent repair needs across your project or property.',
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Heading */}
        <ScrollFadeIn delay={0.1}>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 ">
              General Maintenance Service
            </h2>
            <div className="h-1 w-16 bg-red-600 mt-3 mx-auto rounded-full" />
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              At <span className="italic font-semibold">Al Jahra Steel Projects and Trade LLC</span>, we offer specialized <span className="italic font-semibold">Technical Services</span> to support every stage of your steel fabrication and installation projects.
            </p>
            <p className="mt-4 text-gray-700 max-w-4xl mx-auto">
              From design consultation to on-site technical assistance, we ensure all components are fabricated, installed, and maintained to the highest standards.
            </p>
          </div>
        </ScrollFadeIn>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <ScrollFadeIn key={index} delay={0.2 + index * 0.1}>
              <div className="flex items-start gap-6 p-6 rounded-2xl border border-gray-200 bg-white shadow hover:shadow-lg transition">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-24 h-24 object-cover rounded-xl shadow"
                />
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <span className="text-red-600 text-xl">{service.icon}</span>
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GeneralMaintenance;
