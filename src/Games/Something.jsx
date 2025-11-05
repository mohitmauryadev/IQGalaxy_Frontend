import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const imageQuestions = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
    question: "Which animal is shown in the picture?",
    options: ["Dog", "Cat", "Lion", "Rabbit"],
    correct: "Cat",
  },
  {
    image: "https://worldinparis.com/wp-content/uploads/2022/01/View-from-the-Pantheon.jpg",
    question: "Where is this monument located?",
    options: ["London", "Paris", "Rome", "New York"],
    correct: "Paris",
  },
  {
    image: "https://gardenerspath.com/wp-content/uploads/2024/05/How-to-Grow-Apples-Feature.jpg",
    question: "What fruit is shown here?",
    options: ["Apple", "Banana", "Grapes", "Mango"],
    correct: "Apple",
  },
  // 🌿 Animals
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGMsYKgBqAdwH2SCWHQ0mH24vurOr1cjVsA&s",
    question: "Which animal is shown in the picture?",
    options: ["Dog", "Cat", "Lion", "Rabbit"],
    correct: "Cat",
  },
  {
    image: "https://images.theconversation.com/files/625049/original/file-20241010-15-95v3ha.jpg?ixlib=rb-4.1.0&rect=12%2C96%2C2671%2C1335&q=45&auto=format&w=1356&h=668&fit=crop",
    question: "Which animal is this?",
    options: ["Cow", "Dog", "Goat", "Horse"],
    correct: "Dog",
  },
  {
    image: "https://lazoo.org/wp-content/uploads/2020/02/Jaguar-Female-JEP_6234-1.jpg",
    question: "Identify this wild animal.",
    options: ["Tiger", "Leopard", "Jaguar", "Cheetah"],
    correct: "Jaguar",
  },
  {
    image: "https://media.istockphoto.com/id/1017220160/photo/large-carpathian-brown-bear-portrait-in-the-woods-europe-romania.jpg?s=612x612&w=0&k=20&c=nKY-8Np5pOtWJEybyv9EL7x1rnaCDyV4FlJKcfl9A00=",
    question: "Which animal is this?",
    options: ["Bear", "Lion", "Wolf", "Panther"],
    correct: "Bear",
  },
  {
    image: "https://bigcatsindia.com/wp-content/uploads/2018/06/Royal-Bengal-Tiger.jpg",
    question: "Which animal is shown here?",
    options: ["Tiger", "Lion", "Cheetah", "Leopard"],
    correct: "Tiger",
  },

  // 🏰 Monuments
  {
    image: "https://t3.ftcdn.net/jpg/02/65/64/24/360_F_265642486_IXw9DQVzjTfAzT8xMtTBXBvYD8Who6Fw.jpg",
    question: "Where is this monument located?",
    options: ["India", "Egypt", "Italy", "France"],
    correct: "India",
  },
  {
    image: "https://media.architecturaldigest.com/photos/66a951edce728792a48166e6/3:2/w_7950,h_5300,c_limit/GettyImages-955441104.jpg",
    question: "Name this monument.",
    options: ["Leaning Tower", "Big Ben", "Eiffel Tower", "Statue of Liberty"],
    correct: "Eiffel Tower",
  },
  {
    image: "https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg",
    question: "Identify this ancient monument.",
    options: ["Colosseum", "Parthenon", "Great Wall", "Machu Picchu"],
    correct: "Colosseum",
  },
  {
    image: "https://media.istockphoto.com/id/180638887/photo/beautiful-shanghai-yuyuan-garden-at-night.jpg?s=612x612&w=0&k=20&c=QZaK9sg6a9AavYnfMH38T3Heg9rV8nV3DSMUGO_JRn8=",
    question: "This monument is located in which country?",
    options: ["Japan", "China", "Thailand", "Vietnam"],
    correct: "China",
  },
  {
    image: "https://www.historyhit.com/app/uploads/bis-images/5150130/Statue-of-Liberty-e1632495792514-788x537.jpg?x81146",
    question: "What is this monument called?",
    options: ["Liberty Bell", "Statue of Liberty", "Mount Rushmore", "Empire State"],
    correct: "Statue of Liberty",
  },

  // 🍎 Fruits
  {
    image: "https://cdn.pixabay.com/photo/2017/09/26/13/31/apple-2788616_1280.jpg",
    question: "Identify this fruit.",
    options: ["Apple", "Banana", "Grapes", "Mango"],
    correct: "Apple",
  },
  {
    image: "https://t4.ftcdn.net/jpg/05/22/21/57/360_F_522215774_nhHbylr3TLeaFWBG3hggVQMrhcGQdE40.jpg",
    question: "What fruit is this?",
    options: ["Papaya", "Banana", "Pineapple", "Lemon"],
    correct: "Banana",
  },
  {
    image: "https://www.metropolisindia.com/upgrade/blog/upload/25/06/benefits-of-grapes1750082421.webp",
    question: "Which fruit is shown in this image?",
    options: ["Guava", "Grapes", "Berries", "Peach"],
    correct: "Grapes",
  },
  {
    image: "https://media.istockphoto.com/id/542726114/photo/dangling-mangoes.jpg?s=612x612&w=0&k=20&c=EZ67-T2s-4TmBZsj4kak8tmaSf-Af70nnokHZ8Jqfpk=",
    question: "Identify this tropical fruit.",
    options: ["Mango", "Pineapple", "Papaya", "Orange"],
    correct: "Mango",
  },
  {
    image: "https://m.media-amazon.com/images/I/81kbcuxPt4L._AC_UF1000,1000_QL80_.jpg",
    question: "What fruit is this?",
    options: ["Orange", "Lemon", "Grapefruit", "Peach"],
    correct: "Orange",
  },

  // 🚗 Vehicles
  {
    image: "https://hips.hearstapps.com/hmg-prod/images/2025-tesla-model-s-1-672d42e172407.jpg?crop=0.465xw:0.466xh;0.285xw,0.361xh&resize=2048:*",
    question: "Which vehicle is this?",
    options: ["Tesla Model S", "Audi A6", "BMW i8", "Mercedes S-Class"],
    correct: "Tesla Model S",
  },
  {
    image: "https://thumbs.dreamstime.com/b/passenger-airliner-flight-17934723.jpg",
    question: "Identify the type of vehicle shown.",
    options: ["Ship", "Helicopter", "Plane", "Rocket"],
    correct: "Plane",
  },
  {
    image: "https://cdn.bikedekho.com/processedimages/oben/oben-electric-bike/source/oben-electric-bike65f1355fd3e07.jpg",
    question: "Which type of vehicle is this?",
    options: ["Car", "Truck", "Bike", "Bus"],
    correct: "Bike",
  },
  {
    image: "https://assets.new.siemens.com/siemens/assets/api/uuid:7b1292ed-329a-48e0-beb8-61a39e54a96f/width:2048/quality:high/Siemens-Mobility-Inspiro-Metro-trains-for-public-transport.jpg",
    question: "What kind of vehicle is shown here?",
    options: ["Metro Train", "Bus", "Taxi", "Airplane"],
    correct: "Metro Train",
  },
  {
    image: "https://t3.ftcdn.net/jpg/04/54/40/96/360_F_454409639_SIsGJEefJK2MtCnlD7wyf1RgdWWTAUj3.jpg",
    question: "Identify the vehicle type.",
    options: ["Boat", "Submarine", "Cargo Ship", "Ferry"],
    correct: "Cargo Ship",
  },

  // 🌍 Nature
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe2oZrUBPIkPZh46ExWN9O2xEPcPhrrWO66A&s",
    question: "What is visible in the image?",
    options: ["Sky and Clouds", "Snow", "Sea", "Fog"],
    correct: "Sky and Clouds",
  },
  {
    image: "https://wallpapers.com/images/featured/rainbow-pictures-povwnf60sljd1snu.jpg",
    question: "What natural phenomenon is shown here?",
    options: ["Aurora", "Rainbow", "Fog", "Sunlight"],
    correct: "Rainbow",
  },
  {
    image: "https://t4.ftcdn.net/jpg/14/24/59/31/360_F_1424593146_ZTEWtcmshnpX1hcst4qsemLJH43NTCwJ.jpg",
    question: "Identify this weather event.",
    options: ["Rain", "Lightning", "Hailstorm", "Tornado"],
    correct: "Lightning",
  },
  {
    image: "https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg?crop=1xw:1xh;center,top",
    question: "Which landform is shown here?",
    options: ["Desert", "Mountain", "Plain", "Island"],
    correct: "Mountain",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnJSaXq8_Noflw25eu3JCzvLUkc_RUNvPdVg&s",
    question: "Identify this landform.",
    options: ["Forest", "Mountain", "Desert", "River"],
    correct: "Desert",
  },

  // 🌺 Plants
  {
    image: "https://t4.ftcdn.net/jpg/16/48/08/25/360_F_1648082518_fOioN4Cbmxxlvi8MlNiGIKAvoFhYDpHe.jpg",
    question: "Which flower is shown in the image?",
    options: ["Tulip", "Lily", "Rose", "Jasmine"],
    correct: "Rose",
  },
  {
    image: "https://media.istockphoto.com/id/98380562/photo/yellow-sunflowers-over-blue-sky.jpg?s=612x612&w=0&k=20&c=xnwnm0CP2o2tVrGfDOd-21MZYyp0OVweZpA-Ti_h3Vs=",
    question: "Identify this bright yellow flower.",
    options: ["Sunflower", "Daisy", "Rose", "Marigold"],
    correct: "Sunflower",
  },
  {
    image: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/132616/299600/prints%2Fdownscaled%2Fp_62gj4y2lcgm_2000x2000__14249.1734984424.jpg?c=2",
    question: "Which is India's national flower?",
    options: ["Rose", "Lotus", "Lily", "Tulip"],
    correct: "Lotus",
  },
  {
    image: "https://images.unsplash.com/photo-1620005807545-2e08850d6591?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFyaWdvbGQlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
    question: "Identify this common festive flower.",
    options: ["Lily", "Marigold", "Rose", "Orchid"],
    correct: "Marigold",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/008/143/066/large_2x/red-tulips-background-beautiful-tulip-in-the-meadow-free-photo.JPG",
    question: "Which flower is shown in the image?",
    options: ["Tulip", "Lily", "Orchid", "Sunflower"],
    correct: "Tulip",
  },

  // 🧪 Science & Objects
  {
    image: "https://thumbs.dreamstime.com/b/neural-projection-human-heart-concept-technologies-studying-human-heart-ai-generated-neural-projection-388572477.jpg",
    question: "Identify this human organ.",
    options: ["Lungs", "Heart", "Liver", "Brain"],
    correct: "Heart",
  },
  {
    image: "https://www.thoughtco.com/thmb/cHWrKW2ZUCtKqEmE0H14Qoe2eb0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/brain_activity-5798eebf5f9b589aa9ae69b2.jpg",
    question: "Which organ is shown in this image?",
    options: ["Heart", "Lungs", "Brain", "Kidney"],
    correct: "Brain",
  },
  {
    image: "https://cdn.britannica.com/70/136570-050-5F4CF665/Nikon-TE2000-Inverted-Research-Microscope-infinity-space.jpg",
    question: "Name the instrument shown.",
    options: ["Telescope", "Microscope", "Binocular", "Periscope"],
    correct: "Microscope",
  },
  {
    image: "https://media.istockphoto.com/id/1451866244/photo/innovation-through-ideas-and-inspiration-ideas-human-hand-holding-light-bulb-to-illuminate.jpg?s=612x612&w=0&k=20&c=nJc5mLdUw3-PunBV7JDoiXp_fwOohlQsHEIIYqG7Urc=",
    question: "What is this object?",
    options: ["Lamp", "Light Bulb", "Battery", "Tube Light"],
    correct: "Light Bulb",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRP4iJtD1NIPrDnqr_txcMUD6bYfYML9lUxQ&s",
    question: "Which object represents Earth?",
    options: ["Map", "Compass", "Globe", "Satellite"],
    correct: "Globe",
  },

  // 🍽 Food
  {
    image: "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
    question: "What food item is this?",
    options: ["Burger", "Pizza", "Sandwich", "Pasta"],
    correct: "Pizza",
  },
  {
    image: "https://img.freepik.com/free-photo/juicy-cheeseburger-rustic-wooden-board_9975-24623.jpg?semt=ais_hybrid&w=740&q=80",
    question: "Identify the food shown.",
    options: ["Burger", "Hotdog", "Pizza", "Donut"],
    correct: "Burger",
  },
  {
    image: "https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_1280.jpg",
    question: "What is this Indian dish called?",
    options: ["Dosa", "Idli", "Vada", "Upma"],
    correct: "Idli",
  },
  {
    image: "https://img.freepik.com/free-photo/chole-bhature-delicious-indian-street-food_23-2151998582.jpg?semt=ais_hybrid&w=740&q=80",
    question: "Identify this famous Indian food.",
    options: ["Rajma Chawal", "Chole Bhature", "Pav Bhaji", "Biryani"],
    correct: "Chole Bhature",
  },
  {
    image: "https://media.istockphoto.com/id/2148933061/photo/selective-focus-samosa-spiced-potato-filled-pastry-crispy-savory-popular-indian-snack-with.jpg?s=612x612&w=0&k=20&c=HW1y3HYPa7r-YwB6wn3gktZP-1Fzw9bYKsR8D6yqQOs=",
    question: "Which snack is this?",
    options: ["Pakora", "Kachori", "Samosa", "Dhokla"],
    correct: "Samosa",
  },

];

