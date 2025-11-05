import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import Footer from "../Sections/Footer";

// ✅ Modern Hero Section for LevelList
const SubjectLevelHero = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3LdGejSkP6D1_8YuenBybBSy8oM9m1tgPn3XIup_4zxuaKznJjuC2v_bh11rHsDtPVA&usqp=CAU"
        alt="learning hero"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"></div>

      {/* Floating shapes */}
      <motion.div
        className="absolute w-32 h-32 bg-white/20 rounded-full top-10 left-10 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-40 h-40 bg-purple-400/20 rounded-full bottom-10 right-10 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Explore <span className="text-pink-400">Your Subjects</span>
        </h1>
        <p className="mt-4 md:mt-6 text-lg md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-sm">
          Dive into interactive learning experiences for Beginner, Intermediate, and Advanced levels. <br />
          Choose a subject and start your journey today!
        </p>
      </motion.div>
    </section>
  );
};

const LevelList = () => {
  const { levelName } = useParams();
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);

  // ✅ Fetch subjects dynamically from backend
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/get-subjects`)
      .then((res) => setSubjects(res.data))
      .catch((err) => console.error("Error fetching subjects:", err));
  }, []);

  // ✅ Filter subjects by level if needed
  const filteredSubjects = subjects.filter(
    (sub) =>
      sub.level?.toLowerCase() === levelName?.toLowerCase() ||
      levelName?.toLowerCase() === "all"
  );

  return (
    <div className="relative top-[0px] overflow-hidden bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <SubjectLevelHero />

      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center pb-6 pt-16 text-purple-700"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {levelName?.toUpperCase()} Subjects
      </motion.h1>

      <p className="text-center text-gray-600 text-lg mb-10">
        Choose your subject to begin learning.
      </p>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 pb-20 max-w-6xl mx-auto w-full">
        {filteredSubjects.map((sub, idx) => (
          <motion.div
            key={sub._id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: idx * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            className="relative rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
            onClick={() => navigate(`/subject/${sub._id}`)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              className="absolute w-24 h-24 bg-white/10 rounded-full -top-6 -right-6"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            />

            <div className="relative z-10 p-8 flex flex-col justify-between h-full text-white">
              <div>
                <h2 className="text-3xl font-bold mb-3">
                  {sub.subjectName || "Untitled Subject"}
                </h2>
                <p className="text-white/80">{sub.topicName || sub.desc}</p>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "white",
                  color: "#6b21a8",
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-2 rounded-full bg-white/20 text-white font-semibold shadow-md hover:bg-white/30 transition"
              >
                Learn Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default LevelList;
