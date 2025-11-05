import React from "react";
import { motion } from "framer-motion";
import { Gamepad2, Sparkles, BookOpen, Rocket, Lightbulb } from "lucide-react";

const features = [
  {
    icon: <Gamepad2 className="w-12 h-12 text-pink-500" />,
    title: "Smart Games",
    desc: "Engaging games that teach problem-solving, logic, and creativity.",
    color: "from-pink-400 to-pink-200",
  },
  {
    icon: <Sparkles className="w-12 h-12 text-yellow-400" />,
    title: "Interactive Challenges",
    desc: "Solve fun activities that reinforce learning and critical thinking.",
    color: "from-yellow-400 to-yellow-200",
  },
  {
    icon: <BookOpen className="w-12 h-12 text-green-400" />,
    title: "Learn Anywhere",
    desc: "Access lessons and games from any device, anytime, anywhere.",
    color: "from-green-400 to-green-200",
  },
  {
    icon: <Rocket className="w-12 h-12 text-blue-400" />,
    title: "Level Up!",
    desc: "Track progress and unlock new skills as kids grow smarter.",
    color: "from-blue-400 to-blue-200",
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-purple-400" />,
    title: "Creativity Boost",
    desc: "Encourage imagination and creative thinking through fun exercises.",
    color: "from-purple-400 to-purple-200",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white py-32 px-6 overflow-hidden">
      {/* Floating background blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute top-0 left-0 w-64 h-64 bg-pink-300/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 14 }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"
      />

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6"
        >
          Make <span className="text-pink-500">Learning Fun</span> & Interactive
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg"
        >
          Explore smart games, interactive challenges, and creative exercises that
          help kids learn, play, and grow.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-xl hover:scale-105 transition-all"
        >
          Explore Courses
        </motion.button>
      </div>

      {/* Features Cards */}
      <div className="max-w-7xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 relative z-10">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 90 }}
            whileHover={{ scale: 1.12, rotate: 2, y: -10 }}
            className={`relative p-8 rounded-3xl shadow-2xl bg-gradient-to-br ${feature.color} cursor-pointer overflow-hidden border border-white/30 backdrop-blur-sm transition-all duration-500 group`}
          >
            {/* Icon */}
            <div className="flex justify-center mb-4 animate-bounce">{feature.icon}</div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>

            {/* Description */}
            <p className="text-gray-700 text-sm md:text-base">{feature.desc}</p>

            {/* Glow Overlay */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-white/0 rounded-3xl pointer-events-none"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 8 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
