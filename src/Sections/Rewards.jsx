import React from "react";
import { motion } from "framer-motion";
import { Gamepad2, Sparkles, BookOpen, Rocket } from "lucide-react";

const features = [
  {
    icon: <Gamepad2 className="w-14 h-14 text-pink-500" />,
    title: "Smart Games",
    desc: "Engaging games designed to boost creativity and problem-solving.",
    color: "from-pink-500 via-purple-500 to-indigo-500",
  },
  {
    icon: <Sparkles className="w-14 h-14 text-yellow-400" />,
    title: "Interactive Challenges",
    desc: "Solve fun puzzles and activities to learn new skills daily.",
    color: "from-yellow-400 via-orange-400 to-pink-500",
  },
  {
    icon: <BookOpen className="w-14 h-14 text-green-400" />,
    title: "Learn Anywhere",
    desc: "Access lessons and activities from any device, anytime.",
    color: "from-green-400 via-teal-400 to-cyan-500",
  },
  {
    icon: <Rocket className="w-14 h-14 text-blue-400" />,
    title: "Level Up!",
    desc: "Keep progressing and explore new learning milestones.",
    color: "from-blue-400 via-indigo-400 to-purple-500",
  },
];

export default function Features() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-100 via-white to-gray-50 py-20 px-6 relative overflow-hidden">
      {/* Floating Background Shapes */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-10 left-10 w-24 h-24 bg-pink-500/30 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-10 right-20 w-32 h-32 bg-blue-500/30 blur-3xl rounded-full"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Key <span className="text-pink-500">Features</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-700 mb-12 text-lg"
        >
          Explore the fun ways children can learn, play, and grow on our platform.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, type: "spring", stiffness: 80 }}
              whileHover={{ scale: 1.08, rotate: 2 }}
              className={`relative group p-8 rounded-3xl shadow-2xl bg-gradient-to-br ${feature.color} cursor-pointer overflow-hidden transition-all duration-500`}
            >
              {/* Glow Animation */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-30 blur-2xl transition duration-500"></div>

              {/* Icon */}
              <div className="flex justify-center mb-6">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>

              {/* Description */}
              <p className="text-white/90">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
