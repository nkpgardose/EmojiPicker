import React from "react";
import { shallow } from "enzyme";
import Emojis from ".";
import { defaultProps as EmojiPickerDefaultProps } from "../EmojiPicker";

const defaultProps = {
  emojis: EmojiPickerDefaultProps.emojis
};

it("renders without crashing", () => {
  shallow(<Emojis {...defaultProps} />);
});

it("renders search result", () => {
  const wrapper = shallow(<Emojis {...defaultProps} results={["smile"]} />);
  expect(wrapper.contains("Search Results")).toBe(true);
});
