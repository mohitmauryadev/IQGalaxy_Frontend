import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function DemoPreview() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">

      {/* 1. Intro Slide */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4"
        >
          Explore the <span className="text-blue-600">Demo</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl"
        >
          Take a closer look at how kids play, learn and grow on our platform.
        </motion.p>
      </div>

      {/* 2. Desktop Preview */}
      <div className="h-screen flex items-center justify-center px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="shadow-2xl rounded-3xl overflow-hidden border-4 border-gray-200"
        >
          <img
            src="https://png.pngtree.com/background/20230426/original/pngtree-two-asian-children-using-their-tablets-picture-image_2482635.jpg"
            alt="Desktop Demo"
            className="w-[900px] h-[500px] object-cover"
          />
        </motion.div>
      </div>

      {/* 3. Mobile Preview */}
      <div className="h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-6 bg-gradient-to-r from-pink-50 to-purple-50">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="shadow-xl rounded-[3rem] border-4 border-gray-200 overflow-hidden"
        >
          <img
            src="https://png.pngtree.com/background/20230516/original/pngtree-two-kids-write-on-a-table-in-the-yard-picture-image_2602193.jpg"
            alt="Mobile Demo"
            className="w-[300px] md:w-[350px] h-[600px] md:h-[700px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-md text-center md:text-left"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            Learn Anywhere
          </h3>
          <p className="text-gray-700 text-lg">
            Kids can continue their fun learning adventure right from mobile — anytime, anywhere.
          </p>
        </motion.div>
      </div>

      {/* 4. Interactive Floating Cards */}
      <div className="h-screen flex items-center justify-center px-6 bg-gradient-to-r from-yellow-50 to-green-50 relative overflow-hidden">
        <motion.div
          onClick={() => navigate("/games")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute bottom-20 right-20 cursor-pointer bg-pink-500 text-white px-6 py-4 rounded-2xl shadow-lg font-semibold select-none"
        >
          🎮 Fun Games
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-xl"
        >
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive & Fun
          </h3>
          <p className="text-lg text-gray-700">
            The learning journey feels like an adventure with floating rewards, challenges, and surprises everywhere!
          </p>
        </motion.div>
      </div>

      {/* 5. Final CTA Slide */}
      <div className="h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-r from-purple-50 to-blue-50">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6"
        >
          Ready to Try?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/subjects")}
          className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full shadow-2xl"
        >
          🚀 Start Demo Now
        </motion.button>
      </div>
    </section>
  );
}
