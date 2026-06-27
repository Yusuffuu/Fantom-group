import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

const Insure = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-12 bg-white">
      <Link to="/services" className="inline-flex items-center gap-2 text-fantomBlue hover:text-fantomGreen mb-6">
        <ArrowLeft size={20} /> Back to Services
      </Link>
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <div className="flex items-center gap-4 mb-6">
          <Shield className="w-12 h-12 text-fantomGreen" />
          <h1 className="text-3xl font-bold text-fantomBlue">Fantom Insure</h1>
        </div>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700">
            <strong>Fantom Insure</strong> offers comprehensive insurance products to safeguard your business, property, and assets.
          </p>
          <h3 className="text-xl font-semibold text-fantomBlue mt-6">What We Offer</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Business insurance (liability, property, and asset protection)</li>
            <li>Property insurance for landlords and homeowners</li>
            <li>Customized insurance packages for SMEs</li>
          </ul>
          <h3 className="text-xl font-semibold text-fantomBlue mt-6">Target Audience</h3>
          <p className="text-gray-700">Business owners, property investors, and individuals who value security and risk management.</p>
          <h3 className="text-xl font-semibold text-fantomBlue mt-6">Our Team</h3>
          <p className="text-gray-700">Our insurance experts work with leading underwriters to ensure you get the best coverage and claims support.</p>
        </div>
      </div>
    </div>
  );
};

export default Insure;