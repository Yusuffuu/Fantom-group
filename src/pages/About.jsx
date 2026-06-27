import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-12 bg-white">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-fantomBlue mb-6 text-center"
      >
        About Fantom Group
      </motion.h1>
      
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Fantom Group is a diversified Kenyan company with three core pillars: 
        <strong> Fantom Capital</strong> (digital lending), 
        <strong> Fantom Estates</strong> (property management), and 
        <strong> Fantom Insure</strong> (insurance solutions). 
        We are CBK-licensed and headquartered in Nairobi, serving businesses and individuals across the country.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Mission */}
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-fantomGreen"
        >
          <Target className="text-fantomGreen w-12 h-12 mb-4" />
          <h3 className="text-xl font-bold text-fantomBlue mb-2">Mission</h3>
          <p className="text-gray-600">
            To empower Kenyan businesses and property owners with accessible financial services and professional property management that drive growth and prosperity.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-fantomBlue"
        >
          <Eye className="text-fantomBlue w-12 h-12 mb-4" />
          <h3 className="text-xl font-bold text-fantomBlue mb-2">Vision</h3>
          <p className="text-gray-600">
            To become the most trusted integrated financial and real estate services group in East Africa, known for innovation, integrity, and impact.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-fantomGreen"
        >
          <Heart className="text-fantomGreen w-12 h-12 mb-4" />
          <h3 className="text-xl font-bold text-fantomBlue mb-2">Core Values</h3>
          <ul className="text-gray-600 list-disc list-inside space-y-1">
            <li>Integrity & Transparency</li>
            <li>Customer-Centricity</li>
            <li>Innovation</li>
            <li>Professional Excellence</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;