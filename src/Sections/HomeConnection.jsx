// import React from 'react'
// import './HomeConnection.css'
// const HomeConnection = () => {


//     return (
//         <div className='flex justify-between relative top-[80px]'>
//             <div className='flex flex-wrap justify-center gap-14 w-[100%]'>

//                 <div className='connectionsCard relative  z-10  flex flex-col justify-center items-center pl-5 pr-5 w-[300px] '>
//                     <h1 className='text-2xl font-bold text-center'>🎯 Personalized <span className='text-[#007bff]'>AI</span> Learning</h1>
//                     <h3 className='text-[19px] font-bold text-center text-[#007bff]'>Tailored Learning</h3>
//                     <p className='pt-4 text-center opacity-65'>Text: Smart AI adapts to every child's pace and style of learning.</p>
//                     {/* <button className='LearnMoreBtn'>Learn More</button> */}
//                 </div>

//                 <div className='connectionsCard relative  z-10  flex flex-col justify-center items-center pl-5 pr-5 w-[300px] '>
//                     <h1 className='text-2xl font-bold text-center'>🕹
//                         Fun & <span className='text-[#007bff]'>Gamified</span> Experience</h1>
//                     <h3 className='text-[19px] font-bold text-center text-[#007bff]'>Learning Through Play</h3>
//                     <p className='pt-4 text-center opacity-65'>Quizzes, puzzles, and rewards turn education into an adventure.</p>
//                     {/* <button className='LearnMoreBtn'>Learn More</button> */}
//                 </div>

//                 <div className='connectionsCard relative  z-10  flex flex-col justify-center items-center pl-5 pr-5 w-[300px] '>
//                     <h1 className='text-2xl font-bold text-center'>🛡
//                         Safe & <span className='text-[#007bff]'>Engaging</span> or Kids</h1>
//                     <h3 className='text-[19px] font-bold text-center text-[#007bff]'>Heading: Safe & Kid-Friendly</h3>
//                     <p className='pt-4 text-center opacity-65'>A secure, positive space designed especially for kids.</p>
//                     {/* <button className='LearnMoreBtn'>Learn More</button> */}
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default HomeConnection















import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🎯",
    title: "Personalized AI Learning",
    subtitle: "Tailored Learning",
    description:
      "Smart AI adapts to every child's pace and style, making learning highly effective and engaging.",
    color: "from-blue-400 to-blue-200",
  },
  {
    icon: "🕹",
    title: "Fun & Gamified Experience",
    subtitle: "Learning Through Play",
    description:
      "Quizzes, puzzles, and interactive challenges turn education into a fun adventure.",
    color: "from-pink-400 to-pink-200",
  },
  {
    icon: "🛡",
    title: "Safe & Engaging Environment",
    subtitle: "Kid-Friendly Space",
    description:
      "A secure, positive space designed for kids to explore, learn, and grow safely.",
    color: "from-green-400 to-green-200",
  },
];

const HomeConnection = () => {
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12"
        >
          Why <span className="text-blue-500">IQGalaxy?</span>
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className={`relative bg-gradient-to-br ${feature.color} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer flex flex-col items-center text-center`}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>

              {/* Subtitle */}
              <p className="text-md font-semibold text-gray-700 mb-4">{feature.subtitle}</p>

              {/* Description */}
              <p className="text-gray-700 text-sm md:text-base">{feature.description}</p>

              {/* Floating Overlay */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full rounded-3xl pointer-events-none"
                animate={{ rotate: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 8 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeConnection;
