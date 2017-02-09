import React from 'react';
import {shallow, mount, render } from 'enzyme';

//capture all errors and warnings in Jest mock functions
console.error = jest.genMockFunction();
console.warn = jest.genMockFunction();

const path = require('path');
const baseDir = __dirname + '/../../../';
const CreateProjectForm = require(path.resolve(baseDir + 'components/Forms/CreateProjectForm.js')).default;

describe('CreateProject Form test suite', () => {

  it('should set the project name when a value is passed to the component', () => {
    let handleSubmit = () => {};
    let value = { name: 'Test Project', description: 'We <3 Javascript'};

    const wrapper = mount(
      <CreateProjectForm handleSubmit={ handleSubmit } value={value}/>
    );
    
    expect(wrapper.find('#exampleInputName').html()).toEqual('<input type="text" class="form-control" id="exampleInputName" value="Test Project">');
    expect(wrapper.find('#exampleInputDescription').props().value).toEqual(value.description);
  });

});