import { expect } from 'chai';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Main from '../lib/Components/Main';
import Weatherly from '../lib/Components/Weatherly';
import WeatherCards from '../lib/Components/WeatherCards';
import objectCleaner from '../lib/Components/ObjectCleaner';

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
    wrapper.find('.location').simulate('change', { target: { value: 'denver' } });
    expect(wrapper.state().location).to.equal('denver');
  });

  it('Should update location when a location is already set as the state.', () => {
    const wrapper = shallow(<Weatherly/>);
    wrapper.find('.location').simulate('change', { target: { value: 'denver' } });
    expect(wrapper.state().location).to.equal('denver');
    wrapper.find('.location').simulate('change', { target: { value: 'englewood' } });
    expect(wrapper.state().location).to.equal('englewood');
  });

  it.skip('Weatherly should update weather state on button click', () => {
    const wrapper = mount(<Weatherly/>);
    expect(wrapper.state().weather).to.deep.equal([]);
    wrapper.find('.location').simulate('change', { target: { value: 'denver, co' } });
    wrapper.find('.submit').simulate('click', 1);
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
  const weatherFake = require('./helpers/stub.json');
  it.skip('WeatherCards should have an Hourly component with 7 instantiations', () => {
    const wrapper = shallow(<WeatherCards weather={ weatherFake } />);

    expect(wrapper.find('Hourly')).to.have.length(7);
  });

  it.skip('WeatherCards should have a TenDay component with 10 instantiations', () => {
    const wrapper = shallow(<WeatherCards weather={ weatherFake } />);

    expect(wrapper.find('TenDay')).to.have.length(10);
  });

  // state is passed down to all components
});

// test helper functions
describe('ObjectCleaner testing in enzyme', () => {
  const weatherFake = require('./helpers/stub.json');
  const wrapper = shallow(<WeatherCards weather={objectCleaner(weatherFake)} />);

  it('Should have a current weather object', () => {
    const currentProps = wrapper.find('CurrentWeather').props();
    expect(currentProps).to.have.property('city', 'Denver');
    expect(currentProps).to.have.property('state', 'CO');
    expect(currentProps).to.have.property('currentTemp', 30.7);
    expect(currentProps).to.have.property('high', '33');
    expect(currentProps).to.have.property('low', '20');
    expect(currentProps).to.have.property('description');
    expect(currentProps).to.have.property('icon');
  });

  it('Should have a current date component', () => {
    const dateProps = wrapper.find('.today-hourly').props().children[0].props;

    expect(dateProps).to.have.property('weekday', 'Thursday');
    expect(dateProps).to.have.property('month', 'February');
    expect(dateProps).to.have.property('date', 23);
  });

  it('Should have an hourly forecast', () => {
    const hourlyProps = wrapper.props().children[1].props.children[1].props.children;

    hourlyProps.forEach((value, index) => {
      expect(hourlyProps[index].props).to.have.property('time');
      expect(hourlyProps[index].props).to.have.property('temp');
      expect(hourlyProps[index].props).to.have.property('icon');
    });
  });

  it('Should have a ten day forecast', () => {
    const tenDayProps = wrapper.props().children[2].props.children[1].props.children;

    tenDayProps.forEach((value, index) => {
      expect(tenDayProps[index].props).to.have.property('day');
      expect(tenDayProps[index].props).to.have.property('icon');
      expect(tenDayProps[index].props).to.have.property('high');
      expect(tenDayProps[index].props).to.have.property('low');
    });
  });
});
