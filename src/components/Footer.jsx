import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, message } = formData;
  
    if (!fullName || !email || !message) {
      alert("Please fill in all fields");
      return;
    }
  
    const toEmail = "anell@aljahrasteelprojects.com"; // 
    const subject = `Message from ${fullName}`;
    const body = `Hi,\n\nYou have received a message:\n\nName: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    const mailtoURL = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoURL;
  };
  
  return (
    <footer className="bg-[#1D1C1C] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Get in Touch */}
        <div>
          <h4 className="text-xl font-bold mb-2 uppercase relative inline-block">
            Get in Touch
            <span className="block w-10 h-1 bg-red-500 mt-1"></span>
          </h4>
          <div className="mt-4 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="text-red-500 w-5 h-5 mt-1" />
              <div>
                <strong className="uppercase text-sm">Office Address</strong>
                <br />
                <span className="text-gray-300">
                  AL Jahara Steel Projects, Flot:23, P.O. Box 577, Al Ohi, Near City Center, Sohar, PC:311
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-red-500 w-5 h-5 mt-1" />
              <div>
                <strong className="uppercase text-sm">Call Us 24/7</strong>
                <br />
                <span className="text-gray-300">+968 7279 4949</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-red-500 w-5 h-5 mt-1" />
              <div>
                <strong className="uppercase text-sm">Email Address</strong>
                <br />
                <span className="text-gray-300">anell@aljahrasteelprojects.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div>
          <h4 className="text-xl font-bold mb-2 uppercase relative inline-block">
            Business Hours
            <span className="block w-10 h-1 bg-red-500 mt-1"></span>
          </h4>
          <div className="mt-4 text-sm text-gray-300">
            
            <div className="mt-3 space-y-1">

              <p>
                <span className="text-white italic">Sunday to Thursday: 08:00 – 18:00</span>
              </p>

              <p>
              <span className="text-white italic">Friday: Closed</span>
              </p>

              <p>
              <span className="text-white italic">Saturday: 08:00 – 18:00</span>
              </p>

            </div>
          </div>
        </div>

        {/* Quick Contact Form */}
        <div>
          <h4 className="text-xl font-bold mb-2 uppercase relative inline-block">
            Quick Contact
            <span className="block w-10 h-1 bg-red-500 mt-1"></span>
          </h4>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-black">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 rounded bg-transparent border border-gray-600 text-sm text-white placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-transparent border border-gray-600 text-sm text-white placeholder-gray-400"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-transparent border border-gray-600 text-sm text-white placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded"
            >
              Contact us <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

     

      {/* Copyright */}
      <div className="bg-[#CC1F3A] text-center py-2 text-white text-sm">
        AL JAHARA © 2025. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
