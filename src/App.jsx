import React from "react";
import SocialMedia from "./components/SocialMedia";
import Tabs from "./components/Tabs";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Counter />
      <Tabs />
      <SocialMedia />
    </div>
  );
}

export default App;
