import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-48 h-48 bg-indigo-600 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-56 h-56 bg-pink-600 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 15 }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Brand & Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            IQGalaxy
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Empowering young minds with gamified, AI-powered learning adventures. 
            Fun, interactive, and futuristic education for kids everywhere!
          </p>
        </motion.div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-lg font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-indigo-400 transition">How It Works</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-indigo-400 transition">Features</Link>
              </li>
              <li>
                <Link to="/subjects" className="hover:text-indigo-400 transition">Demo</Link>
              </li>
              <li>
                <Link to="/games" className="hover:text-indigo-400 transition">Gamification</Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-400 transition">Help Center</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-indigo-400 transition">FAQ</Link>
              </li>
              <li>
                <Link to="/guides" className="hover:text-indigo-400 transition">Guides</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-400 transition">Community</Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link to="/about" className="hover:text-indigo-400 transition">About Us</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-indigo-400 transition">Careers</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-400 transition">Team</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-indigo-400 transition">Partnerships</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-400 transition">Contact</Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link to="/privacy" className="hover:text-indigo-400 transition">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-indigo-400 transition">Terms of Service</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-indigo-400 transition">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-indigo-400 transition">Security</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-indigo-400 transition">Accessibility</Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between border-t border-slate-700 pt-6"
        >
          {/* Social icons */}
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 hover:text-blue-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 hover:text-blue-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-pink-500 transition" />
            </a>
            <a href="https://www.linkedin.com/in/mohitmauryadev/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-blue-700 transition" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-6 h-6 hover:text-red-600 transition" />
            </a>
          </div>

          {/* Newsletter / CTA */}
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Subscribe to Newsletter"
              className="px-4 py-2 rounded-l-2xl text-slate-900 focus:outline-none"
            />
           
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-6 text-center text-slate-400 text-sm"
        >
          © {new Date().getFullYear()} IQGalaxy. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}