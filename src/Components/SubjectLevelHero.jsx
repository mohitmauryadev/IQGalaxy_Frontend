import { motion } from "framer-motion";

const SubjectLevelHero = ({ levelName }) => {
  // Agar levelName null/undefined ho to default message
  const levelText = levelName
    ? levelName.charAt(0).toUpperCase() + levelName.slice(1)
    : "";

  return (
    <div className="relative  bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white min-h-[50vh] flex items-center justify-center overflow-hidden pt-10">
      
      {/* Floating Shapes */}
      <motion.div 
        className="absolute w-40 h-40 bg-white/20 rounded-full top-10 left-10"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute w-56 h-56 bg-white/10 rounded-full bottom-20 right-20"
        animate={{ y: [0, -25, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Content */}
      <motion.div 
        className="text-center px-6 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-pulse">
          {levelText ? `${levelText} Level Subjects` : "Welcome to Your Learning Journey"}
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          {levelText 
            ? `Explore all subjects under ${levelText} level with interactive content.` 
            : "Explore Beginner, Intermediate & Advanced Subjects with Interactive Content"}
        </p>
      </motion.div>
    </div>
  );
};

export default SubjectLevelHero;