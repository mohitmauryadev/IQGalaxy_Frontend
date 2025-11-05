import React, { useState } from "react";
import "./AnimalSoundQuiz.css";
import NeerajIMG from "../assets/Sounds/Neeraj.jpg" 
import Lion from "../assets/Sounds/LionSound.mp3";
import Gog from "../assets/Sounds/DogSoound.mp3";
import Cat from "../assets/Sounds/CatSound.mp3";
import Elephant from "../assets/Sounds/ElephantSound.mp3"
import Cow from "../assets/Sounds/CowSiund.mp3"
import Neeraj from "../assets/Sounds/NeerajSound1.mp3"
import Donkey from "../assets/Sounds/DonkeySound.mp3"
import Eagle from "../assets/Sounds/EagelSound.mp3"
import Goat from "../assets/Sounds/GoatSound.mp3"
import Monkey from "../assets/Sounds/MonkeySound.mp3"
import Tiger from "../assets/Sounds/TigerSound.mp3"


// Animal data
const ANIMALS = [
  {
    name: "Lion",
    sound: Lion, 
    image: "https://static.vecteezy.com/system/resources/thumbnails/026/525/162/small_2x/lion-animal-isolated-photo.jpg"
  },
  {
    name: "Dog",
    sound: Gog,
    image: "https://www.shutterstock.com/image-photo/beautiful-golden-retriever-cute-puppy-600nw-2526542701.jpg"
  },
  //  {
  //   name: "Neeraj",
  //   sound: Neeraj, 
  //   image: "https://madidaclothing.com/cdn/shop/products/image_b1b2ef72-2594-4b55-aff6-9c7518a277f7.jpg?v=1656001514",
  // },
  {
    name: "Cat",
    sound: Cat ,
    image: "https://www.shutterstock.com/image-photo/cute-cat-tilting-head-baby-600nw-2492403467.jpg"
  },
  {
    name: "Elephant",
    sound: Elephant,
    image: "https://cdn.britannica.com/02/152302-050-1A984FCB/African-savanna-elephant.jpg"
  },
  {
    name: "Cow",
    sound: Cow,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg"
  },
   
  {
    name: "Donkey",
    sound: Donkey,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5qXDeQajWORu8Tz3zCyae99r5_1oZZU63g&s"
  },
  {
    name: "Eagle",
    sound: Eagle ,
    image: "https://thumbs.dreamstime.com/b/majestic-bald-eagle-flying-forest-open-wings-navigating-dense-ar-style-raw-job-id-e-d-da-343561065.jpg"
  },
  {
    name: "Goat",
    sound: Goat,
    image: "https://thumbs.dreamstime.com/b/goat-farm-2026860.jpg"
  },
  {
    name: "Monkey",
    sound: Monkey,
    image: "https://www.shutterstock.com/image-photo/cute-baby-monkey-playing-indian-260nw-2315292249.jpg"
  },
   {
    name: "Tiger",
    sound: Tiger,
    image: "https://media.istockphoto.com/id/1420676204/photo/portrait-of-a-royal-bengal-tiger-alert-and-staring-at-the-camera-national-animal-of-bangladesh.jpg?s=612x612&w=0&k=20&c=0OCYv99Ktv3fJ-YYlg7SetHBJj3pIk58WY7GDy5VCtI="
  },
];

export default function AnimalSoundQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  const currentAnimal = ANIMALS[currentIndex];

  const playSound = () => {
    const audio = new Audio(currentAnimal.sound);
    audio.play();
  };

  const handleAnswer = (choice) => {
    if (choice === currentAnimal.name) {
      setScore(score + 1);
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }

    setTimeout(() => {
      setFeedback("");
      if (currentIndex < ANIMALS.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        alert(`Quiz Finished! Your score: ${score + (choice === currentAnimal.name ? 1 : 0)} / ${ANIMALS.length}`);
        setScore(0);
        setCurrentIndex(0);
      }
    }, 1000);
  };

  // Shuffle options
  const options = [...ANIMALS.map(a => a.name)]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  if (!options.includes(currentAnimal.name)) {
    options[Math.floor(Math.random() * 4)] = currentAnimal.name;
  }

  return (
    <div className="asq-container">
      <h1 className="asq-title">🦁 Animal Sound Quiz 🐶</h1>
      <div className="asq-card">
        <img src={currentAnimal.image} alt={currentAnimal.name} className="animal-img " />
        <button className="play-btn" onClick={playSound}>🔊 Play Sound</button>

        <div className="options">
          {options.map((option, idx) => (
            <button
              key={idx}
              className={`option-btn ${feedback && (option === currentAnimal.name ? "correct" : "wrong")}`}
              onClick={() => handleAnswer(option)}
              disabled={feedback}
            >
              {option}
            </button>
          ))}
        </div>
        <h2 className="score">🏆 Score: {score}</h2>
      </div>
    </div>
  );
}