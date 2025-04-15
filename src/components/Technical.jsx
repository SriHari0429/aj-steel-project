import React from 'react';
import { PencilRuler, Settings2, Ruler, HardHat, CheckCircle, FileText } from 'lucide-react';
import marine1 from '../assets/marine1.jpg';
import marine2 from '../assets/marine2.jpg';
import marine3 from '../assets/marine3.png';
import marine4 from '../assets/marine4.jpg';
import marine5 from '../assets/marine5.jpg';
import marine6 from '../assets/marine6.jpg';

import ScrollFadeIn from './ScrollFadeIn';

const services = [
  {
    title: 'Steel Structure Design & Drafting',
    description: 'Customized CAD designs and detailed shop drawings for all types of steel structures.',
    icon: <PencilRuler className="text-red-600 w-6 h-6" />,
    img: marine1,
  },
  {
    title: 'Material Selection & Engineering Consultation',
    description: 'Expert advice on material grades, specifications, and engineering practices for optimal performance.',
    icon: <Settings2 className="text-red-600 w-6 h-6" />,
    img: marine2,
  },
  {
    title: 'Site Measurements & Technical Surveys',
    description: 'Accurate site inspections and measurements to ensure seamless fabrication and installation.',
    icon: <Ruler className="text-red-600 w-6 h-6" />,
    img: marine3,
  },
  {
    title: 'Installation Supervision & Technical Support',
    description: 'On-site technical guidance and supervision to ensure proper alignment, welding, and assembly.',
    icon: <HardHat className="text-red-600 w-6 h-6" />,
    img: marine4,
  },
  {
    title: 'Quality Assurance & Testing',
    description: 'Compliance with industry standards through inspections, load testing, and quality control protocols.',
    icon: <CheckCircle className="text-red-600 w-6 h-6" />,
    img: marine5,
  },
  {
    title: 'As-Built Drawings & Documentation',
    description: 'Complete technical documentation to support future maintenance and upgrades.',
    icon: <FileText className="text-red-600 w-6 h-6" />,
    img: marine6,
  },
];

export default function Technical() {
  return (
    <section className="bg-white py-20 mt-20 px-6 md:px-14 text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-5xl font-bold text-[#b3042b]  mb-4 tracking-wide">
          Technical Services
        </h2>
        <span className="block h-1 w-16 bg-red-600 mt-3 mx-auto rounded"></span>
        <p className="text-lg leading-relaxed mb-4 mt-10">
          At <span className="font-semibold italic">Al Jahra Steel Projects and Trade LLC</span>, we offer specialized <strong><em>Technical Services</em></strong> to support every stage of your steel fabrication and installation projects.
        </p>
        <p className="text-lg leading-relaxed">
          From design consultation to on-site technical assistance, we ensure all components are fabricated, installed, and maintained to the highest standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ScrollFadeIn key={index} delay={index * 0.1}>
            <div className="flex bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-32 h-32 object-cover rounded-l-xl"
              />
              <div className="p-5 flex-1">
                <div className="flex items-center mb-2">
                  {service.icon}
                  <h3 className="ml-3 text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </section>
  );
}
