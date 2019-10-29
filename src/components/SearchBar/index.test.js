import React from "react";
import { shallow } from "enzyme";

import SearchBar from ".";

const defaultProps = {
  emojiContent: {
    current: React.cloneElement("div")
  },
  onFieldSearch: () => {},
  setInput: () => {},
  setResults: () => {},
  inputPlaceholder: "Search emoji(inputPlaceholder)"
};

it("renders without crashing", () => {
  shallow(<SearchBar {...defaultProps} />);
});
