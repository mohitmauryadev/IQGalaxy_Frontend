import React, { useState } from "react";
import "./ColorShapesSort.css";

export default function ColorShapeSort() {
  const shapes = ["circle", "square", "triangle"];
  const colors = ["red", "blue", "green"];
  
  const [items, setItems] = useState([
    { id: 1, shape: "circle", color: "red" },
    { id: 2, shape: "square", color: "blue" },
    { id: 3, shape: "triangle", color: "green" },
    { id: 4, shape: "circle", color: "blue" },
    { id: 5, shape: "square", color: "red" },
    { id: 6, shape: "triangle", color: "blue" },
  ]);

  const [score, setScore] = useState(0);

  const handleDrop = (e, targetType, targetValue) => {
    e.preventDefault();
    const id = parseInt(e.dataTransfer.getData("id"));
    const droppedItem = items.find(item => item.id === id);

    if ((targetType === "color" && droppedItem.color === targetValue) ||
        (targetType === "shape" && droppedItem.shape === targetValue)) {
      setScore(prev => prev + 1);
      setItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div className="css-game-container">
      <h1 className="game-title">🎨 Color & Shape Sorting 🎨</h1>
      <h2>Score: {score}</h2>

      <div className="items-container">
        {items.map(item => (
          <div
            key={item.id}
            className={`item ${item.shape}`}
            style={{ backgroundColor: item.color }}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("id", item.id)}
          ></div>
        ))}
      </div>

      <div className="dropzones">
        <div className="dropzone-row">
          <h3>Sort by Color</h3>
          {colors.map(color => (
            <div
              key={color}
              className="dropzone"
              onDrop={(e) => handleDrop(e, "color", color)}
              onDragOver={handleDragOver}
              style={{ backgroundColor: color + "55" }}
            >
              {color}
            </div>
          ))}
        </div>

        <div className="dropzone-row">
          <h3>Sort by Shape</h3>
          {shapes.map(shape => (
            <div
              key={shape}
              className="dropzone"
              onDrop={(e) => handleDrop(e, "shape", shape)}
              onDragOver={handleDragOver}
            >
              {shape}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}