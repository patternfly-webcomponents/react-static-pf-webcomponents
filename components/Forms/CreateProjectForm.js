import React, { PropTypes } from 'react';
import { Tooltip } from 'react-patternfly-shims';

class CreateProjectForm extends React.Component {
  state = {
    newProject: {}
  };

  static propTypes = {
    handleSubmit: React.PropTypes.func
  };

  handleSubmit = (event) => {
    this.props.handleSubmit(event);
  };

  handleChange = (e, prop) => {
    let o = Object.assign({}, this.state.newProject);
    o[prop] = e.target.value;
    this.setState({newProject: o});
  };

  render(){
    return (
      <form role="form">
        <div className="form-group">
          <label htmlFor="exampleInputName">Project Name</label>
          <input type="text" className="form-control" id="exampleInputName" value={this.state.newProject.name}
                 onChange={(e) => { this.handleChange(e,'name')}}/>
        </div>
        <div className="form-group">
          <Tooltip placement="right" targetSelector="#projectDescriptionLabel">
            A project description for Github.
          </Tooltip>
          <label id="projectDescriptionLabel" htmlFor="exampleInputDescription">Project Description <span id="descriptionTooltip"></span></label>
          <input type="text" className="form-control" id="exampleInputDescription" value={this.state.newProject.description}
                 onChange={(e) => { this.handleChange(e,'description')}}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFile">File input</label>
          <input type="file" id="exampleInputFile"/>
            <p className="help-block">Example block-level help text here.</p>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox"/>Check me out
          </label>
        </div>
        <Tooltip placement="right" targetSelector="#cancelProjectButton">
          Note: All inputs will be lost if not saved.
        </Tooltip>
        <button id="cancelProjectButton" type="submit" className="btn btn-default" onClick={this.handleSubmit}>Cancel</button>
        &nbsp;&nbsp;
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>

      </form>
    )
  }
}
export default CreateProjectForm;