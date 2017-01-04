import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import CreateProjectForm from '../../components/Forms/CreateProjectForm';
import CreateStageForm from '../../components/Forms/CreateStageForm';
import constants from '../../core/constants';

//web components
import PfTabs from 'pf-tabs';
import PfAlert from 'pf-alert';

//React extensions
import Tab from 'Tab';
import Tabs from 'Tabs';

class HomePage extends React.Component {

  state = {
    showSuccess: false
  };

  componentDidMount() {
    document.title = 'Patternfly React Boiler | Home';
    document.body.style.backgroundColor = constants.bg_grey;
  }

  handleSubmitProject(event){
    this.setState({showSuccess: !this.state.showSuccess});
    event.preventDefault();
  }

  handleSubmitStage(event){
    this.setState({showError: !this.state.showError});
    event.preventDefault();
  }

  render() {
    return (
      <Layout className="container-fluid container-pf-nav-pf-vertical">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <h1>Projects</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Tabs>
              <Tab tabTitle="Create Project" active={true}>
                {this.state.showSuccess &&
                <pf-alert type="success">
                  <strong>Great job!</strong> This is really working out great for us.
                </pf-alert>
                }
                <CreateProjectForm handleSubmit={this.handleSubmitProject.bind(this)}/>
              </Tab>
              <Tab tabTitle="Create Stage">
                {this.state.showError &&
                <pf-alert type="danger">
                  <strong>Hey there is a problem!</strong> Yeah this is really messed up and you should know about it.
                </pf-alert>
                }
                <CreateStageForm handleSubmit={this.handleSubmitStage.bind(this)}/>
              </Tab>
            </Tabs>
          </div>
        </div>

      </Layout>
    );
  }

}

export default HomePage;
