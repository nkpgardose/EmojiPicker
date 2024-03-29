import React from "react";
import EmojiPicker from "./components/EmojiPicker";

function App() {
  return (
    <EmojiPicker
      onEmojiPick={emoji => console.log("App", JSON.stringify(emoji))}
    />
  );
}

export default App;
