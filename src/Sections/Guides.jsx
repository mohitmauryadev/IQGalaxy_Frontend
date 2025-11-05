// // src/pages/Guides.jsx
// import { motion } from "framer-motion";

// export default function Guides() {
//   return (
//     <div className="max-w-5xl mx-auto p-6 pt-20">
//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-3xl font-bold mb-6 text-center"
//       >
//         Learning Guides
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="mb-8 text-slate-700 text-center"
//       >
//         IQGalaxy makes learning fun, interactive, and engaging! Our AI-powered platform allows children to learn subjects through gamification, quizzes, and interactive challenges.
//       </motion.p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Mathematics */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="border rounded-lg p-4 shadow hover:shadow-lg transition"
//         >
//           <h2 className="text-xl font-semibold mb-2">Mathematics</h2>
//           <p className="mb-2">Level: Grades 1-8</p>
//           <p className="text-slate-600">
//             Learn numbers, operations, geometry, and problem-solving through interactive games and AI-assisted challenges.
//           </p>
//         </motion.div>

//         {/* Science */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="border rounded-lg p-4 shadow hover:shadow-lg transition"
//         >
//           <h2 className="text-xl font-semibold mb-2">Science</h2>
//           <p className="mb-2">Level: Grades 3-10</p>
//           <p className="text-slate-600">
//             Explore physics, chemistry, and biology concepts with gamified experiments and AI-guided learning paths.
//           </p>
//         </motion.div>

//         {/* English & Language */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="border rounded-lg p-4 shadow hover:shadow-lg transition"
//         >
//           <h2 className="text-xl font-semibold mb-2">English & Language</h2>
//           <p className="mb-2">Level: Grades 1-8</p>
//           <p className="text-slate-600">
//             Improve vocabulary, grammar, and reading comprehension with interactive stories and AI quizzes.
//           </p>
//         </motion.div>

//         {/* Coding & Technology */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="border rounded-lg p-4 shadow hover:shadow-lg transition"
//         >
//           <h2 className="text-xl font-semibold mb-2">Coding & Technology</h2>
//           <p className="mb-2">Level: Grades 4-12</p>
//           <p className="text-slate-600">
//             Learn programming basics, logical thinking, and technology skills through fun coding games and AI challenges.
//           </p>
//         </motion.div>

//         {/* General Knowledge & Social Studies */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="border rounded-lg p-4 shadow hover:shadow-lg transition"
//         >
//           <h2 className="text-xl font-semibold mb-2">General Knowledge & Social Studies</h2>
//           <p className="mb-2">Level: Grades 1-10</p>
//           <p className="text-slate-600">
//             Explore history, geography, and current events through quizzes, games, and AI-powered interactive lessons.
//           </p>
//         </motion.div>
//       </div>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.5 }}
//         className="mt-10 text-center text-slate-700 font-semibold"
//       >
//         With IQGalaxy, every child can <strong>learn, play, and grow</strong> at their own pace, powered by AI and gamified experiences!
//       </motion.p>
//     </div>
//   );
// }















// src/pages/Guides.jsx
import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Atom, Calculator, Leaf } from "lucide-react";
import Footer from "./Footer";

// Custom Om icon
const OmIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="currentColor"
    className="w-12 h-12 text-purple-500"
  >
    <path d="M32 4C28 8 24 12 24 16c0 4 4 8 8 8s8-4 8-8c0-4-4-8-8-12zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM20 28c0 8 16 16 16 16s16-8 16-16c0-8-16-16-16-16S20 20 20 28z" />
  </svg>
);

const guides = [
  {
    icon: <BookOpen className="w-12 h-12 text-yellow-500" />,
    title: "Hindi",
    level: "Grades 1-8",
    desc: "Improve vocabulary, grammar, and comprehension with interactive stories and quizzes.",
    color: "from-yellow-200 to-yellow-100",
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-blue-500" />,
    title: "English",
    level: "Grades 1-8",
    desc: "Enhance language skills through fun AI-powered exercises and reading challenges.",
    color: "from-blue-200 to-blue-100",
  },
  {
    icon: <Atom className="w-12 h-12 text-green-500" />,
    title: "Science",
    level: "Grades 3-10",
    desc: "Explore physics, chemistry, and biology concepts with interactive experiments.",
    color: "from-green-200 to-green-100",
  },
  {
    icon: <Calculator className="w-12 h-12 text-pink-500" />,
    title: "Math",
    level: "Grades 1-8",
    desc: "Learn numbers, operations, geometry, and problem-solving through interactive games.",
    color: "from-pink-200 to-pink-100",
  },
  {
    icon: <Leaf className="w-12 h-12 text-lime-500" />,
    title: "Agriculture",
    level: "Grades 4-12",
    desc: "Discover farming, plants, and sustainable agriculture concepts with hands-on learning.",
    color: "from-lime-200 to-lime-100",
  },
  {
    icon: <OmIcon />,
    title: "Spiritual",
    level: "All Grades",
    desc: "Learn about meditation, values, and spiritual knowledge through interactive lessons.",
    color: "from-purple-200 to-purple-100",
  },
];

export default function Guides() {
  return (
    <div>
    <section className="relative w-full bg-gray-50 py-24 px-6">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Learning <span className="text-pink-500">Guides</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 text-lg md:text-xl"
        >
          Explore our curated subjects with interactive AI-powered learning experiences!
        </motion.p>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {guides.map((guide, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 90 }}
            whileHover={{ scale: 1.05 }}
            className={`bg-gradient-to-br ${guide.color} rounded-3xl p-6 shadow-xl relative cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl`}
          >
            <div className="flex justify-center mb-6 animate-bounce">{guide.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{guide.title}</h3>
            <p className="text-sm text-gray-700 mb-3">
              Level: <strong>{guide.level}</strong>
            </p>
            <p className="text-gray-700 text-sm md:text-base">{guide.desc}</p>

            {/* Subtle overlay animation */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-white/0 rounded-3xl pointer-events-none"
              animate={{ rotate: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 8 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Footer Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 text-center text-gray-700 font-semibold"
      >
        With IQGalaxy, every child can <strong>learn, play, and grow</strong> at their own pace, powered by AI and gamified experiences!
      </motion.p>
      
    </section>
    <Footer />
    </div>
  );
}
