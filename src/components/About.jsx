import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Man1 from '../assets/man1.webp';
import { FaShip, FaBuilding, FaIndustry, FaOilCan } from "react-icons/fa";

// Animation variants for fade-in and slide-in from the left
const variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

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
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      {/* About Us Section */}
      <section className=" mt-20 about-section py-20 px-6 bg-gradient-to-r from-[#f8f9fa] to-[#e2e6ea]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <ScrollFadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#b3042b] mb-4">ABOUT US</h2>
            </ScrollFadeIn>
            <div className="w-24 h-1 bg-[#b3042b] rounded-full mx-auto lg:mx-0 mb-8"></div>

            {/* Paragraphs */}
            <ScrollFadeIn delay={0.3}>
              <p className="text-gray-700 text-justify leading-relaxed mb-6">
                <strong>AL JAHRA</strong> is a pioneering steel fabrication company based in Oman, specializing in value engineering, design, drafting, project management, fabrication, and installation services across a diverse range of sectors—including construction, petrochemical, and marine industries.

              </p>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.4}>
              <p className="text-gray-700 text-justify leading-relaxed mb-6">
                More than just a metal fabricator, <strong>AL JAHRA</strong> brings the expertise and capacity to manage multiple projects and complex scopes concurrently. Our proven track record in large-scale modularization showcases our ability to combine forward-thinking engineering with a steadfast dedication to project excellence.

              </p>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.5}>
              <p className="text-gray-700 text-justify leading-relaxed">
              Our operations are driven by a strong commitment to client satisfaction. Through a collaborative, partner-oriented approach, we consistently deliver projects on time, within budget, and to the highest standards of quality. Guided by core values of quality, service, and customer-centricity, AL JAHRA continuously develops innovative solutions that not only meet but exceed client expectations              </p>
            </ScrollFadeIn>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <ScrollFadeIn delay={0.6}>
              <img
                src={Man1}
                alt="About AL JAHRA Team"
                className="w-full rounded-lg shadow-xl object-cover transition-transform transform hover:scale-105"
              />
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Industrial Expertise Section */}
      <section className="bg-white py-16 px-6 mt-40">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollFadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#b3042b] mb-8">INDUSTRIAL EXPERTISE</h2>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Marine */}
            <ScrollFadeIn delay={0.3}>
              <div className="flex flex-col items-center justify-center bg-[#f1f5f8] border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-transform transform hover:scale-105">
                <FaShip className="text-[#b3042b] text-5xl mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">Marine</h3>
              </div>
            </ScrollFadeIn>

            {/* Construction */}
            <ScrollFadeIn delay={0.4}>
              <div className="flex flex-col items-center justify-center bg-[#f1f5f8] border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-transform transform hover:scale-105">
                <FaBuilding className="text-[#b3042b] text-5xl mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">Construction</h3>
              </div>
            </ScrollFadeIn>

            {/* Industrial */}
            <ScrollFadeIn delay={0.5}>
              <div className="flex flex-col items-center justify-center bg-[#f1f5f8] border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-transform transform hover:scale-105">
                <FaIndustry className="text-[#b3042b] text-5xl mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">Industrial</h3>
              </div>
            </ScrollFadeIn>

            {/* Oil & Gas */}
            <ScrollFadeIn delay={0.6}>
              <div className="flex flex-col items-center justify-center bg-[#f1f5f8] border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-transform transform hover:scale-105">
                <FaOilCan className="text-[#b3042b] text-5xl mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">Oil & Gas</h3>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Empty section */}
      <section className="bg-white py-16 px-6 mb-40">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-center">
          {/* Add content here if needed */}
        </div>
      </section>
    </>
  );
};

export default About;