export default function Something() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // ✅ Random 10 questions select karo
  useEffect(() => {
    const shuffled = [...imageQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    if (option === questions[index].correct) setScore((prev) => prev + 1);

    setTimeout(() => {
      if (index + 1 < questions.length) {
        setIndex(index + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const restartGame = () => {
    const reshuffled = [...imageQuestions].sort(() => 0.5 - Math.random());
    setQuestions(reshuffled.slice(0, 10));
    setIndex(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
  };

  if (questions.length === 0) return <p className="text-center text-lg mt-20">Loading quiz...</p>;

  // ✅ Result Screen
  if (showResult) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.h1 className="text-5xl font-bold mb-6">🎯 Quiz Result</motion.h1>
        <motion.p className="text-2xl mb-4">
          You scored {score} out of {questions.length}
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
          className="text-6xl mb-6"
        >
          {score >= 8 ? "🌟 Excellent!" : score >= 5 ? "👍 Good Try!" : "💪 Keep Practicing!"}
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={restartGame}
          className="bg-white text-purple-700 px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition"
        >
          🔁 Play Again
        </motion.button>
      </motion.div>
    );
  }

  const current = questions[index];

  // ✅ Quiz Question Screen
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-green-500 p-6 text-white">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        🧠 Image Recognition Quiz
      </motion.h1>

      <div className="bg-white text-black shadow-2xl w-full max-w-md rounded-2xl p-6 text-center">
        <motion.img
          src={current.image}
          alt="quiz"
          className="w-full h-64 object-cover rounded-xl mb-4 shadow-md"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        />
        <h2 className="text-xl font-semibold mb-4">{current.question}</h2>

        <div className="grid grid-cols-2 gap-3">
          {current.options.map((option, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleSelect(option)}
              disabled={!!selected}
              className={`p-3 rounded-lg font-medium ${
                selected
                  ? option === current.correct
                    ? "bg-green-500 text-white"
                    : option === selected
                    ? "bg-red-500 text-white"
                    : "bg-gray-200"
                  : "bg-blue-100 hover:bg-blue-300"
              }`}
            >
              {option}
            </motion.button>
          ))}
        </div>
      </div>

      <motion.p className="mt-6 text-lg font-medium">
        Question {index + 1} of {questions.length}
      </motion.p>
    </div>
  );
}
