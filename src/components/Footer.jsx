import { Link } from "react-router-dom";
import { Building2, Home, Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="./Fantom_group.png"
                alt="Fantom Group"
                className="h-24 w-auto brightness-0 invert" // makes logo white
              />
            </Link>
            <p className="text-sm text-gray-400">
              Writing Potential, Managing Property – trusted financial and
              property solutions across Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-fantomGreen transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-fantomGreen transition">Services</Link></li>
              <li><Link to="/testimonials" className="hover:text-fantomGreen transition">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-fantomGreen transition">Contact</Link></li>
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
              Our Brands
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-fantomGreen" />
                <Link to="/capital" className="hover:text-fantomGreen transition">
                  Fantom Capital
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <Home className="w-4 h-4 text-fantomGreen" />
                <Link to="/estates" className="hover:text-fantomGreen transition">
                  Fantom Estates
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
               <Shield className="w-4 h-4 text-fantomGreen" />
               <Link to="/insure" className="hover:text-fantomGreen transition">
                  Fantom Insure
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
              Connect
            </h3>
            <div className="flex space-x-4 mb-4">
              {/* Replace with your actual SVG file names */}
              <a href="https://www.facebook.com/share/1D7BaLXbq6/" className="hover:text-fantomGreen transition" target="_blank" rel="noopener noreferrer">
                <img src="./facebook.svg" alt="Facebook" className="h-5 w-5" />
              </a>
              <a href="https://x.com/FantomGrp" className="hover:text-fantomGreen transition" target="_blank" rel="noopener noreferrer">
                <img src="./x.svg" alt="Twitter" className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/fantom.capita?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-fantomGreen transition" target="_blank" rel="noopener noreferrer">
                <img src="./instagram.svg" alt="Instagram" className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@fantom_estates?is_from_webapp=1&sender_device=pc&web_id=7210591556789052934" className="hover:text-fantomGreen transition" target="_blank" rel="noopener noreferrer">
                <img src="./tiktok.svg" alt="TikTok" className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@fantom_media" className="hover:text-fantomGreen transition" target="_blank" rel="noopener noreferrer">
                <img src="./youtube.svg" alt="YouTube" className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/fantom-estates-limited/" className="hover:text-fantomGreen transition" target="_blank" rel="noopener noreferrer">
                <img src="./linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
              </a>
            </div>
            <div className="text-sm text-gray-400">
            </div>
            <p className="text-sm text-gray-400">
              hello@fantomgrp.com<br />
              +254 724 880 000
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          &copy; {currentYear} Fantom Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;