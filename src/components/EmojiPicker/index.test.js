import React from "react";
import ReactDOM from "react-dom";
import EmojiPicker from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EmojiPicker />, div);
  ReactDOM.unmountComponentAtNode(div);
});
