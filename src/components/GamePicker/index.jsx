import React, { useState } from "react";
import "./index.css";

const GameNamePicker = () => {
  const gameNames = [
    "PUBG MOBILE",
    "Fortnite",
    "Apex Legends",
    "Call of Duty",
    "Valorant",
  ];

  const [selectedGame, setSelectedGame] = useState("");

  const pickRandomGame = () => {
    const randomIndex = Math.floor(Math.random() * gameNames.length);
    setSelectedGame(gameNames[randomIndex]);
  };

  return (
    <div className="card">
      <div className="game-picker-wrapper">
        <h1>O'yin Nomi Tanlovchi</h1>
        <button className="game-picker-btn" onClick={pickRandomGame}>
          Pick Game
        </button>
        {selectedGame && (
          <h2 className="selected-game">{`Tanlangan o'yin: ${selectedGame}`}</h2>
        )}
      </div>
    </div>
  );
};

export default GameNamePicker;
