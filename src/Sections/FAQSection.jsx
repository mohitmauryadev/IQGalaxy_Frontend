import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is IQ Galaxy?",
    answer:
      "IQ Galaxy is an AI-powered gamified learning platform for children. It makes learning fun, interactive, and engaging with games, quizzes, and challenges.",
  },
  {
    question: "Which subjects can I learn?",
    answer:
      "You can explore a variety of subjects including Hindi, English, Math, Science, Agriculture, and Spiritual studies, all with interactive lessons and AI-guided exercises.",
  },
  {
    question: "How does AI help in learning?",
    answer:
      "The AI adapts to your learning pace, provides personalized challenges, and suggests exercises to improve understanding and retention.",
  },
  {
    question: "Can I track my progress?",
    answer:
      "Yes! The platform shows your completed lessons, quizzes, and scores so you can see your learning journey and achievements.",
  },
  {
    question: "Is learning fun and interactive?",
    answer:
      "Absolutely! IQ Galaxy uses gamification, quizzes, challenges, and animations to make learning exciting, motivating, and enjoyable.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900"
        >
          Frequently Asked Questions
        </motion.h2>
        <p className="text-slate-600 mt-4 text-lg">
          Got questions? We’ve got answers! 🚀
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 cursor-pointer hover:shadow-2xl transition"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-slate-700" />
              </motion.div>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-slate-600 mt-4 text-base leading-relaxed"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Futuristic glow effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-purple-100/20 to-transparent blur-3xl"></div>
    </section>
  );
}
