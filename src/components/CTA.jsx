import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="relative z-10 flex justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl shadow-black/10 p-8 sm:p-10 mb-2 translate-y-0 border border-gray-300">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-fantomBlue mb-3">
            Ready to Unlock Your Potential?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-xl mx-auto">
            Let’s discuss how Fantom Group can help secure your investments,
            manage your property, and protect what matters most.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-fantomGreen text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-fantomGreen/80 transition shadow-md hover:shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;