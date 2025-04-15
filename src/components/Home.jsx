import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomeImage from '../assets/Home1.jpg';
import Tech1 from "../assets/tech1.webp";
import Tech2 from '../assets/tech2.jpg';
import Tech3 from '../assets/tech3.webp';
import Tech4 from '../assets/tech4.jpg';
import Installation1 from '../assets/installation1.jpg';
import Installation2 from '../assets/installation2.avif';
import Installation3 from '../assets/installation3.webp';
import Blast1 from '../assets/blast1.jpg';
import Blast2 from '../assets/blast2.jpg';
import Blast3 from '../assets/blast3.jpg';
import Blast4 from '../assets/blast4.jpg';
import Blast5 from '../assets/blast5.jpg';
import Blast6 from '../assets/blast6.jpg';
import Man1 from '../assets/man1.webp';
import Man2 from '../assets/man2.jpg';
import Man3 from '../assets/man3.webp';
import Man4 from '../assets/man4.jpeg';

import Crane from '../assets/crane.png';

import ScrollFadeIn from './ScrollFadeIn'; // Make sure this is correctly implemented

const texts = [
  {
    heading: "Integrity and Commitment",
    description: "We uphold honesty and dedication in our service",
  },
  {
    heading: "Service Excellence",
    description: "We strive continuously to excel in our service",
  },
  {
    heading: "Offer High Quality Products and Services",
    description: "With best standards in every discipline and practice",
  },
];

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

const HoverCard = ({ images, title }) => {
  const [hovered, setHovered] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (!hovered) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [hovered, images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-500 transform hover:-translate-y-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[index]}
              src={images[index]}
              alt={title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="object-cover w-full h-full absolute top-0 left-0"
            />
          </AnimatePresence>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white py-4 text-center">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setShow(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
  className="relative h-screen w-full bg-cover bg-center flex items-center"
  style={{ backgroundImage: `url(${HomeImage})` }}
>
  <div className="absolute inset-0 bg-black/50" />
  
  <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-20">
    <div className="max-w-4xl mx-auto text-white text-left">
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key={index}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ScrollFadeIn>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
                {texts[index].heading}
              </h1>
            </ScrollFadeIn>
            <p className="text-base sm:text-lg md:text-2xl text-gray-300 font-semibold">
              {texts[index].description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
</section>
 {/* What We Do Section */}
 <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <ScrollFadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-[#b3042b] mb-16 relative">
              What We Do
              <span className="block w-20 sm:w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"></span>
            </h2>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <HoverCard images={[Blast1, Blast2, Blast3, Blast4,Blast5, Blast6]} title="Fabrication, Blasting and Painting" />
            <HoverCard images={[Installation1, Installation2, Installation3]} title="Installation" />
            <HoverCard images={[Tech1, Tech2, Tech3, Tech4]} title="Maintenance and Technical Services " />
            <HoverCard images={[Man1, Man2, Man3, Man4]} title="Manpower solutions" />
          </div>
        </div>
      </section>



      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center">
          <ScrollFadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-center text-[#b3042b] mb-16 relative inline-block">
              Our Core Values
              <span className="block w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"></span>
            </h2>
          </ScrollFadeIn>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
            {/* Left side values */}
            <div className="flex flex-col gap-14">
              {[
                {
                  icon: "⚙️",
                  title: "INNOVATION",
                  desc: "We support and recognize bringing in and applying novel ideas to enhance the Company’s success"
                },
                {
                  icon: "🔖",
                  title: "SERVICE EXCELLENCE",
                  desc: "We strive continuously to excel in our service to our Customers."
                },
                {
                  icon: "📈",
                  title: "INTEGRITY & COMMITMENT",
                  desc: "We uphold honesty and dedication in serving our Company"
                },
              ].map((item, idx) => (
                <ScrollFadeIn key={idx}>
                  <div className="flex items-center gap-6 text-right">
                    <div className="text-xl w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>

            {/* Crane image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-72 sm:w-96"
            >
              <img src={Crane} alt="Crane Illustration" className="w-80" />
            </motion.div>

            {/* Right side values */}
            <div className="flex flex-col gap-14">
              {[
                {
                  icon: "🚩",
                  title: "EMPOWERMENT",
                  desc: "We strive to create an environment in which every employee feels free to take initiative in excelling in performance"
                },
                {
                  icon: "👥",
                  title: "TEAM WORK",
                  desc: "We value collaboration among employees in achieving Company goals and in creating a harmonious work climate"
                },
                {
                  icon: "🔗",
                  title: "FREEDOM TO DO MORE",
                  desc: "We promote freedom for our employees to take greater responsibility and to take ownership"
                },
              ].map((item, idx) => (
                <ScrollFadeIn key={idx}>
                  <div className="flex items-center gap-6">
                    <div className=" text-white text-xl w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
