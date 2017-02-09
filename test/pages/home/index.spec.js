import React from 'react';
import {shallow, mount, render } from 'enzyme';

//capture all errors and warnings in Jest mock functions
console.error = jest.genMockFunction();
console.warn = jest.genMockFunction();


const path = require('path');
const baseDir = __dirname + '/../../../';
const HomePage = require(path.resolve(baseDir + 'pages/home/index.js')).default;

describe('Home Page test suite', () => {

  it('should show the pf-alert component when showSuccess is true', () => {

    const wrapper = mount(
      <HomePage/>
    );

    wrapper.setState({showSuccess: true});
    
    expect(wrapper.find('pf-alert').length).toBe(1);
    expect(wrapper.find('pf-alert').html()).toEqual('<pf-alert type="success" persistent="true"><strong>Great job!</strong><!-- react-text: 138 --> This is really working out great for us.<!-- /react-text --></pf-alert>');

  });

  it('should NOT show the pf-alert component when showSuccess is false', () => {

    const wrapper = mount(
      <HomePage/>
    );

    wrapper.setState({showSuccess: false});

    expect(wrapper.find('pf-alert').length).toBe(0);
  });

});