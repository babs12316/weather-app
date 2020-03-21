import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import CityWeather from "./CityWeather";

describe("<CityWeather />", () => {
  it("renders 2 inputs ", () => {
    const wrapper = shallow(<CityWeather />);
    expect(wrapper.find("input")).to.have.lengthOf(2);
  });
  it("renders buton ", () => {
    const wrapper = shallow(<CityWeather />);
    expect(wrapper.find("button")).to.have.lengthOf(1);
  });
});
