import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'John Mwangi',
    role: 'SME Owner',
    text: 'Fantom Capital gave my business the boost it needed. The loan process was quick and transparent. I highly recommend them!',
  },
  {
    name: 'Grace Akinyi',
    role: 'Property Investor',
    text: 'Fantom Estates manages my rental properties professionally. I get regular updates and my tenants are happy. Great team!',
  },
  {
    name: 'David Ochieng',
    role: 'Entrepreneur',
    text: 'The insurance solutions from Fantom Insure gave me peace of mind for my business assets. They explained everything clearly.',
  },
  {
    name: 'Yusuf Karanja',
    role: 'CEO, Fantom Group',
    text: 'Our mission is to build a legacy of trust and excellence. Every day we work to empower Kenyans through our integrated services.',
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-12 bg-white">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-fantomBlue text-center mb-12"
      >
        What Our Clients Say
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-fantomGreen relative"
          >
            <Quote className="absolute top-4 right-4 text-fantomGreen/20 w-8 h-8" />
            <div className="flex items-center mb-3">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
            </div>
            <p className="text-gray-700 italic mb-4">"{t.text}"</p>
            <div>
              <p className="font-bold text-fantomBlue">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;