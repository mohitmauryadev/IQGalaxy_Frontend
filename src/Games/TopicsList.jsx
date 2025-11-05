import TopicCard from "./TopicCard";
import { motion } from "framer-motion";

export default function TopicsList() {
  const topics = [
  // 🧠 Hindi
  { topic: "वर्णमाला", subject: "Hindi", level: "Beginner" },
  { topic: "संज्ञा", subject: "Hindi", level: "Beginner" },
  { topic: "सर्वनाम", subject: "Hindi", level: "Beginner" },
  { topic: "मुहावरे और लोकोक्तियाँ", subject: "Hindi", level: "Intermediate" },
  { topic: "अलंकार", subject: "Hindi", level: "Intermediate" },
  { topic: "वाक्य के प्रकार", subject: "Hindi", level: "Intermediate" },
  { topic: "निबंध लेखन", subject: "Hindi", level: "Advanced" },
  { topic: "कहानी लेखन", subject: "Hindi", level: "Advanced" },

  // ✏️ English
  { topic: "Nouns", subject: "English", level: "Beginner" },
  { topic: "Pronouns", subject: "English", level: "Beginner" },
  { topic: "Verbs", subject: "English", level: "Beginner" },
  { topic: "Tenses", subject: "English", level: "Intermediate" },
  { topic: "Active and Passive Voice", subject: "English", level: "Intermediate" },
  { topic: "Direct and Indirect Speech", subject: "English", level: "Intermediate" },
  { topic: "Essay Writing", subject: "English", level: "Advanced" },
  { topic: "Idioms and Phrasal Verbs", subject: "English", level: "Advanced" },

  // 🔢 Math
  { topic: "Addition", subject: "Math", level: "Beginner" },
  { topic: "Subtraction", subject: "Math", level: "Beginner" },
  { topic: "Multiplication", subject: "Math", level: "Beginner" },
  { topic: "Fractions", subject: "Math", level: "Intermediate" },
  { topic: "Ratio and Proportion", subject: "Math", level: "Intermediate" },
  { topic: "Simple Interest", subject: "Math", level: "Intermediate" },
  { topic: "Trigonometry Basics", subject: "Math", level: "Advanced" },
  { topic: "Probability", subject: "Math", level: "Advanced" },

  // 🧪 Science
  { topic: "Living and Non-Living Things", subject: "Science", level: "Beginner" },
  { topic: "Our Body", subject: "Science", level: "Beginner" },
  { topic: "Plants and Their Uses", subject: "Science", level: "Beginner" },
  { topic: "Force and Motion", subject: "Science", level: "Intermediate" },
  { topic: "Electricity", subject: "Science", level: "Intermediate" },
  { topic: "Magnetism", subject: "Science", level: "Intermediate" },
  { topic: "Laws of Motion", subject: "Science", level: "Advanced" },
  { topic: "Atomic Structure", subject: "Science", level: "Advanced" },

  // 🌾 Agriculture
  { topic: "Introduction to Farming", subject: "Agriculture", level: "Beginner" },
  { topic: "Soil Basics", subject: "Agriculture", level: "Beginner" },
  { topic: "Irrigation Methods", subject: "Agriculture", level: "Beginner" },
  { topic: "Organic Farming", subject: "Agriculture", level: "Intermediate" },
  { topic: "Pest Management", subject: "Agriculture", level: "Intermediate" },
  { topic: "Animal Husbandry", subject: "Agriculture", level: "Intermediate" },
  { topic: "Biotechnology in Agriculture", subject: "Agriculture", level: "Advanced" },
  { topic: "Sustainable Agriculture", subject: "Agriculture", level: "Advanced" },

  // 📿 Spiritual
  { topic: "What is Spirituality", subject: "Spiritual", level: "Beginner" },
  { topic: "Meditation Basics", subject: "Spiritual", level: "Beginner" },
  { topic: "Karma and Dharma", subject: "Spiritual", level: "Beginner" },
  { topic: "Bhagavad Gita Teachings", subject: "Spiritual", level: "Intermediate" },
  { topic: "Yoga and Mind Control", subject: "Spiritual", level: "Intermediate" },
  { topic: "Law of Karma", subject: "Spiritual", level: "Intermediate" },
  { topic: "Advaita Vedanta Concepts", subject: "Spiritual", level: "Advanced" },
  { topic: "Self-Realization Process", subject: "Spiritual", level: "Advanced" },
];


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-10"
    >
      <h1 className="text-center text-4xl font-extrabold text-purple-700 mb-10">
        🎓 AI Learning Arena
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {topics.map((t, i) => (
          <TopicCard
            key={i}
            topic={t.topic}
            subject={t.subject}
            level={t.level}
          />
        ))}
      </div>
    </motion.div>
  );
}
