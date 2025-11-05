import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SubjectHero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Redirect to Beginner level
    navigate("/subjects/beginner");
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden text-white">
      {/* Background Image */}
      <img
        src="https://ff-multisite-uploads-live.s3.amazonaws.com/uploads/2025/03/CHILD-2-scaled-e1741175171640.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Floating Shapes */}
      <motion.div 
        className="absolute w-40 h-40 bg-white/10 rounded-full top-10 left-10 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute w-56 h-56 bg-pink-300/10 rounded-full bottom-20 right-20 blur-3xl"
        animate={{ y: [0, -25, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-pulse">
          Welcome to Your Learning Journey
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
          Explore Beginner, Intermediate & Advanced Subjects with engaging, interactive AI-powered content 🚀
        </p>
        <motion.button
          onClick={handleGetStarted}
          whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#f472b6" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 md:px-10 md:py-4 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 font-semibold text-white shadow-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
};

export default SubjectHero;
