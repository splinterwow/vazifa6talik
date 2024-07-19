import React from "react";
import SocialMedia from "./components/SocialMedia";
import Tabs from "./components/Tabs";
import Counter from "./components/Counter";
import GameNamePicker from "./components/GamePicker";
import ProgressBar from "./components/ProgressBar";
import ImageGallery from "./components/ImageGalarey";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Counter />
      <Tabs />
      <SocialMedia />
      <GameNamePicker />
      <ProgressBar />
      <ImageGallery />
    </div>
  );
}

export default App;
