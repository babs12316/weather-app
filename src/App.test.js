import React from "react";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    mount(<App />);
  });

  it("renders button <RandomLocationWeaher /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App")).to.have.lengthOf(1);
  });
});
