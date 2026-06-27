import { Link } from 'react-router-dom';
import { Building2, ArrowLeft } from 'lucide-react';

const Capital = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-12 bg-white">
      <Link to="/services" className="inline-flex items-center gap-2 text-fantomBlue hover:text-fantomGreen mb-6">
        <ArrowLeft size={20} /> Back to Services
      </Link>
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <div className="flex items-center gap-4 mb-6">
          <Building2 className="w-12 h-12 text-fantomGreen" />
          <h1 className="text-3xl font-bold text-fantomBlue">Fantom Capital</h1>
        </div>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700">
            <strong>Fantom Capital</strong> is a CBK-licensed Digital Credit Provider offering tailored financial solutions for SMEs and individual traders.
          </p>
          <h3 className="text-xl font-semibold text-fantomBlue mt-6">What We Offer</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Working capital loans for small businesses</li>
            <li>Fantom Pay mobile app for savings and loan management</li>
            <li>Quick disbursement and flexible repayment plans</li>
          </ul>
          <h3 className="text-xl font-semibold text-fantomBlue mt-6">Target Audience</h3>
          <p className="text-gray-700">SMEs, traders, and entrepreneurs in Kenya who need accessible credit to grow their operations.</p>
          <h3 className="text-xl font-semibold text-fantomBlue mt-6">Our Team</h3>
          <p className="text-gray-700">Our dedicated team of finance experts is committed to understanding your business needs and providing personalized support.</p>
        </div>
      </div>
    </div>
  );
};

export default Capital;