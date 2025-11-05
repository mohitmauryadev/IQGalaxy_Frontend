import { motion } from "framer-motion";
import { Brain, Gamepad2, Sparkles, Globe } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-10 h-10 text-indigo-600" />,
    title: "AI-Powered Learning",
    desc: "Smart recommendations and adaptive challenges tailored to every child’s pace.",
  },
  {
    icon: <Gamepad2 className="w-10 h-10 text-pink-500" />,
    title: "Gamified Experience",
    desc: "Interactive games make learning fun while building real problem-solving skills.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-yellow-500" />,
    title: "Creative Exploration",
    desc: "Encourages kids to think beyond books through projects, puzzles, and imagination.",
  },
  {
    icon: <Globe className="w-10 h-10 text-green-600" />,
    title: "Global Community",
    desc: "A safe platform where kids can learn, share, and grow with peers worldwide.",
  },
];

export default function WhyIQGalaxy() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900"
        >
          Why <span className="text-indigo-600">IQGalaxy?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Not just another learning platform – IQGalaxy is where knowledge meets fun, 
          innovation, and imagination.
        </motion.p>

        {/* Features Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="flex justify-center">{f.icon}</div>
              <h3 className="mt-5 text-xl font-semibold text-gray-800">{f.title}</h3>
              <p className="mt-3 text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}