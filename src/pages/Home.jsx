import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';

const Home = () => {
  const location = useLocation();

  // 🔽 Scroll to section when hash changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Small delay ensures the DOM is fully painted
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // No hash → scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <div>
      {/* ✅ FIXED: className and style are now inside the <section> tag */}
      <section
        id="Home"
        className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-black"
        style={{
          backgroundImage: "url('./hero-bg.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-screen-2xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="mb-6"
          >
            <img
              src="./Fantom_group.png"
              alt="Fantom Group"
              className="h-100 w-auto mx-auto drop-shadow-lg"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-md"
          >
            <span className="text-fantomGreen">Writing</span> Potential,{" "}
            <span className="text-fantomGreen">Managing</span> Property
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow"
          >
            Empowering businesses and property owners across Kenya with trusted
            financial solutions and professional property management.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* ⚠️ Update these links to point to the new hash sections */}
            <Link
              to="#services"
              className="inline-flex items-center gap-2 bg-fantomGreen text-white px-6 py-3 rounded-lg font-semibold hover:bg-fantomGreen/80 transition shadow-lg"
            >
              Explore Our Services
            </Link>
            <Link
              to="#contact"
              className="inline-flex items-center gap-2 border-2 border-fantomBlue text-fantomBlue px-6 py-3 rounded-lg font-semibold hover:bg-fantomBlue hover:text-white transition shadow-lg bg-white/90"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;