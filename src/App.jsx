import React from "react";
import SocialMedia from "./components/SocialMedia";
import Tabs from "./components/Tabs";
import Counter from "./components/Counter";
import GameNamePicker from "./components/GamePicker";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Counter />
      <Tabs />
      <SocialMedia />
      <GameNamePicker />
    </div>
  );
}

export default App;
