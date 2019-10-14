import React from "react";
import { shallow, mount } from "enzyme";
import sinon from "sinon";

import EmojiPicker from ".";

const defaultProps = {};

it("renders without crashing", () => {
  shallow(<EmojiPicker {...defaultProps} />);
});

it("renders with default text on field", () => {
  const wrapper = shallow(<EmojiPicker {...defaultProps} searchText="Hello" />);
  expect(wrapper.is(".EmojiPicker")).toBe(true);
  expect(wrapper.containsAnyMatchingElements([<input value="Hello" />])).toBe(
    true
  );
});

it("simulate search field change", () => {
  const onFieldSearch = sinon.spy();
  const wrapper = mount(
    <EmojiPicker {...defaultProps} onFieldSearch={onFieldSearch} />
  );

  wrapper.find("input").simulate("change", {
    target: { value: "world" }
  });

  expect(onFieldSearch.called).toBe(true);
  expect(wrapper.contains("Search Results")).toBe(true);
});

it("simulate search field change without result", () => {
  const onFieldSearch = sinon.spy();
  const wrapper = mount(
    <EmojiPicker {...defaultProps} onFieldSearch={onFieldSearch} />
  );

  wrapper.find("input").simulate("change", {
    target: { value: "foo baz" }
  });

  expect(onFieldSearch.called).toBe(true);
  expect(wrapper.contains("Search Results")).toBe(false);
});

it("logs performance on multiple words on search", () => {
  const t0 = performance.now();
  const wrapper = mount(<EmojiPicker {...defaultProps} />);
  wrapper.find("input").simulate("change", {
    target: {
      value: `
			Hello world one cup smile sad lonely awesome. Non
			accusantium iusto ipsa nihil. Thumbs up possimus libero quasi ipsam
			doloribus. Deserunt aliquid quo aperiam distinctio sed sint dolores
			excepturi.
		`
    }
  });
  const t1 = performance.now();
  console.log("Call EmojiPicker took " + (t1 - t0) + " milliseconds.");
});
