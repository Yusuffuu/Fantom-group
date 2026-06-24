import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Home, Shield } from 'lucide-react';

const services = [
  {
    id: 'capital',
    title: 'Fantom Capital',
    subtitle: '...Because Money Never Sleeps',
    image: './Fantom_capital.png',
    focus: 'CBK-licensed digital credit provider offering working capital loans and savings solutions for SMEs and traders.',
    link: '/capital',
    icon: <Building2 className="h-6 w-6 text-fantomGreen" />,
  },
  {
    id: 'estates',
    title: 'Fantom Estates',
    subtitle: 'Where Your Property Gets the Most',
    image: './Fantom_estates.png',
    focus: 'Professional property management services for residential and commercial properties, including tenant management and maintenance.',
    link: '/estates',
    icon: <Home className="h-6 w-6 text-fantomBlue" />,
  },
  {
    id: 'insure',
    title: 'Fantom Insure',
    subtitle: 'Protecting What Matters Most',
    image: './Fantom_insure.png',
    focus: 'Comprehensive insurance solutions tailored for businesses and property owners, providing peace of mind and risk protection.',
    link: '/insure',
    icon: <Shield className="h-6 w-6 text-fantomGreen" />,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-blue-50/30 to-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-fantomBlue mb-4"
          >
            Our Services
          </motion.h1>
          <div className="w-24 h-1 bg-fantomGreen mx-auto mb-6 rounded-full" />
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Fantom Group delivers excellence across <span className="text-fantomBlue font-semibold">three key pillars</span>.
            Explore each to see how we can support your goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image with gradient background */}
              <div className="relative h-48 bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-36 w-auto object-contain p-2"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150x150?text=Service';
                  }}
                />
                {/* Optional colored accent bar at top */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${
                  index === 0 ? 'bg-fantomGreen' :
                  index === 1 ? 'bg-fantomBlue' :
                  'bg-fantomGreen'
                }`} />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-fantomBlue mb-1">{service.title}</h3>
                <p className="text-sm text-fantomGreen font-medium mb-3">{service.subtitle}</p>

                <div className="mb-4">
                  <span className="text-fantomBlue font-semibold text-sm uppercase tracking-wider">Focus:</span>
                  <p className="text-gray-700 text-sm leading-relaxed mt-1">{service.focus}</p>
                </div>

                {/* Spacer to push button to bottom */}
                <div className="grow" />

                {/* Visit Button */}
                <Link
                  to={service.link}
                  className="w-full bg-linear-to-r from-fantomGreen to-fantomGreen/80 text-white py-2.5 rounded-lg hover:shadow-lg hover:shadow-fantomGreen/30 transition-all duration-300 flex items-center justify-center gap-2 font-medium group"
                >
                  <span>Visit</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-fantomBlue/5 rounded-full border border-fantomBlue/10">
            <span className="text-fantomBlue font-medium">Need help choosing?</span>
            <Link to="/contact" className="text-fantomGreen font-semibold hover:underline">
              Contact us →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;