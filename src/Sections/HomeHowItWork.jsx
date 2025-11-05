import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Gamepad2, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Gamepad2 className="w-12 h-12 text-pink-500" />,
    title: "Play & Explore",
    desc: "Choose fun games that make learning feel like an adventure!",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: <Sparkles className="w-12 h-12 text-yellow-400" />,
    title: "Learn Smart",
    desc: "Solve puzzles & challenges that teach new skills every day.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Gamepad2 className="w-12 h-12 text-green-400" />,
    title: "Smart Games for Children",
    desc: "Engaging games designed to enhance creativity and problem-solving.",
    color: "from-green-400 to-teal-500",
  },
  {
    icon: <Rocket className="w-12 h-12 text-blue-400" />,
    title: "Level Up!",
    desc: "Keep growing smarter while having fun all the way up!",
    color: "from-blue-400 to-indigo-500",
  },
];

export default function HomeHowItWork() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          How It <span className="text-pink-500">Works</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-600 mb-16 text-lg"
        >
          Learn while you play — in just 4 fun steps!
        </motion.p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, type: "spring", stiffness: 80 }}
              whileHover={{ scale: 1.08, rotate: 2 }}
              className={`relative group p-8 rounded-3xl shadow-2xl bg-gradient-to-br ${step.color} cursor-pointer overflow-hidden transition-all duration-500`}
            >
              {/* Glow Animation */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-30 blur-3xl transition duration-500"></div>

              {/* Icon */}
              <div className="flex justify-center mb-6">{step.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-white/90">{step.desc}</p>

              {/* Subtle gradient highlight */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/20 to-white/0 rounded-3xl pointer-events-none"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
