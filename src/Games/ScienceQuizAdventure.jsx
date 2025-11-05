import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./ScienceQuizAdventure.css";

const QUESTIONS = [
  { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
  { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
  { question: "What is the boiling point of water at sea level?", options: ["90°C", "100°C", "80°C", "120°C"], answer: "100°C" },
  { question: "Which part of the plant makes food?", options: ["Root", "Stem", "Leaf", "Flower"], answer: "Leaf" },
  { question: "What force keeps us on the ground?", options: ["Magnetism", "Friction", "Gravity", "Electricity"], answer: "Gravity" },
  { question: "What is the center of an atom called?", options: ["Electron", "Proton", "Nucleus", "Neutron"], answer: "Nucleus" },
  { question: "Which planet is largest in our solar system?", options: ["Jupiter", "Mars", "Earth", "Saturn"], answer: "Jupiter" },
  { question: "Water freezes at?", options: ["0°C", "32°C", "100°C", "50°C"], answer: "0°C" },
  { question: "Which organ pumps blood?", options: ["Lungs", "Heart", "Liver", "Kidney"], answer: "Heart" },
  { question: "Sun is a?", options: ["Planet", "Star", "Moon", "Galaxy"], answer: "Star" },
  { question: "Which gas do humans breathe in?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Oxygen" },
  { question: "Lightning is?", options: ["Wind", "Electricity", "Rain", "Fire"], answer: "Electricity" },
  { question: "Earth is the ___ planet from the Sun?", options: ["First", "Third", "Second", "Fourth"], answer: "Third" },
  { question: "Which planet is called the Blue Planet?", options: ["Earth", "Neptune", "Uranus", "Mars"], answer: "Earth" },
  { question: "H2O is?", options: ["Oxygen", "Water", "Hydrogen", "Salt"], answer: "Water" },
];

export default function ScienceQuizAdventure() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");
  const [timeLeft, setTimeLeft] = useState(15);
  const [showConfetti, setShowConfetti] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const currentQ = QUESTIONS[currentIndex];

  useEffect(() => {
    if (gameOver) return;
    setTimeLeft(15);
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleNext(false);
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, gameOver]);

  const handleAnswer = (option) => {
    if (selected) return;
    setSelected(option);
    const isCorrect = option === currentQ.answer;
    if (isCorrect) setScore(prev => prev + 1);
    setFeedback(isCorrect ? "correct" : "wrong");

    setTimeout(() => {
      handleNext(isCorrect);
    }, 1000);
  };

  const handleNext = (answeredCorrect) => {
    setSelected("");
    setFeedback("");

    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setGameOver(true);
      setShowConfetti(true);
    }
  };

  const getGrade = () => {
    if (score >= 14) return "Excellent";
    if (score >= 12) return "Best";
    if (score >= 9) return "Good";
    if (score >= 6) return "Better";
    return "Bad";
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelected("");
    setFeedback("");
    setGameOver(false);
    setShowConfetti(false);
  };

  return (
    <div className="sqa-container">
      {showConfetti && <Confetti />}
      <h1 className="sqa-title">🔬 Science Quiz Adventure 🔬</h1>

      {!gameOver ? (
        <>
          <h2>Score: {score} | Time Left: {timeLeft}s</h2>
          <div className="question-box">
            <p>{currentQ.question}</p>
          </div>
          <div className="options-grid">
            {currentQ.options.map((opt, idx) => (
              <button
                key={idx}
                className={`option-btn ${selected === opt ? (feedback === "correct" ? "correct" : "wrong") : ""}`}
                onClick={() => handleAnswer(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="feedback-box">
            {feedback && (
              <p className={feedback}>
                {feedback === "correct" ? "✅ Correct!" : "❌ Wrong!"}
              </p>
            )}
          </div>
        </>
      ) : (
        <div className="game-over-box">
          <h2>🎉 Game Over! 🎉</h2>
          <p>Score: {score} / {QUESTIONS.length}</p>
          <p>Grade: <strong>{getGrade()}</strong></p>
          <button className="reset-btn" onClick={resetGame}>🔄 Play Again</button>
        </div>
      )}
    </div>
  );
}