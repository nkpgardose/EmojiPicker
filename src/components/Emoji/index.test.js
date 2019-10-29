import React from "react";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import Emoji from ".";

const defaultProps = {
  children: "🎉",
  title: "tada",
  onClick() {}
};

it("renders without crashing", () => {
  shallow(<Emoji {...defaultProps} />);
});

it("simulate click event", () => {
  const onClick = sinon.spy();
  const wrapper = mount(<Emoji {...defaultProps} onClick={onClick} />);
  wrapper.simulate("click");
  expect(onClick).toHaveProperty("callCount", 1);
});
