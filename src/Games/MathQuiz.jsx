import React, { useState, useEffect } from "react";
import "./MathQuiz.css";
import Tiger from "../assets/Sounds/Result.mp3"
import Neeraj from "../assets/Sounds/NeerajSound1.mp3"
import Better from "../assets/Sounds/BetterResult.mp3"

export default function MathQuiz() {
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [feedback, setFeedback] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const totalQuestions = 15;

  const generateQuestion = () => {
    const operators = ["+", "-", "*", "/"];
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let correctAnswer;
    switch (operator) {
      case "+": correctAnswer = num1 + num2; break;
      case "-": correctAnswer = num1 - num2; break;
      case "*": correctAnswer = num1 * num2; break;
      case "/": correctAnswer = Math.floor(num1 / num2); break;
      default: correctAnswer = num1 + num2;
    }

    setQuestion({ num1, num2, operator, correctAnswer });
    setAnswer("");
    setTimeLeft(15);
    setFeedback("");
  };

  useEffect(() => {
    if (!gameOver) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleNext();
            return 15;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [questionNumber, gameOver]);

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleNext = () => {
    if (questionNumber >= totalQuestions) {
      setGameOver(true);
    } else {
      setQuestionNumber(prev => prev + 1);
      generateQuestion();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(answer) === question.correctAnswer) {
      setScore(prev => prev + 1);
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }
    setTimeout(() => {
      handleNext();
    }, 800);
  };

  const getGrade = (score) => {
    if (score <= 3) {
      // const audio = new Audio(Neeraj);
      // audio.play();

      return "Bad 😞";
    }
    else if (score <= 6) return "Good 🙂";
    else if (score <= 9) {
      // const audio = new Audio(Better);
      // audio.play();
      return "Better 😃";
    }
    else if (score <= 12) return "Best 😎";
    else {
      // const audio = new Audio(Tiger);
      // audio.play();
      return "Excellent 🏆";
    }

  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">🎉 Math Quiz Challenge 🎉</h1>

      {!gameOver ? (
        <div className="question-card">
          <h2>Question {questionNumber} / {totalQuestions}</h2>
          <h3>{question.num1} {question.operator} {question.num2} = ?</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Your answer"
              className="answer-input"
              disabled={gameOver}
            />
            <button type="submit" className="submit-btn">Submit</button>
          </form>
          {feedback && (
            <p className={`feedback ${feedback}`}>
              {feedback === "correct" ? "✅ Correct!" : "❌ Wrong!"}
            </p>
          )}
          <p className="timer">⏱ Time Left: {timeLeft}s</p>
          <h3 className="score">🏆 Score: {score}</h3>
        </div>
      ) : (
        <div className="question-card">
          <h2>🎉 Game Over! 🎉</h2>
          <h3>Your Score: {score} / {totalQuestions}</h3>
          <h2>Grade: {getGrade(score)}</h2>
          <button className="submit-btn" onClick={() => {
            setScore(0);
            setQuestionNumber(1);
            setGameOver(false);
            generateQuestion();
          }}>Play Again</button>
        </div>
      )}
    </div>
  );
}