import React from "react";
import ReactDOM from "react-dom";
import EmojiPicker from "./EmojiPicker";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EmojiPicker />, div);
  ReactDOM.unmountComponentAtNode(div);
});
