import React from 'react';
import ReactDOM from 'react-dom';
import TestHook from '../test_hook.js';
import App from '../../../App'

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })



it('Text in state is changed when button clicked', () => {
    const wrapper = mount(<TestHook />)
    //console.log(wrapper.debug());
    const test_state = wrapper.find(`[data-test="test_state"]`);
    //console.log(test_state.debug());
    expect(test_state.text()).toBe("Initial State");

    //Simulate button click
    const test_button = wrapper.find(`[data-test="state_button"]`);
    test_button.simulate('click');
    expect(test_state.text()).toBe("Initial State Changed");
});