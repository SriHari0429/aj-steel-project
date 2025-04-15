import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Project from '../assets/project.jpg';

function ProjectSupport() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isLeftInView = useInView(leftRef, { once: true });
  const isRightInView = useInView(rightRef, { once: true });

  return (
    <div className="bg-white  px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-40 mb-10">
      {/* Centered Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-[#b3042b] mb-2">
          Project Support Services
          <span className="block h-1 w-16 bg-red-600 mt-5 mb-10 mx-auto rounded"></span>
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left Content */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isLeftInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-gray-700 mb-4">
            <span className="font-semibold text-red-700">AL JAHRA</span> provides project-based multi-disciplined manpower and workforce solutions to diverse industrial sectors. With increasing complexity in today’s industry and specific demand changing from project to project, it is of the utmost importance to work with specialized professionals. Hiring <span className="font-semibold text-red-700">AL JAHRA</span> manpower services ensures that each task in your project is executed by the adequately qualified and certified workforce.
          </p>

          <p className="text-gray-700 mb-4">
            All our manpower strictly adheres to all industry codes of safety and quality standards. Our team comprises of highly skilled:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
              'Engineers',
              'Supervisors',
              'Pipe Fitters',
              'Welders',
              'Structural Fabricators',
              'Instrument Technician',
            ].map((role, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 shadow-sm transition"
              >
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <p className="text-gray-800 font-semibold">{role}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 mt-4">
            who can expertly streamline even the most complex project from concept to delivery.
          </p>
        </motion.div>

        {/* Right Image with Animation */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 100 }}
          animate={isRightInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex items-center justify-center h-full p-6 text-center text-gray-500 italic"
        >
          <img src={Project} alt="Project" className="rounded-xl shadow-lg" />
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectSupport;
