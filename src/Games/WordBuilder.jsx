import React, { useState, useEffect } from "react";
import "./WordBuilder.css";
import Confetti from "react-confetti"; // npm install react-confetti

const WORDS = [
  "apple", "banana", "grape", "orange", "kiwi",
  "mango", "pear", "peach", "lemon", "plum"
];

export default function WordBuilder() {
  const [currentWord, setCurrentWord] = useState("");
  const [letters, setLetters] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [shake, setShake] = useState(false);

  // Generate random word based on level
  const generateWord = () => {
    const word = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
    setCurrentWord(word);
    const shuffled = word.split("").sort(() => Math.random() - 0.5);
    setLetters(shuffled);
    setSelectedLetters([]);
  };

  useEffect(() => {
    generateWord();
  }, [level]);

  const handleLetterClick = (index) => {
    setSelectedLetters([...selectedLetters, letters[index]]);
    const newLetters = [...letters];
    newLetters[index] = "";
    setLetters(newLetters);
  };

  const handleCheck = () => {
    const formedWord = selectedLetters.join("");
    if (formedWord === currentWord) {
      setScore(score + 1);
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        setLevel(level + 1);
      }, 2000);
    } else {
      setScore(score > 0 ? score - 1 : 0);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleReset = () => {
    generateWord();
    setScore(0);
    setLevel(1);
  };

  return (
    <div className="wb-container">
      {showConfetti && <Confetti />}
      <h1 className="wb-title">🧩 Word Builder Challenge 🧩</h1>
      <h2>Level: {level} | Score: {score}</h2>

      <div className={`letters-container ${shake ? "shake" : ""}`}>
        {letters.map((letter, idx) => (
          <div
            key={idx}
            className="letter-tile"
            onClick={() => letter && handleLetterClick(idx)}
          >
            {letter}
          </div>
        ))}
      </div>

      <div className="selected-container">
        {selectedLetters.map((letter, idx) => (
          <div key={idx} className="selected-tile">{letter}</div>
        ))}
      </div>

      <button className="check-btn" onClick={handleCheck}>Check Word ✅</button>
      <button className="reset-btn" onClick={handleReset}>Reset 🔄</button>
    </div>
  );
}