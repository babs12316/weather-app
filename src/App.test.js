import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from'./App';
import { Link } from 'react-router';
import { MemoryRouter } from 'react-router-dom';
import CityWeather from './components/CityWeather/CityWeather';

describe('<App />', () => {
    it('renders button <RandomLocationWeaher /> component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('.App')).to.have.lengthOf(1);
    });
    it('includes link to Mission scene', () => {                                       
      const wrapper = shallow(<MemoryRouter><App /></MemoryRouter>);
      expect(wrapper.find(Link).props().to).toBe('/city-weather');
     });
});