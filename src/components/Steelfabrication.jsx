import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import steelImg from '../assets/steel.jpg';
import architecturalImg from '../assets/fab2.jpg';
import temporaryImg from '../assets/fab3.jpg';
import blastingImg from '../assets/blast1.jpg'; 
import installationImg from '../assets/man4.jpeg'; 

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

const Steelfabrication = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-4 mt-24">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <ScrollFadeIn delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold text-red-700">
              Fabrication, Blasting and Painting Services
              <span className="block h-1 w-16 bg-red-600 mt-3 mx-auto rounded"></span>
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.3}>
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-black">AL JAHRA</span> specializes in Mild Steel, GI, and Stainless Steel fabrication and installation. Our team delivers quality craftsmanship, ensuring precision, punctuality, and reliability.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.4}>
            <p className="text-lg text-gray-700">
              We handle everything from structural erection to detailed metal work — including coating, galvanizing, and custom solutions.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.5}>
            <p className="text-lg text-gray-700">
              Our experienced crew manages large-scale and high-finish architectural projects, and even tight-tolerance refurbishments.
            </p>
          </ScrollFadeIn>
        </div>

        {/* Main Centered Heading */}
        <div className="text-center">
          <ScrollFadeIn delay={0.6}>
            <h1 className="text-4xl md:text-4xl font-bold text-red-700">
              Steel Fabrication Services
              <span className="block h-1 w-16 bg-red-600 mt-3 mx-auto rounded"></span>
            </h1>
          </ScrollFadeIn>
        </div>

        {/* Service Sections */}
        <ServiceSection
          title="Steel Structures"
          image={steelImg}
          features={[
            'Structural Steel Buildings',
            'Primary & Secondary Structural Steel Work',
            'Complex Structures',
            'Bridges & Canopies etc',
          ]}
        />

        <ServiceSection
          title="Architectural Metal Work"
          image={architecturalImg}
          features={[
            'Ladders',
            'Handrails and Balustrades',
            'Stairways',
            'Fences & Gates',
            'Plate Works',
            'Industrial Platforms',
            'Trench Covers and Gratings',
            'Bollards etc',
          ]}
          reverse
        />

        <ServiceSection
          title="Temporary Structures / Site Mobilization Works"
          image={temporaryImg}
          features={[
            'Multipurpose Sheds (Workshop, Store, Mess Hall etc)',
            'Car Parking Sheds',
            'Portable Cabins for Offices / Ablution Units / Toilets',
            'Fence / Hoardings / Gate Barriers',
            'Sign Boards',
            'Steel Tanks (Water / Septic / Dewatering Tank)',
            'Water Tank Towers',
            'Waste Skip Buckets / Man Basket',
            'Concrete Shutters / Molds',
            'Cable Trays',
          ]}
        />

        <div className="text-center">
          <ScrollFadeIn delay={0.6}>
            <h1 className="text-4xl md:text-4xl font-bold text-red-700">
              Blasting and Painting Service
              <span className="block h-1 w-16 bg-red-600 mt-3 mx-auto rounded"></span>
            </h1>
            <p className="mb-6 text-gray-800 max-w-3xl mx-auto">
        Our Blasting & Painting services ensure durable surface protection for steel structures, aligned with global industrial standards. We adhere to the highest safety, quality, and environmental protocols during every stage of surface preparation and coating.
      </p>
          </ScrollFadeIn>
        </div>

        <ServiceSection
          image={blastingImg}
          description={
            <div className="text-center mb-8"></div>
          }
          features={[
            'Surface Preparation (Manual: Sanding, Buffing, Wire Brushing)',
            'Paint Application (Jotamastic 80 + Hardtop XP)',
            'Zinc-Rich Primer & High-Performance Epoxy Coatings',
            'Dry Film Thickness (DFT) & WFT Checks',
            '100% Inspection & Batch Certification',
            'HSE-Compliant Procedures with PPE & MSDS',
            'Corrosion-Resistant Finish for Steel Structures',
          ]}
        />

        {/* Cards for Blasting and Painting */}
        
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <ScrollFadeIn delay={0.6}>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-red-700 mb-3">Surface Preparation</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Manual surface treatment using sanding, wire brushing & buffing (SSPC SP2 / ISO 8501-1 ST2)</li>
              <li>Environmental condition checks – humidity, dew point, surface temperature</li>
              <li>Proper inspection tools (DFT gauge, hygrometer, thermometer)</li>
            </ul>
          </div>
          </ScrollFadeIn>
          {/* Card 2 */}
          <ScrollFadeIn delay={0.8}>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-red-700 mb-3">Coating & Application</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Application of Jotamastic 80 (100µm DFT) & Hardtop XP (60µm) using brush and roller</li>
              <li>Two-component paint mixing with strict pot-life adherence</li>
              <li>Zinc-rich primer application as per project requirement</li>
              <li>Paint batch certificate verification before application</li>
            </ul>
          </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.10}>
          {/* Card 3 */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-red-700 mb-3">Quality Control</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Dry Film Thickness (DFT) checks for each coat</li>
              <li>WFT monitoring during application</li>
              <li>Certified calibration of inspection tools</li>
              <li>100% visual inspection of final finish</li>
            </ul>
          </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.12}>
          {/* Card 4 */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-red-700 mb-3">Health, Safety & Environment (HSE)</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Mandatory PPE – helmet, goggles, filter mask, rubber gloves, safety shoes</li>
              <li>Painting area barricaded and clearly marked</li>
              <li>Compliance with Client JSA and Safe Work Permits</li>
              <li>Paints stored as per MSDS guidelines and away from ignition sources</li>
              <li>Proper disposal of expired or pot-life exceeded paints</li>
            </ul>
          </div>
          </ScrollFadeIn>
        </div>
      </div>
    </div>
  );
};

const ServiceSection = ({ title, features, image, description, reverse = false }) => {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <ScrollFadeIn delay={0.3}>
        <img
          src={image}
          alt={title}
          className="w-full h-[250px] rounded-2xl shadow-lg object-cover"
        />
      </ScrollFadeIn>
      <div data-aos="fade-left">
        <ScrollFadeIn delay={0.4}>
          <h2 className="text-3xl font-bold text-red-700 mb-4">{title}</h2>
        </ScrollFadeIn>
        {description && <div>{description}</div>}
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base pl-1">
          {features.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Steelfabrication;
