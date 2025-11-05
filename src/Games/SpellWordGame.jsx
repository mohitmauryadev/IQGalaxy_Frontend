import React, { useState, useEffect } from "react";
import "./SpellWordGame.css";

const WORDS = [
  { word: "CAT", image: "https://static.vecteezy.com/system/resources/thumbnails/032/932/690/small/a-cute-kitten-sitting-in-the-grass-looking-at-a-flower-free-photo.jpg" },
  { word: "DOG", image: "https://hips.hearstapps.com/hmg-prod/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=640:*" },
  { word: "LION", image: "https://cdn.thewire.in/wp-content/uploads/2023/09/07154537/Lion_pose_6649531395.jpg" },
  { word: "COW", image: "https://cdn.pixabay.com/photo/2025/07/18/07/35/cow-9720831_1280.jpg" },
  { word: "FROG", image: "https://images.pexels.com/photos/36020/frog-terrarium-amphibians.jpg?cs=srgb&dl=pexels-pixabay-36020.jpg&fm=jpg" }
];

export default function SpellWordGame() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [letters, setLetters] = useState([]);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  const currentWord = WORDS[currentWordIndex];

  useEffect(() => {
    shuffleWord();
  }, [currentWordIndex]);

  const shuffleWord = () => {
    const shuffled = currentWord.word.split("").sort(() => Math.random() - 0.5);
    setLetters(shuffled);
    setUserAnswer([]);
    setFeedback("");
  };

  const selectLetter = (letter, index) => {
    setUserAnswer([...userAnswer, letter]);
    setLetters(letters.map((l, i) => (i === index ? null : l)));

    if (userAnswer.length + 1 === currentWord.word.length) {
      const answer = [...userAnswer, letter].join("");
      if (answer === currentWord.word) {
        setScore(score + 1);
        setFeedback("correct");
      } else {
        setFeedback("wrong");
      }

      setTimeout(() => {
        if (currentWordIndex < WORDS.length - 1) {
          setCurrentWordIndex(currentWordIndex + 1);
        } else {
          alert(`Game Over! Your score: ${score + (answer === currentWord.word ? 1 : 0)} / ${WORDS.length}`);
          setCurrentWordIndex(0);
          setScore(0);
        }
      }, 1000);
    }
  };

  const resetGame = () => {
    setCurrentWordIndex(0);
    setScore(0);
  };

  return (
    <div className="swg-container">
      <h1 className="swg-title">🔤 Spell the Word Game 🔤</h1>
      <h2>Score: {score}</h2>

      <img src={currentWord.image} alt={currentWord.word} className="swg-image" />

      <div className="letter-buttons">
        {letters.map((letter, idx) =>
          letter ? (
            <button key={idx} onClick={() => selectLetter(letter, idx)} className="letter-btn">
              {letter}
            </button>
          ) : null
        )}
      </div>

      <div className="user-answer">
        {userAnswer.map((letter, idx) => (
          <span key={idx} className="answer-letter">{letter}</span>
        ))}
      </div>

      {feedback && <div className={`feedback ${feedback}`}>{feedback === "correct" ? "✅ Correct!" : "❌ Wrong!"}</div>}

      <button className="reset-btn" onClick={resetGame}>🔄 Restart Game</button>
    </div>
  );
}