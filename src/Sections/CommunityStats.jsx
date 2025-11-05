import { motion } from "framer-motion";
import { Users, Trophy, BookOpen, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CommunityStats() {
  const navigate = useNavigate();

  const stats = [
    { icon: <Users size={36} />, label: "Active Learners", value: "5000+" },
    { icon: <Trophy size={36} />, label: "Rewards Earned", value: "1000+" },
    { icon: <BookOpen size={36} />, label: "Chapters Completed", value: "200+" },
    { icon: <Sparkles size={36} />, label: "Daily Quizzes", value: "2000+" },
  ];

  return (
    <section className="relative w-full py-32 bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden">
      {/* Floating bubbles background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute top-20 left-20 w-32 h-32 bg-pink-300 rounded-full opacity-30 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 50, 0], x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute bottom-32 right-40 w-40 h-40 bg-blue-300 rounded-full opacity-30 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-300 rounded-full opacity-30 blur-3xl"
        />
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center text-slate-800"
      >
        🌍 Our Growing <span className="text-blue-600">Community</span>
      </motion.h2>

      {/* Sub text */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-6 text-lg md:text-xl text-slate-600 text-center max-w-2xl mx-auto"
      >
        Together we are building the <span className="font-semibold text-blue-600">future of learning</span> 🚀
      </motion.p>

      {/* Stats grid */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
            className="flex flex-col items-center justify-center bg-gradient-to-tr from-white via-gray-50 to-white shadow-lg rounded-3xl p-8 border border-slate-200 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="text-blue-600 mb-4">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-slate-800">{stat.value}</h3>
            <p className="mt-2 text-slate-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="mt-20 text-center"
      >
        <motion.button
          onClick={() => navigate("/explore")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-2xl hover:shadow-xl transition-all"
        >
          Explore Courses 🚀
        </motion.button>
      </motion.div>
    </section>
  );
}
