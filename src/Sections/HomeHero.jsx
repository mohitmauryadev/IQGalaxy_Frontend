// import React from 'react'
// import { useEffect, useRef, useState } from 'react'
// import './HomeHero.css'
// import HeroLoge from '../assets/HomeIMG/HeroLogo.png'

// const HomeHero = () => {

//     const typewriterRef = useRef(null);

//     useEffect(() => {
//         const text = "Welcome to IQGalaxy For Great Learning !";
//         let index = 0;
//         let timeoutId;

//         function typeWriter() {
//             if (index < text.length) {
//                 typewriterRef.current.innerHTML += text.charAt(index);
//                 index++;
//                 timeoutId = setTimeout(typeWriter, 100);
//             } else {
//                 timeoutId = setTimeout(() => {
//                     typewriterRef.current.innerHTML = "";
//                     index = 0;
//                     typeWriter();
//                 }, 6000);
//             }
//         }

//         typeWriter();
//         return () => clearTimeout(timeoutId);
//     }, []);


//     return (
//         <div className='heroSection '>
//             <h1 className=" autoTyping text-[#1E3A8A] text-3xl font-bold text-center mt-10 pl-5 pr-5 margin-auto w-[85%] m-auto" ref={typewriterRef}></h1>

//             <div className='BothContainer flex justify-between gap-6'>

//                 {/* Left side */}
//                 <div className='Leftside '>

//                     <h1 className='pl-[15px] pr-[15px] text-2xl font-bold text-center text-[#007bff] mt-3'>Smart Kids</h1>

//                    <h1 className='pl-[15px] pr-[15px] text-2xl font-bold text-center text-[#ffc107] mt-3'>Smarter Learning on IQGalaxy</h1>

//                     <h1 className='pl-[15px] pr-[15px] text-3xl font-bold text-center mt-8'>Best AI Platform for kids !</h1>

//                     <p className='text-gray-600 opacity-70 font-bold  text-center pl-[45px] pr-[45px] pb-[55px] mt-[30px]'>IQGalaxy brings interactive AI-powered learning that makes studies exciting, fun, and effective. Build creativity, problem-solving, and knowledge — all in one smart platform designed just for kids!</p>

//                     <div className='flex justify-center flex-wrap gap-6'>
//                         <button className='btn1 bg-blue-600 rounded-2xl p-2 pl-2 pr-4 w-[130px] mr-2'>Open AI</button>
//                         <button className='btn2 bg-blue-600 rounded-2xl p-2 pl-2 pr-4 w-[130px] ml-2'>Get Started</button>
//                     </div>
//                 </div>
//                 {/* Right side */}
//                 <div className='Rightside '>
//                     <div>
//                         <img src={HeroLoge} className='w-[500px]' />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HomeHero














import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Gamepad2, Rocket } from "lucide-react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const images = [
    "https://png.pngtree.com/background/20230427/original/pngtree-an-image-of-a-child-studying-at-his-table-at-night-picture-image_2495679.jpg",
    "https://www.shutterstock.com/image-photo/family-before-going-bed-mother-600nw-1377602342.jpg",
    "https://img.freepik.com/free-photo/portrait-girl-playing_23-2148836253.jpg?semt=ais_hybrid&w=740&q=80",
    "https://lh6.googleusercontent.com/proxy/NzUgVBo1qe_irgMzYgtzVT5tIDeO5HFN6P5QiA5YTo3G3nsC7pORkiMUhk8eVBLH1yivQ7Yg7qoaycU6o3oItMN-kYKnqLtB_JOyay5FLPe8BAlNwZC4S9hDBxVmxfBwqPZxGsJaWAxtn9UY",
    "https://png.pngtree.com/thumb_back/fh260/background/20250817/pngtree-children-studying-in-classroom-image_18106321.webp",
    "https://img.freepik.com/free-photo/cute-little-girls-autumn-park_1157-22343.jpg?semt=ais_hybrid&w=740&q=80"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden text-white transition-all duration-1000">
      {/* Background with smooth fade animation */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28 md:py-40">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight text-yellow-300 drop-shadow-2xl"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-indigo-400">IQGalaxy</span>
        </motion.h1>

        {/* Auto Typewriter Text */}
        <motion.div
          className="mt-4 text-xl md:text-2xl text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <Typewriter
            options={{
              strings: [
                "A Gamified Learning Universe 🚀",
                "Where Curiosity Meets Adventure 🌟",
                "Play. Learn. Evolve.",
              ],
              autoStart: true,
              loop: true,
              delay: 70,
              deleteSpeed: 40,
            }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="mt-4 max-w-2xl text-gray-300 text-lg md:text-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Explore interactive courses, earn rewards, and challenge your friends —
          because learning should feel like an adventure, not a classroom. ✨
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <button
            onClick={() => navigate("/explore")}
            className="flex items-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition-all"
          >
            <BookOpen size={20} /> Explore Courses
          </button>

          <button
            onClick={() => navigate("/games")}
            className="flex items-center gap-2 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-indigo-600 transition-all"
          >
            <Gamepad2 size={20} /> Play Now
          </button>
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
            <h3 className="text-3xl font-bold text-yellow-300">5K+</h3>
            <p className="text-sm uppercase tracking-wider">Students Learning</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
            <h3 className="text-3xl font-bold text-yellow-300">200+</h3>
            <p className="text-sm uppercase tracking-wider">Gamified Lessons</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
            <h3 className="text-3xl font-bold text-yellow-300">95%</h3>
            <p className="text-sm uppercase tracking-wider">Fun + Engagement</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
    </section>
  );
}
