import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutHero() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/subjects"); // Navigate to subjects page
  };

  return (
    <section className="relative overflow-hidden text-white transition-all duration-1000">
      {/* Background Image */}
      <img
        src="https://img.freepik.com/premium-photo/brain-light-bulb-gears-open-book-symbolizing-education-knowledge-concept_687463-8112.jpg"
        alt="background pattern"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Decorative Floating Sparkles */}
      <motion.div
        className="absolute w-64 h-64 bg-white/10 rounded-full top-10 left-10 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-blue-300/10 rounded-full bottom-10 right-10 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
        >
          About <span className="text-blue-400">IQGalaxy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
        >
          A gamified AI-based learning platform for kids 🚀. <br />
          Where learning meets fun, curiosity sparks creativity, and every child explores the galaxy of knowledge ✨
        </motion.p>

        {/* Start Exploring Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={handleExplore}
            className="px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl rounded-3xl shadow-lg flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all duration-300 transform hover:scale-105"
          >
            <Sparkles className="w-6 h-6" />
            Start Exploring
          </button>
        </motion.div>
      </div>

      {/* Optional Glow Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/10 to-transparent blur-3xl"></div>
    </section>
  );
}
