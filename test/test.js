import { expect } from 'chai';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Main from '../lib/Components/Main';
import Weatherly from '../lib/Components/Weatherly';
import WeatherCards from '../lib/Components/WeatherCards';
import ObjectCleaner from '../lib/Components/ObjectCleaner';

require('locus');


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

  it('Weatherly should update location state on input change', () => {
    const wrapper = shallow(<Weatherly/>);
    expect(wrapper.state().location).to.equal('');
    wrapper.find('.location').simulate('change', {target: {value: 'denver'}})
    expect(wrapper.state().location).to.equal('denver');
  });

  it('Should update location when a location is already set as the state.', () => {
    const wrapper = shallow(<Weatherly/>);
    wrapper.find('.location').simulate('change', {target: {value: 'denver'}})
    expect(wrapper.state().location).to.equal('denver');
    wrapper.find('.location').simulate('change', {target: {value: 'englewood'}})
    expect(wrapper.state().location).to.equal('englewood');

  });
  it.skip('Weatherly should update weather state on button click', () => {
    const wrapper = mount(<Weatherly/>);
    expect(wrapper.state().weather).to.deep.equal([]);
    wrapper.find('.location').simulate('change', {target: {value: 'denver, co'}});
    wrapper.find('.submit').simulate('click', 1);
    console.log(wrapper.state());
    expect(wrapper.state().weather).to.equal([]);
  });

  it.skip('Test the URL func', () => {
    // url get function

  });

  it.skip('Test the URL func', () => {
    // local storage

  });

  it.skip('Test the URL func', () => {
    // validation of locationin weatherly

  });
});

describe('WeahterCards component testing in enzyme', () => {
  const weatherFake = require('./helpers/stub.json')
  it('WeatherCards should have an Hourly component with 7 instantiations', () => {
    const wrapper = shallow(<WeatherCards weather={ weatherFake } />);

    expect(wrapper.find('Hourly')).to.have.length(7);
  });

  it('WeatherCards should have a TenDay component with 10 instantiations', () => {
    const wrapper = shallow(<WeatherCards weather={ weatherFake } />);

    expect(wrapper.find('TenDay')).to.have.length(10);
  });

  // state is passed down to all components
});
describe('WeahterCards component testing in enzyme', () => {

  const weatherFake = require('./helpers/stub.json')

  it.only('WeatherCards should have an Hourly component with 7 instantiations', () => {
    console.log(ObjectCleaner(weatherFake));
    // expect(ObjectCleaner.hourlyForecast(weatherFake)).to.have.length(7);
  });

  it('WeatherCards should have an TenDay component with 10 instantiations', () => {

    expect(ObjectCleaner.tenDayForecast(weatherFake)).to.have.length(10);
  });

  it.skip('WeatherCards should have an TenDay component with 10 instantiations', () => {

    expect(ObjectCleaner.currentForecast(weatherFake)).to.have.length(10);
  });
});

// test helper functions
