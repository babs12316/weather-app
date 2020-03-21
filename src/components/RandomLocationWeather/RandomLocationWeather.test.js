import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import RandomLocationWeather from'./RandomLocationWeather';

describe('<RandomLocationWeaher />', () => {
    it('renders button <RandomLocationWeaher /> component', () => {
      const wrapper = shallow(<RandomLocationWeather />);
      expect(wrapper.find('.button')).to.have.lengthOf(1);
    });
});