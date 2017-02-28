import { expect } from 'chai';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Main from '../lib/Components/Main';
import Weatherly from '../lib/Components/Weatherly';
import WeatherCards from '../lib/Components/WeatherCards';
import objectCleaner from '../lib/Components/ObjectCleaner';
import sinon from 'sinon';

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

  it('Weatherly should run submitLocation function on click', () => {
    const wrapper = shallow(<Weatherly />);

    const instance = wrapper.instance();
    sinon.spy(instance, 'submitLocation');

    wrapper.find('.location').simulate('change', {
      target: { value: 'englewood' },
    });
    wrapper.find('.submit').simulate('click');
    expect(instance.submitLocation.calledOnce).to.equal(true);
  });
});

describe('ObjectCleaner testing in enzyme', () => {
  const weatherFake = require('./helpers/stub.json');
  const wrapper = shallow(<WeatherCards weather={ objectCleaner(weatherFake) } />);

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
    const dateProps = wrapper.find('Hourly').props().dateObject;
    expect(dateProps).to.have.property('weekday', 'Thursday');
    expect(dateProps).to.have.property('month', 'February');
    expect(dateProps).to.have.property('date', 23);
  });

  it('Should have an hourly forecast', () => {
    const hourlyProps = wrapper.find('Hourly').props().hourlyArray;
    hourlyProps.forEach((value, index) => {
      expect(hourlyProps[index]).to.have.property('time');
      expect(hourlyProps[index]).to.have.property('temp');
      expect(hourlyProps[index]).to.have.property('icon');
    });
  });

  it('Hourly array should have a length of 7', () => {
    const hourlyProps = wrapper.find('Hourly').props().hourlyArray;
    expect(hourlyProps).to.have.length(7);
  });

  it('Ten day array should have a length of 10', () => {
    const tenDayProps = wrapper.find('TenDay').props().tenDayArray;
    expect(tenDayProps).to.have.length(10);
  });

  it('Should have a ten day forecast', () => {
    const tenDayProps = wrapper.find('TenDay').props().tenDayArray;
    tenDayProps.forEach((value, index) => {
      expect(tenDayProps[index]).to.have.property('day');
      expect(tenDayProps[index]).to.have.property('icon');
      expect(tenDayProps[index]).to.have.property('high');
      expect(tenDayProps[index]).to.have.property('low');
    });
  });
});
