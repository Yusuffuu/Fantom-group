import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <motion.div
      className="fixed right-4 bottom-8 z-40 flex flex-col items-end gap-2"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {/* Small floating card */}
      <motion.div
        className="bg-white rounded-xl shadow-lg shadow-black/15 border border-gray-200 p-3 max-w-50 cursor-pointer hover:shadow-xl transition-shadow"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.05, y: -8 }}
      >
        <Link to="/#contact" className="block text-center">
          <motion.div
            className="w-10 h-10 bg-fantomGreen rounded-full mx-auto mb-2 flex items-center justify-center"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </motion.div>
          <p className="text-xs font-semibold text-fantomBlue leading-tight">
            Let's Talk
          </p>
          <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">
            We're here to help
          </p>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CTA;