import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";

export default function FloatingIcon() {
  const [positions, setPositions] = useState([
    { x: 0, y: 0 },
    { x: 100, y: 150 },
  ]);

  // Random movement generator for both icons
  const moveRandomly = () => {
    setPositions([
      {
        x: Math.random() * (window.innerWidth - 80),
        y: Math.random() * (window.innerHeight - 80),
      },
      {
        x: Math.random() * (window.innerWidth - 80),
        y: Math.random() * (window.innerHeight - 80),
      },
    ]);
  };

  useEffect(() => {
    moveRandomly();
    const interval = setInterval(moveRandomly, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 🔹 Floating Orb 1 */}
      <motion.div
        animate={{
          x: positions[0].x,
          y: positions[0].y,
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
      >
        <motion.div
          className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-yellow-400 shadow-lg shadow-yellow-300 backdrop-blur-md"
          whileHover={{ scale: 1.4, rotate: 25 }}
        >
          <Sparkles className="text-white w-8 h-8" />
        </motion.div>
      </motion.div>

      {/* 🔸 Floating Orb 2 */}
      <motion.div
        animate={{
          x: positions[1].x,
          y: positions[1].y,
          rotate: [360, 0],
          scale: [1.1, 1.4, 1],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2, // thoda alag timing
        }}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
      >
        <motion.div
          className="p-3 rounded-full bg-gradient-to-br from-purple-600 to-pink-400 shadow-lg shadow-pink-300 backdrop-blur-md"
          whileHover={{ scale: 1.4, rotate: -20 }}
        >
          <Star className="text-white w-8 h-8" />
        </motion.div>
      </motion.div>
    </>
  );
}
