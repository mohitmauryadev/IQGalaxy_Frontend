// src/pages/ExploreCourses.jsx
import { motion } from "framer-motion";
import Footer from "../Sections/Footer";
import ExploreCoursesHero from "./ExploreCoursesHero";

export default function ExploreCourses() {
  const courses = [
  // Hindi
  {
    name: "Vyakaran (Grammar)",
    level: "Grades 1-8",
    description: "Learn Hindi grammar rules and sentence formation.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_HINDI_GRAMMAR_LINK"
  },
  {
    name: "Kahani aur Kahawat (Stories & Proverbs)",
    level: "Grades 1-8",
    description: "Explore famous Hindi stories and proverbs.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_HINDI_STORIES_LINK"
  },
  {
    name: "Rachnatmak Lekhan (Creative Writing)",
    level: "Grades 1-8",
    description: "Enhance creativity through writing exercises in Hindi.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_HINDI_WRITING_LINK"
  },
  {
    name: "Path aur Paath (Reading Comprehension)",
    level: "Grades 1-8",
    description: "Improve reading and understanding of Hindi texts.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_HINDI_READING_LINK"
  },
  {
    name: "Shabdavali aur Uchcharan (Vocabulary & Pronunciation)",
    level: "Grades 1-8",
    description: "Build vocabulary and learn correct pronunciation in Hindi.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_HINDI_VOCAB_LINK"
  },

  // English
  {
    name: "Grammar & Tenses",
    level: "Grades 1-8",
    description: "Learn English grammar and proper use of tenses.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_ENGLISH_GRAMMAR_LINK"
  },
  {
    name: "Reading Comprehension",
    level: "Grades 1-8",
    description: "Improve understanding of English passages and texts.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_ENGLISH_READING_LINK"
  },
  {
    name: "Vocabulary & Spelling",
    level: "Grades 1-8",
    description: "Enhance English vocabulary and spelling skills.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_ENGLISH_VOCAB_LINK"
  },
  {
    name: "Writing Skills",
    level: "Grades 1-8",
    description: "Practice English writing for essays, letters, and stories.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_ENGLISH_WRITING_LINK"
  },
  {
    name: "Listening & Speaking Skills",
    level: "Grades 1-8",
    description: "Develop listening comprehension and speaking fluency.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_ENGLISH_LISTENING_LINK"
  },

  // Science
  {
    name: "Physics Basics",
    level: "Grades 3-10",
    description: "Understand the fundamental concepts of physics.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_PHYSICS_LINK"
  },
  {
    name: "Chemistry Fundamentals",
    level: "Grades 3-10",
    description: "Learn basic chemistry principles and reactions.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_CHEMISTRY_LINK"
  },
  {
    name: "Biology Concepts",
    level: "Grades 3-10",
    description: "Study biology topics including human and plant biology.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_BIOLOGY_LINK"
  },
  {
    name: "Environmental Science",
    level: "Grades 3-10",
    description: "Learn about environment, ecology, and conservation.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_ENVIRONMENT_LINK"
  },
  {
    name: "Scientific Experiments & Activities",
    level: "Grades 3-10",
    description: "Hands-on experiments to understand scientific concepts.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_EXPERIMENTS_LINK"
  },

  // Math
  {
    name: "Number System & Operations",
    level: "Grades 1-10",
    description: "Learn numbers, operations, and basic arithmetic.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_NUMBERS_LINK"
  },
  {
    name: "Algebra & Equations",
    level: "Grades 1-10",
    description: "Understand algebraic expressions and equations.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_ALGEBRA_LINK"
  },
  {
    name: "Geometry & Measurement",
    level: "Grades 1-10",
    description: "Learn shapes, sizes, angles, and measurement techniques.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_GEOMETRY_LINK"
  },
  {
    name: "Data Handling & Probability",
    level: "Grades 1-10",
    description: "Understand data, graphs, and probability concepts.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_PROBABILITY_LINK"
  },
  {
    name: "Word Problems & Logical Thinking",
    level: "Grades 1-10",
    description: "Solve problems using logic and mathematical reasoning.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_LOGIC_LINK"
  },

  // Agriculture
  {
    name: "Soil Science & Fertilizers",
    level: "Grades 6-12",
    description: "Learn about soil types, nutrients, and fertilizers.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_SOIL_LINK"
  },
  {
    name: "Crop Cultivation Techniques",
    level: "Grades 6-12",
    description: "Understand planting, growing, and harvesting crops.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_CROPS_LINK"
  },
  {
    name: "Irrigation & Water Management",
    level: "Grades 6-12",
    description: "Learn methods to irrigate and manage water resources.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_IRRIGATION_LINK"
  },
  {
    name: "Agricultural Tools & Machines",
    level: "Grades 6-12",
    description: "Know about modern and traditional farming tools.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_TOOLS_LINK"
  },
  {
    name: "Organic Farming & Sustainability",
    level: "Grades 6-12",
    description: "Learn eco-friendly farming and sustainable agriculture.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_ORGANIC_LINK"
  },

  // Spiritual
  {
    name: "Yoga & Meditation",
    level: "All Ages",
    description: "Learn yoga postures and meditation techniques.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_YOGA_LINK"
  },
  {
    name: "Bhagavad Gita Lessons",
    level: "All Ages",
    description: "Study the teachings of Bhagavad Gita.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_GITA_LINK"
  },
  {
    name: "Vedic Knowledge",
    level: "All Ages",
    description: "Explore Vedic scriptures and philosophies.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_VEDIC_LINK"
  },
  {
    name: "Stories of Saints",
    level: "All Ages",
    description: "Learn from inspiring stories of saints.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_SAINTS_LINK"
  },
  {
    name: "Daily Rituals & Practices",
    level: "All Ages",
    description: "Understand daily spiritual practices and rituals.",
    youtube: "https://www.youtube.com/playlist?list=YOUR_RITUALS_LINK"
  }
];


  return (
    <div>
       <ExploreCoursesHero/>
    <div className="relative bg-gradient-to-b from-indigo-50 via-white to-indigo-50 min-h-screen">
      {/* Optional background animated shapes */}
     
      <motion.div
        className="absolute top-0 left-1/4 w-48 h-48 bg-pink-200 rounded-full opacity-30 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 15 }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-56 h-56 bg-indigo-200 rounded-full opacity-30 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 18 }}
      />

      <div className="max-w-7xl mx-auto p-6 pt-32 relative z-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{course.name}</h2>
                <p className="mb-2 text-sm font-semibold text-indigo-500">{course.level}</p>
                <p className="text-gray-600 mb-6">{course.description}</p>
              </div>
              <a
                href={course.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-6 py-3 rounded-2xl text-center transition-all shadow-md hover:shadow-xl"
              >
                Watch on YouTube
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
    </div>
  );
}
