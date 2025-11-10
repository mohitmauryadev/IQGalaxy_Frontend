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
    youtube: "https://youtube.com/playlist?list=PLkaFsSywHpwe9tV7172JPN6I52ahKgEkT&si=9AItUGvC-W5VgOw0"
  },
  {
    name: "Kahani aur Kahawat (Stories & Proverbs)",
    level: "Grades 1-8",
    description: "Explore famous Hindi stories and proverbs.",
    youtube: "https://youtube.com/playlist?list=PL4Liz2PHLR2G6GzKWXtKLip6D1MGfixZQ&si=urWG33RfUu-K_sZc"
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
    youtube: "https://youtu.be/VOf1KJxQZ-A?si=AQPJH2QYadciAMEl"
  },
  {
    name: "Shabdavali aur Uchcharan (Vocabulary & Pronunciation)",
    level: "Grades 1-8",
    description: "Build vocabulary and learn correct pronunciation in Hindi.",
    youtube: "https://youtu.be/JOIpY44MWrA?si=MjeWiOhDcd_RVhiC"
  },

  // English
  {
    name: "Grammar & Tenses",
    level: "Grades 1-8",
    description: "Learn English grammar and proper use of tenses.",
    youtube: "https://youtu.be/67TgyZQaig4?si=qMeYCX99iUp5X_ii"
  },
  {
    name: "Reading Comprehension",
    level: "Grades 1-8",
    description: "Improve understanding of English passages and texts.",
    youtube: "https://youtu.be/suABPyV3n-M?si=5SJOMmSOuuUXUciw"
  },
  {
    name: "Vocabulary & Spelling",
    level: "Grades 1-8",
    description: "Enhance English vocabulary and spelling skills.",
    youtube: "https://youtu.be/-qeg3rkvse4?si=Oj63U-c3Q_kDpcjf"
  },
  {
    name: "Writing Skills",
    level: "Grades 1-8",
    description: "Practice English writing for essays, letters, and stories.",
    youtube: "https://youtu.be/eDkGR6Bl6Ao?si=dZayvyjCizuX7M5Z"
  },
  {
    name: "Listening & Speaking Skills",
    level: "Grades 1-8",
    description: "Develop listening comprehension and speaking fluency.",
    youtube: "https://youtu.be/by1QAoRcc-U?si=a_mwG8E8Ky1-qKpi"
  },

  // Science
  {
    name: "Physics Basics",
    level: "Grades 3-10",
    description: "Understand the fundamental concepts of physics.",
    youtube: "https://youtube.com/playlist?list=PLFMuuV5u2TAv6ySNBG0DG-ITNQS8XYqcv&si=mwd66PU3eXh73YSc"
  },
  {
    name: "Chemistry Fundamentals",
    level: "Grades 3-10",
    description: "Learn basic chemistry principles and reactions.",
    youtube: "https://youtu.be/AVVDP_XJHkA?si=guDT0F6XD5wai2ou"
  },
  {
    name: "Biology Concepts",
    level: "Grades 3-10",
    description: "Study biology topics including human and plant biology.",
    youtube: "https://youtu.be/G-7AMnZLOCM?si=_PcKRUlEKBUrBd0J"
  },
  {
    name: "Environmental Science",
    level: "Grades 3-10",
    description: "Learn about environment, ecology, and conservation.",
    youtube: "https://youtu.be/oa2WWId5EG4?si=STJgUKDGUonUi4kA"
  },
  {
    name: "Scientific Experiments & Activities",
    level: "Grades 3-10",
    description: "Hands-on experiments to understand scientific concepts.",
    youtube: "https://youtu.be/s87FhnwMcD0?si=vrYRItiXQsi2z7Y0"
  },

  // Math
  {
    name: "Number System & Operations",
    level: "Grades 1-10",
    description: "Learn numbers, operations, and basic arithmetic.",
    youtube: "https://youtu.be/Ts5nn5EQKF4?si=BKo5yc6H7FXV4mUu"
  },
  {
    name: "Algebra & Equations",
    level: "Grades 1-10",
    description: "Understand algebraic expressions and equations.",
    youtube: "https://youtu.be/dtnvT4CtJAc?si=mi7XJySXRGzEPumO"
  },
  {
    name: "Geometry & Measurement",
    level: "Grades 1-10",
    description: "Learn shapes, sizes, angles, and measurement techniques.",
    youtube: "https://youtu.be/AVC-426M6V0?si=8cf7dRM6UQv68l3D"
  },
  {
    name: "Data Handling & Probability",
    level: "Grades 1-10",
    description: "Understand data, graphs, and probability concepts.",
    youtube: "https://youtu.be/zF_dBk8EPDk?si=IlDzmEGWPWfWr0mM"
  },
  {
    name: "Word Problems & Logical Thinking",
    level: "Grades 1-10",
    description: "Solve problems using logic and mathematical reasoning.",
    youtube: "https://youtu.be/C229LUk380Q?si=GKXkt5wuV2F7X3AR"
  },

  // Agriculture
  {
    name: "Soil Science & Fertilizers",
    level: "Grades 6-12",
    description: "Learn about soil types, nutrients, and fertilizers.",
    youtube: "https://youtu.be/evlMlKCOKPM?si=iWd4-ys2wb50B_FW"
  },
  {
    name: "Crop Cultivation Techniques",
    level: "Grades 6-12",
    description: "Understand planting, growing, and harvesting crops.",
    youtube: "https://youtu.be/DFH_yfbUJWY?si=Kcyg284h3lOHRcda"
  },
  {
    name: "Irrigation & Water Management",
    level: "Grades 6-12",
    description: "Learn methods to irrigate and manage water resources.",
    youtube: "https://youtu.be/REiuZeDSf9w?si=euH5bXcTu1uZo7KN"
  },
  {
    name: "Agricultural Tools & Machines",
    level: "Grades 6-12",
    description: "Know about modern and traditional farming tools.",
    youtube: "https://youtu.be/tZ2HD8yxc0M?si=pCGdwvxX0-ZwrSzb"
  },
  {
    name: "Organic Farming & Sustainability",
    level: "Grades 6-12",
    description: "Learn eco-friendly farming and sustainable agriculture.",
    youtube: "https://youtu.be/2UK07ebvqeE?si=qXNKeTfRq7qfBI86"
  },

  // Spiritual
  {
    name: "Yoga & Meditation",
    level: "All Ages",
    description: "Learn yoga postures and meditation techniques.",
    youtube: "https://youtu.be/sxh0JEeBswg?si=2MuQe_mdsZq1gGzS"
  },
  {
    name: "Bhagavad Gita Lessons",
    level: "All Ages",
    description: "Study the teachings of Bhagavad Gita.",
    youtube: "https://youtube.com/playlist?list=PLJ20hm-I0-O3bCOv3FRLsjA31OrFX2H_m&si=m16_pt8sQXigENyR"
  },
  {
    name: "Vedic Knowledge",
    level: "All Ages",
    description: "Explore Vedic scriptures and philosophies.",
    youtube: "https://youtu.be/xKpCJ0P1m5Q?si=EC7qPpRSG7fcxK6U"
  },
  {
    name: "Stories of Saints",
    level: "All Ages",
    description: "Learn from inspiring stories of saints.",
    youtube: "https://youtu.be/zDke2Uayae8?si=dRwslaFZKDIS1uJS"
  },
  {
    name: "Daily Rituals & Practices",
    level: "All Ages",
    description: "Understand daily spiritual practices and rituals.",
    youtube: "https://youtu.be/EJQZJKHWvVc?si=JAeAqdVTyGguZwe9"
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
