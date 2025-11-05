import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

export default function CTASection() {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Animated Background Shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 left-10 w-48 h-48 rounded-full bg-purple-300 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: [1.2, 1, 1.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-pink-300 blur-3xl"
      />

      {/* CTA Content */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-2xl px-6"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          🚀 Ready to Boost Your Child’s Learning?
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-700">
          Join <span className="font-bold text-indigo-600">IQGalaxy</span> today and unlock a world of gamified, fun-filled, and futuristic education designed for kids. 
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/subjects")} // ✅ Navigate to Subject.jsx
            className="px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg bg-indigo-600 text-white flex items-center gap-2 hover:bg-indigo-700 transition"
          >
            Get Started Now <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg border border-gray-400 text-gray-700 bg-white hover:bg-gray-100 transition"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
