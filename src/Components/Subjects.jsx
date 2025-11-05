import WhyLearnWithUs from '../Subjects/WhyLearnWithUs'
import SuccessStories from '../Subjects/SuccessStories'
import CTASection from '../Subjects/CTASection'
import Footer from '../Sections/Footer'
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SubjectHero from './SubjectHero';

const levels = [
  { name: "Beginner", color: "#4ade80", texts: "✨ At this level, children will learn the basics and start to explore the world around them." },
  { name: "Intermediate", color: "#facc15" , texts: "🚀 At this level, children will strengthen their basic knowledge and learn to explore new things." },
  { name: "Advance", color: "#f87171", texts: " 🌍 Here, children will learn real-world knowledge. Future scientists, leaders, and innovators will emerge from here." },
];

const Subject = () => {
  const navigate = useNavigate();

  const handleExplore = (level) => {
    navigate(`/subjects/${level.toLowerCase()}`);
  };

  return (
    <div className='relative top-[0px]'>
      <div className='relative top-[0px] '><SubjectHero /></div>
      <h1 className=' text-3xl font-bold text-gray-600 text-center bg-gray-100 pt-20 pb-6' >Choose Your Level</h1>
      <div className="flex justify-center items-center  bg-gray-100 gap-8 p-6 relative top-[0px] flex-wrap pb-24">
        
        {levels.map((level, index) => (
          <motion.div
            key={level.name}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            className={`w-72 h-70 rounded-3xl flex flex-col justify-center items-center cursor-pointer`}
            style={{ backgroundColor: level.color }}
            onClick={() => handleExplore(level.name)}
          >
            <h2 className="text-2xl font-bold text-white">{level.name}</h2>
            <p className='text-white p-4 pb-7 text-center'> {level.texts} </p>
            <button className="mt-4 px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
              Explore
            </button>
          </motion.div>
        ))}
      </div>
      <div className='relative top-[0px]'><WhyLearnWithUs /></div>
      <div className='relative top-[0px]'><SuccessStories /></div>
      <div className='relative top-[0px]'><CTASection /></div>
      <div className='relative top-[0px]'><Footer /></div>
    </div>
  );
};

export default Subject;
