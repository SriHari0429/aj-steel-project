import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Trading1 from '../assets/tarding1.jpg';
import Trading2 from '../assets/trading2.jpg';
import Trading3 from '../assets/trading3.jpg';
import Trading4 from '../assets/trading4.jpg';

function SteelTrading() {
  const headingRef = useRef(null);
  const listRef = useRef(null);
  const imageRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true });
  const listInView = useInView(listRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });

  const leftColumn = [
    'Beams',
    'Columns',
    'Channels',
    'Angles',
    'Plate',
    'Flat Bars',
    'Round Bars',
    'Square Bars'
  ];

  const rightColumn = [
    'Square Hollow Section Tubes',
    'Rectangular Hollow Section Tubes',
    'Circular Hollow Section Pipes',
    'Chequered Plates',
    'Corrugated Sheets',
    'Decking Sheets',
    'Sandwich Panels',
    'Fasteners'
  ];

  return (
    <section className="bg-white py-24 px-6 lg:px-20 mt-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-5xl font-bold text-[#b3042b] inline-block relative">
            Steel Trading
            <span className="block h-1 w-16 bg-red-600 mt-3 mx-auto rounded"></span>
          </h2>
          <p className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto">
            A wide range of stock steel products are available for fast delivery in 
            <span className="font-semibold text-gray-900"> Mild Steel, GI, Stainless Steel, Aluminum</span> etc.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="bg-gray-50 p-10 rounded-2xl shadow-md grid lg:grid-cols-2 gap-10 items-start">

          {/* Product List */}
          <motion.div
            ref={listRef}
            initial={{ opacity: 0, x: -80 }}
            animate={listInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-red-600 mb-4">Our Steel Products Include:</h3>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
              {leftColumn.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
              {rightColumn.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 80 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {[Trading1, Trading2, Trading3, Trading4].map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`Steel Product ${i + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default SteelTrading;
