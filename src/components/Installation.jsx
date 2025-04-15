import React from 'react';
import { FaWrench, FaTools, FaShieldAlt, FaPaintBrush } from 'react-icons/fa';
import Serinstall1 from '../assets/serinstall1.jpeg';
import Serinstall2 from '../assets/serinstall2.jpg';
import Serinstall3 from '../assets/serinstall3.jpeg';

const Installation = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <h2 className="text-5xl font-bold text-red-600 text-center relative">
          Structural Steel Installation
          <span className="block h-1 w-16 bg-red-600 mt-3 mx-auto rounded"></span>
        </h2>
        <p className="mt-4 text-lg text-gray-700 text-center max-w-3xl mx-auto">
          We specialize in the complete installation of structural steel components,
          ensuring precision, quality, and safety in every project. From large-scale
          industrial projects to small custom jobs, we handle installations with
          professionalism and efficiency.
        </p>

        {/* Images Row */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src={Serinstall1} alt="Installation 1" className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
          <img src={Serinstall2}  alt="Installation 2" className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
          <img src={Serinstall3}  alt="Installation 3" className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Step 1 */}
        <div className="mt-12 flex flex-col sm:flex-row gap-8">
          <div className="w-full sm:w-1/2 bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-red-600 flex items-center gap-2">
              <FaTools size={24} />
              Site Assessment and Planning
            </h3>
            <p className="mt-2 text-lg text-gray-700">
              Before beginning any installation, we conduct a comprehensive site
              assessment, ensuring all measurements, conditions, and requirements are
              properly accounted for. This helps us to plan the installation process
              meticulously.
            </p>
          </div>

          <div className="w-full sm:w-1/2 bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-red-600 flex items-center gap-2">
              <FaShieldAlt size={24} />
              Safety Measures and Compliance
            </h3>
            <p className="mt-2 text-lg text-gray-700">
              Safety is our priority during every step of the installation process.
              Our team ensures strict adherence to safety protocols, industry standards,
              and regulations to protect workers and the site environment.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mt-12 flex flex-col sm:flex-row gap-8">
          <div className="w-full sm:w-1/2 bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-red-600 flex items-center gap-2">
              <FaPaintBrush size={24} />
              Surface Preparation and Coating
            </h3>
            <p className="mt-2 text-lg text-gray-700">
              Our team ensures that all steel components are properly prepared for
              installation. We perform grit blasting, sanding, and surface cleaning, and
              apply corrosion-resistant coatings to increase the longevity of the steel
              structure.
            </p>
          </div>

          <div className="w-full sm:w-1/2 bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-red-600 flex items-center gap-2">
              <FaTools size={24} />
              Precision Installation
            </h3>
            <p className="mt-2 text-lg text-gray-700">
              We execute precise steel installation using advanced tools and techniques.
              Our experienced team ensures that every steel element is installed correctly,
              ensuring structural integrity and accuracy.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="mt-12 bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-red-600 flex items-center gap-2">
            <FaWrench size={24} />
            Final Inspection and Testing
          </h3>
          <p className="mt-2 text-lg text-gray-700">
            Once the installation is complete, our team conducts thorough inspections
            and testing to ensure everything meets the required standards. This includes
            verifying structural alignment, checking load-bearing capacity, and assessing
            overall stability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Installation;
