import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const Estates = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-12 bg-white">
      <Link to="/services" className="inline-flex items-center gap-2 text-fantomBlue hover:text-fantomGreen mb-6">
        <ArrowLeft size={20} /> Back to Services
      </Link>
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <div className="flex items-center gap-4 mb-6">
          <Home className="w-12 h-12 text-fantomBlue" />
          <h1 className="text-3xl font-bold text-fantomBlue">Fantom Estates</h1>
        </div>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700">
            <strong>Fantom Estates</strong> provides professional property management services for residential and commercial properties across Nairobi.
          </p>
          <h3 className="text-xl font-semibold text-fantomBlue mt-6">What We Offer</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Tenant management and lease administration</li>
            <li>Property maintenance and inspections</li>
            <li>Marketing and tenant screening</li>
          </ul>
          <h3 className="text-xl font-semibold text-fantomBlue mt-6">Target Audience</h3>
          <p className="text-gray-700">Property owners, investors, and tenants seeking reliable and professional property management.</p>
          <h3 className="text-xl font-semibold text-fantomBlue mt-6">Our Team</h3>
          <p className="text-gray-700">Our team comprises experienced property managers, maintenance staff, and customer service professionals dedicated to maximizing your property's value.</p>
        </div>
      </div>
    </div>
  );
};

export default Estates;