import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Loader2, Trophy, Brain, PlayCircle, CheckCircle } from "lucide-react";

export default function TopicCard({ topic, subject, level }) {
  const [quiz, setQuiz] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePlayNow = async () => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/generate-quiz", {
        topic,
        subject,
        level,
      });
      setQuiz(res.data.questions);
    } catch (err) {
      console.error(err);
      alert("❌ Error generating quiz!");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (qIndex, option) => {
    setUserAnswers({ ...userAnswers, [qIndex]: option });
  };

  const handleSubmit = async () => {
    let correct = 0;
    quiz.forEach((q, i) => {
      if (userAnswers[i] === q.answer) correct++;
    });

    const feedbackPrompt = `
    The student answered ${correct} out of ${quiz.length} questions correctly
    for topic "${topic}". Give one short motivational line and one tip to improve.
    `;

    const feedbackRes = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash-lite:generateContent?key=${
        import.meta.env.VITE_GEMINI_KEY
      }`,
      { contents: [{ parts: [{ text: feedbackPrompt }] }] }
    );

    const feedback =
      feedbackRes.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Great effort! Keep improving your concepts.";

    setScore({ correct, feedback });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative overflow-hidden bg-gradient-to-br from-purple-600/10 to-pink-500/10 backdrop-blur-lg border border-purple-300/30 shadow-xl rounded-3xl p-8 group hover:shadow-2xl hover:border-purple-500/50 transition-all"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-extrabold text-purple-800 group-hover:text-purple-900 transition">
            {topic}
          </h2>
          <p className="text-sm text-gray-600">
            {subject} • <span className="font-semibold">{level}</span>
          </p>
        </div>
        <Brain className="text-purple-700 w-8 h-8 opacity-80 group-hover:rotate-12 transition-transform" />
      </div>

      {/* Quiz Section */}
      {!quiz ? (
        <button
          onClick={handlePlayNow}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 rounded-full hover:from-purple-700 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin w-5 h-5" /> Loading Quiz...
            </>
          ) : (
            <>
              <PlayCircle className="w-5 h-5" /> Play Now
            </>
          )}
        </button>
      ) : (
        <div className="mt-4">
          {quiz.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-purple-100 shadow-sm my-3 hover:shadow-md transition"
            >
              <p className="font-semibold text-gray-800 mb-2">
                {i + 1}. {q.question}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q.options.map((opt, j) => (
                  <button
                    key={j}
                    onClick={() => handleAnswer(i, opt)}
                    className={`px-4 py-2 text-sm rounded-xl border font-medium transition-all duration-200 ${
                      userAnswers[i] === opt
                        ? "bg-purple-100 border-purple-600 text-purple-900"
                        : "border-gray-300 hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}

          <button
            onClick={handleSubmit}
            className="w-full mt-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 shadow-lg transition"
          >
            <CheckCircle className="inline-block mr-2 w-5 h-5" />
            Submit Answers
          </button>

          {score && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 rounded-2xl p-5 shadow-inner"
            >
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="text-green-700 w-7 h-7" />
                <h3 className="text-lg font-bold text-green-700">
                  You got {score.correct}/{quiz.length} correct!
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {score.feedback}
              </p>
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  );
}
