import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ExploreCoursesHero() {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-blue-50 via-white to-purple-50 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 relative overflow-hidden">
      
      {/* Left content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex flex-col items-start text-left mb-10 md:mb-0"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
          🚀 Explore Our <span className="text-blue-600">Courses</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-lg">
          Unlock a world of fun and engaging learning experiences designed to boost your child’s skills and curiosity. Learn anytime, anywhere!
        </p>
        <motion.button
          onClick={() => navigate("/subjects")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-2xl hover:shadow-xl transition-all"
        >
          Start Learning
        </motion.button>
      </motion.div>

      {/* Right Hero Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center items-center"
      >
        <div className="w-full max-w-lg md:max-w-xl shadow-2xl rounded-3xl overflow-hidden">
          <img
            src="https://static.toiimg.com/thumb/msid-122150932,imgsize-161283,width-400,resizemode-4/The-dark-side-of-digital-learning.jpg"
            alt="Hero Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Optional floating bubbles */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full opacity-30 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full opacity-30 blur-3xl"
      />
    </section>
  );
}
