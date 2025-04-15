import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants for fade-in and slide-up effects
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, message } = formData;
  
    if (!fullName || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    const toEmail = "info@aljahrasteelprojects.com";
    const subject = `Message from ${fullName}`;
    const body = `Hi,\n\nYou have received a message:\n\nName: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`;
  
    const mailtoURL = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    // This will trigger default mail client (app or web-based)
    window.location.href = mailtoURL;
  };
  
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 mt-48">
      {/* Left Section - Contact Info */}
      <div>
        <motion.h2
          className="text-2xl font-bold uppercase text-red-600 mb-2"
          variants={variants}
          initial="hidden"
          whileInView="visible"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          className="w-16 h-1 bg-red-600 mb-6 rounded"
          variants={variants}
          initial="hidden"
          whileInView="visible"
        ></motion.div>

        <motion.div
          className="mb-10"
          variants={variants}
          initial="hidden"
          whileInView="visible"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2 border-b-2 border-red-600 inline-block">Head Office & Workshop</h3>
          <p className="mt-2 font-semibold">AL Jahara Steel Projects</p>
          <p className="text-gray-700">Flot:23, P.O. Box 577, Al Ohi, </p>
          <p className="text-gray-700">Near City Center, Sohar, PC:311.</p>
          <div className="mt-2 space-y-1">
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-red-600" /> +968 7279 4949</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-red-600" /> Info@aljahrasteelprojects.com</p>
          </div>
        </motion.div>

        {/* <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2 border-b-2 border-red-600 inline-block">Workshop</h3>
          <p className="mt-2 font-semibold">AL Jahara Steel Projects</p>
          <p className="text-gray-700">Flot:23, P.O. Box 577, Al Ohi, </p>
          <p className="text-gray-700">Near City Center, Sohar, PC:311.</p>
          <div className="mt-2 space-y-1">
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-red-600" /> +968 7279 4949</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-red-600" /> Info@aljahrasteelprojects.com</p>
          </div>

          <div className="mt-4 text-gray-700">
            <p>Sunday to Thursday: 08:00 – 18:00</p>
            <p>Friday: Closed</p>
            <p>Saturday: 08:00 – 18:00</p>
          </div>
        </motion.div> */}
      </div>

      {/* Right Section - Contact Form */}
      <div>
        <motion.h2
          className="text-2xl font-bold uppercase text-red-600 mb-2"
          variants={variants}
          initial="hidden"
          whileInView="visible"
        >
          Send a Message
        </motion.h2>
        <motion.div
          className="w-16 h-1 bg-red-600 mb-4 rounded"
          variants={variants}
          initial="hidden"
          whileInView="visible"
        ></motion.div>
        <motion.p
          className="text-gray-600 mb-6"
          variants={variants}
          initial="hidden"
          whileInView="visible"
        >
          We welcome your questions, inquiries, and feedback. If you would like to receive more information, please fill out the form below.
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            variants={variants}
            initial="hidden"
            whileInView="visible"
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            variants={variants}
            initial="hidden"
            whileInView="visible"
          />
          <motion.textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            variants={variants}
            initial="hidden"
            whileInView="visible"
          ></motion.textarea>
          <motion.button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
            variants={variants}
            initial="hidden"
            whileInView="visible"
          >
            Contact Us
          </motion.button>
        </form>
      </div>
    </div>
  );
}
