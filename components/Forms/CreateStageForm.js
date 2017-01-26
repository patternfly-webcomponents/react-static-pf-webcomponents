import React, { PropTypes } from 'react';
import { Tooltip } from 'react-patternfly-shims';

class CreateStageForm extends React.Component {
  state = {
    newStage: {}
  };

  static propTypes = {
    handleSubmit: React.PropTypes.func
  };

  handleSubmit = (event) => {
    this.props.handleSubmit(event);
  };

  handleChange = (e, prop) => {
    let o = Object.assign({}, this.state.newStage);
    o[prop] = e.target.value;
    this.setState({newStage: o});
  };

  render(){
    return (
      <form role="form">
        <div className="form-group">
          <label htmlFor="exampleInputName">Stage Name</label>
          <input type="text" className="form-control" id="exampleInputName" value={this.state.newStage.name}
                 onChange={(e) => { this.handleChange(e,'name')}}/>
        </div>
        <div className="form-group">
          <Tooltip placement="right" targetSelector="#stageDescriptionLabel">
            A stage description.
          </Tooltip>
          <label id="stageDescriptionLabel" htmlFor="exampleInputDescription">Stage Description</label>
          <input type="text" className="form-control" id="exampleInputDescription" value={this.state.newStage.description}
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
        <Tooltip placement="right" targetSelector="#cancelStageButton">
          Note: All inputs will be lost if not saved.
        </Tooltip>
        <button id="cancelStageButton" type="submit" className="btn btn-default" onClick={this.handleSubmit}>Cancel</button>
        &nbsp;&nbsp;
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}
export default CreateStageForm;