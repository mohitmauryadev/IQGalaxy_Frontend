import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export default function OurVision() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <Eye className="w-14 h-14 text-blue-600" strokeWidth={1.5} />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our <span className="text-blue-600">Vision</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            At <span className="font-semibold text-blue-600">IQGalaxy</span>, our vision is to 
            revolutionize learning by combining <span className="text-yellow-600">playful discovery</span>, 
            <span className="text-blue-600"> AI-driven personalization</span>, and 
            <span className="text-green-600"> gamified experiences</span>.  
            We aim to create a world where every child enjoys learning, 
            builds curiosity, and grows smarter — while having fun! 🌍✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}