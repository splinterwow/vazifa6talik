import React from "react";
import SocialMedia from "./components/SocialMedia";
import Tabs from "./components/Tabs";
import Counter from "./components/Counter";
import GameNamePicker from "./components/GamePicker";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Counter />
      <Tabs />
      <SocialMedia />
      <GameNamePicker />
      <ProgressBar />
    </div>
  );
}

export default App;
