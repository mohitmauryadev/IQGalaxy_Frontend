import React, { useState, useEffect } from "react";
import Confetti from "react-confetti"; // npm install react-confetti
import "./MemoryMatch.css";

const CARDS = [
  { id: 1, value: "🐶" },
  { id: 2, value: "🐱" },
  { id: 3, value: "🦁" },
  { id: 4, value: "🐵" },
  { id: 5, value: "🐸" },
  { id: 6, value: "🐷" }
];

export default function MemoryMatch() {
  const [deck, setDeck] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    initializeDeck();
  }, []);

  const initializeDeck = () => {
    const doubleDeck = [...CARDS, ...CARDS]
      .sort(() => Math.random() - 0.5)
      .map((card, idx) => ({ ...card, id: idx }));
    setDeck(doubleDeck);
    setFlipped([]);
    setMatched([]);
    setScore(0);
    setAttempts(0);
    setShowConfetti(false);
  };

  const handleFlip = (index) => {
    if (flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setAttempts(prev => prev + 1);
      const firstCard = deck[newFlipped[0]];
      const secondCard = deck[newFlipped[1]];

      if (firstCard.value === secondCard.value) {
        setMatched(prev => [...prev, ...newFlipped]);
        setScore(prev => prev + 1);
        setFlipped([]); // clear flipped immediately for matched
      } else {
        setTimeout(() => setFlipped([]), 800); // flip back non-matched
      }
    }
  };

  useEffect(() => {
    if (matched.length === deck.length && deck.length > 0) {
      setShowConfetti(true);
    }
  }, [matched, deck]);

  return (
    <div className="mm-container">
      {showConfetti && <Confetti />}
      <h1 className="mm-title">🧠 Memory Match Game 🧠</h1>
      <h2>Score: {score} | Attempts: {attempts}</h2>

      <div className="cards-grid">
        {deck.map((card, idx) => (
          <div
            key={idx}
            className={`card ${flipped.includes(idx) || matched.includes(idx) ? "flipped" : ""}`}
            onClick={() => handleFlip(idx)}
          >
            <div className="card-front">❓</div>
            <div className="card-back">{card.value}</div>
          </div>
        ))}
      </div>

      <button className="reset-btn" onClick={initializeDeck}>🔄 Restart Game</button>
    </div>
  );
}