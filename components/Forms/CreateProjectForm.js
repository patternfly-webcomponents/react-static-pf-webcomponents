import React, { PropTypes } from 'react';

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
          <label htmlFor="exampleInputDescription">Project Description</label>
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
        <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}
export default CreateProjectForm;