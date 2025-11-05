import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./PlantAnimalExplorer.css"; // Create this CSS for animations and styles

const TOTAL_QUESTIONS = 15;

export default function PlantAnimalExplorer() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [timeLeft, setTimeLeft] = useState(20);
  const [showConfetti, setShowConfetti] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  // Fetch a question from Open Trivia DB
  const fetchQuestion = async () => {
    try {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=1&category=17&type=multiple`
      );
      const data = await res.json();
      const q = data.results[0];
      const options = [q.correct_answer, ...q.incorrect_answers].sort(
        () => Math.random() - 0.5
      );
      setQuestions([{ ...q, options }]);
      setCurrentIndex(0);
      setSelected("");
      setFeedback("");
      setTimeLeft(20);
      setGameOver(false);
      setScore(0);
      setShowConfetti(false);

      // Random plant/animal image (free placeholder URLs)
      const images = [
        "https://static.vecteezy.com/system/resources/thumbnails/003/607/011/small/baby-kittens-playing-outdoors-in-the-grass-photo.jpg",
        "https://justbeehoney.co.uk/cdn/shop/articles/how_do_bees_make_honey_large.jpg?v=1603190097",
        "https://media.istockphoto.com/id/849220498/photo/blue-tiger-butterfly-on-a-pink-zinnia-flower-with-green-background.jpg?s=612x612&w=0&k=20&c=McO2dHI1oL0KITPuqXmZbRsk4ePnnXg1yP1283LwRDM=",
        "https://cdn.thewire.in/wp-content/uploads/2023/09/07154537/Lion_pose_6649531395.jpg",
        "https://images.saymedia-content.com/.image/t_share/MTgxNzkwMDMzNDU4NTcwNTY4/do-plants-have-feelings-in-a-sense-yes.jpg",
        "https://images.pexels.com/photos/36020/frog-terrarium-amphibians.jpg?cs=srgb&dl=pexels-pixabay-36020.jpg&fm=jpg"
      ];
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    } catch (error) {
      console.log("Error fetching question:", error);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  // Timer
  useEffect(() => {
    if (gameOver) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleNext(false);
          return 20;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentIndex, gameOver]);

  const handleAnswer = option => {
    if (selected) return;
    setSelected(option);
    const correct = questions[currentIndex].correct_answer === option;
    if (correct) setScore(prev => prev + 1);
    setFeedback(correct ? "correct" : "wrong");

    setTimeout(() => {
      handleNext(correct);
    }, 1000);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= TOTAL_QUESTIONS) {
      setGameOver(true);
      setShowConfetti(true);
    } else {
      fetchQuestion();
    }
  };

  const getGrade = () => {
    if (score >= 13) return "Excellent";
    if (score >= 10) return "Best";
    if (score >= 7) return "Good";
    if (score >= 4) return "Better";
    return "Bad";
  };

  const resetGame = () => {
    fetchQuestion();
  };

  return (
    <div className="pae-container">
      {showConfetti && <Confetti />}
      <h1 className="pae-title">🌿 Plant & Animal Kingdom Explorer 🌿</h1>

      {!gameOver ? (
        <>
          <h2>Score: {score} | Time Left: {timeLeft}s</h2>
          {currentImage && <img src={currentImage} alt="Plant/Animal" className="pae-image" />}
          {questions.length > 0 && (
            <>
              <div className="question-box">
                <p>{questions[currentIndex].question}</p>
              </div>
              <div className="options-grid">
                {questions[currentIndex].options.map((opt, idx) => (
                  <button
                    key={idx}
                    className={`option-btn ${
                      selected === opt ? (feedback === "correct" ? "correct" : "wrong") : ""
                    }`}
                    onClick={() => handleAnswer(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {feedback && <p className={`feedback ${feedback}`}>{feedback === "correct" ? "✅ Correct!" : "❌ Wrong!"}</p>}
            </>
          )}
        </>
      ) : (
        <div className="game-over-box">
          <h2>🎉 Game Over! 🎉</h2>
          <p>Score: {score} / {TOTAL_QUESTIONS}</p>
          <p>Grade: <strong>{getGrade()}</strong></p>
          <button className="reset-btn" onClick={resetGame}>🔄 Play Again</button>
        </div>
      )}
    </div>
  );
}