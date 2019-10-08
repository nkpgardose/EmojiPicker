import React from "react";
import EmojiPicker from "./components/EmojiPicker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Emoji Picker for React</h1>
        <EmojiPicker />
      </header>
    </div>
  );
}

export default App;
