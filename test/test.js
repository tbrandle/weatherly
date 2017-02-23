import {expect} from 'chai';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Main from '../lib/Components/Main';


describe('testing with enzyme', () => {
  
  it('should have a component called GroceryList', () => {
   const wrapper = shallow(<Main/>);
   expect(wrapper.find('GroceryList')).to.have.length(1);
  });

  it('GroceryList should have RenderList inside of it as a component', () => {
   const wrapper = shallow(<GroceryList/>);
   expect(wrapper.find('RenderList')).to.have.length(1);
  });

})
