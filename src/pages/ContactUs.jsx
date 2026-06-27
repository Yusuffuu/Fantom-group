import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-12 bg-white">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-fantomBlue text-center mb-12"
      >
        Get In Touch
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - Contact Info & Map */}
        <div>
          <div className="bg-white p-6 rounded-xl shadow-lg mb-6 border border-gray-200">
            <h3 className="text-xl font-bold text-fantomBlue mb-4 flex items-center gap-2">
              <img src="./mappin.svg" alt="Location" className="w-5 h-5" style={{ width: '20px', height: '20px' }} />
              Our Location
            </h3>
            <p className="text-gray-700 mb-2">F17 Ruaraka Square Thika Rd, Kasarani Constituency, Kenya, 00400</p>
            <div className="mt-4 h-48 w-full rounded-lg overflow-hidden">
              <iframe
                title="Fantom Group Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d671.7795249802708!2d36.882858614173834!3d-1.2282380829713764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f157c7e7e716b%3A0x56990f122e209c0c!2sGravity%20Vans%20For%20Hire!5e1!3m2!1sen!2ske!4v1782305176050!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-fantomBlue mb-4">Contact Details</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-gray-700">
                <img src="./phone.svg" alt="Phone" className="w-5 h-5" style={{ width: '20px', height: '20px' }} />
                +254 724 880 000
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <img src="./mail.svg" alt="Email" className="w-5 h-5" style={{ width: '20px', height: '20px' }} />
                hello@fantomgrp.com
              </p>
            </div>
            <div className="mt-6 flex gap-4">
              <a 
                href="https://www.facebook.com/share/1D7BaLXbq6/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-200"
                aria-label="Facebook"
              >
                <img src="./facebook.svg" alt="Facebook" className="w-7 h-7" style={{ width: '28px', height: '28px' }} />
              </a>
              <a 
                href="https://x.com/FantomGrp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-200"
                aria-label="Twitter/X"
              >
                <img src="./x.svg" alt="Twitter/X" className="w-7 h-7" style={{ width: '28px', height: '28px' }} />
              </a>
              <a 
                href="https://www.instagram.com/fantom.capita?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-200"
                aria-label="Instagram"
              >
                <img src="./instagram.svg" alt="Instagram" className="w-7 h-7" style={{ width: '28px', height: '28px' }} />
              </a>
              <a
                href="https://www.tiktok.com/@fantom_estates?is_from_webapp=1&sender_device=pc&web_id=7210591556789052934"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-200"
                aria-label="TikTok"
              >
                <img src="./tiktok.svg" alt="TikTok" className="w-7 h-7" style={{ width: '28px', height: '28px' }} />
              </a>
              <a
                href="https://www.youtube.com/@fantom_media"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-200"
                aria-label="Youtube"
              >
                <img src="./youtube.svg" alt="youtube" className="w-7 h-7" style={{ width: '28px', height: '28px' }} />
              </a>
              <a
                href="https://www.linkedin.com/company/fantom-estates-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-200"
                aria-label="LinkedIn"
              >
                <img src="./linkedin.svg" alt="LinkedIn" className="w-7 h-7" style={{ width: '28px', height: '28px' }} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-bold text-fantomBlue mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-fantomGreen focus:border-fantomGreen"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-fantomGreen focus:border-fantomGreen"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-fantomGreen focus:border-fantomGreen"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-fantomGreen focus:border-fantomGreen"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-fantomGreen focus:border-fantomGreen"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-fantomGreen text-white py-3 rounded-lg font-semibold hover:bg-fantomGreen/80 transition flex items-center justify-center gap-2"
            >
              <img src="./send.svg" alt="Send" className="w-5 h-5" style={{ width: '24px', height: '24px' }} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;