import React, { useState, useEffect } from "react";
import "./FractionFun.css";

const FRACTIONS = [
  { fraction: "1/2", value: 0.5 },
  { fraction: "1/3", value: 1 / 3 },
  { fraction: "1/4", value: 0.25 },
  { fraction: "2/3", value: 2 / 3 },
  { fraction: "3/4", value: 0.75 }
];

export default function FractionFun() {
  const [current, setCurrent] = useState({});
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * FRACTIONS.length);
    const currentFraction = FRACTIONS[randomIndex];

    let otherOptions = FRACTIONS.filter((f, i) => i !== randomIndex)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const allOptions = [...otherOptions, currentFraction].sort(() => Math.random() - 0.5);

    setCurrent(currentFraction);
    setOptions(allOptions);
    setFeedback("");
  };

  const handleAnswer = (option) => {
    setAttempts(prev => prev + 1);
    if (option.value === current.value) {
      setScore(prev => prev + 1);
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }

    setTimeout(() => {
      generateQuestion();
    }, 800);
  };

  return (
    <div className="ff-container">
      <h1 className="ff-title">🍎 Fraction Fun 🍎</h1>
      <h2>Score: {score} | Attempts: {attempts}</h2>

      <div className="fraction-question">
        <p>Pick the correct fraction for: <strong>{current.fraction}</strong></p>
      </div>

      <div className="fraction-options">
        {options.map((opt, idx) => (
          <button key={idx} className="fraction-btn" onClick={() => handleAnswer(opt)}>
            {opt.fraction}
          </button>
        ))}
      </div>

      {feedback && (
        <div className={`feedback ${feedback}`}>
          {feedback === "correct" ? "✅ Correct!" : "❌ Wrong!"}
        </div>
      )}
    </div>
  );
}