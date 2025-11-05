import { motion } from "framer-motion";
import { Target } from "lucide-react";

export default function OurMission() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Mission
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
        </motion.div>

        {/* Mission Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="bg-blue-100 p-6 rounded-2xl shadow-md">
              <Target className="w-16 h-16 text-blue-600" />
            </div>
          </div>

          {/* Text */}
          <div className="text-left md:w-3/4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Empowering Young Minds
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              At <span className="font-bold text-blue-600">IQGalaxy</span>, our
              mission is to make learning fun, engaging, and accessible for kids.
              We aim to blend education with creativity and technology, so
              children can explore knowledge in a way that inspires curiosity,
              critical thinking, and lifelong learning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}