
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";

export default function FloatingIcon() {
  const [positions, setPositions] = useState([
    { x: 0, y: 0 },
    { x: 100, y: 150 },
  ]);

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

  // Color array for blinking effect
  const colors = ["#FF3C38", "#FFB400", "#28C76F", "#00CFE8", "#9C27B0", "#FF4081"];

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
          className="p-3 rounded-full bg-transparent shadow-lg backdrop-blur-md"
          whileHover={{ scale: 1.4, rotate: 25 }}
        >
          <motion.div
            animate={{ color: colors }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
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
          delay: 2,
        }}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
      >
        <motion.div
          className="p-3 rounded-full bg-transparent shadow-lg backdrop-blur-md"
          whileHover={{ scale: 1.4, rotate: -20 }}
        >
          <motion.div
            animate={{ color: colors }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          >
            <Star className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
