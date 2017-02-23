import { expect } from 'chai';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Main from '../lib/Components/Main';
import Weatherly from '../lib/Components/Weatherly';
import WeatherCards from '../lib/Components/WeatherCards';


describe('testing Weatherly in enzyme', () => {
  it('should have a component called Weatherly', () => {
    const wrapper = shallow(<Main/>);
    expect(wrapper.find('Weatherly')).to.have.length(1);
  });

  it('Weatherly should have one text input and one submit input', () => {
    const wrapper = shallow(<Weatherly/>);
    expect(wrapper.find('.location')).to.have.length(1);
    expect(wrapper.find('.submit')).to.have.length(1);
  });

  it('Weatherly should have WeatherCards as a component', () => {
    const wrapper = shallow(<Weatherly/>);
    expect(wrapper.find('WeatherCards')).to.have.length(1);
  });
  // url get function
  // local storage
  // state has location - input empty and weather object - empty
  // add a location, stores location
  // change location, reflected in change of state
  // validation of locationin weatherly
});

describe('WeahterCards component testing in enzyme', () => {
  const weatherFake = require('./helpers/stub.json')
  it.only('WeatherCards should have an Hourly component with 7 instantiations', () => {
    const wrapper = shallow(<WeatherCards weather={ weatherFake } />);

    expect(wrapper.find('Hourly')).to.have.length(7);
  });
  // hourly is a component - length
  // ten day forecast - length
  // state is passed down to all components
});
