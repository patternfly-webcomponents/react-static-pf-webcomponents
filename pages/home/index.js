import React from 'react';
import Layout from '../../components/Layout';
import CreateProjectForm from '../../components/Forms/CreateProjectForm';
import CreateStageForm from '../../components/Forms/CreateStageForm';
import constants from '../../core/constants';

// React extensions
import { Alert, Tab, Tabs } from 'react-patternfly-shims';

class HomePage extends React.Component {

  state = {
    showSuccess: false,
  };

  componentDidMount() {
    document.title = 'Patternfly React Boiler | Home';
    document.body.style.backgroundColor = constants.bg_white;
  }

  handleSubmitProject(event) {
    this.setState({ showSuccess: !this.state.showSuccess });
    event.preventDefault();
  }

  handleSubmitStage(event) {
    this.setState({ showError: !this.state.showError });
    event.preventDefault();
  }

  render() {
    return (
      <Layout className="container-fluid container-pf-nav-pf-vertical" nav>
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
              <Tab tabTitle="Create Project">
                {this.state.showSuccess &&
                  <Alert type="success" persistent="true">
                    <strong>Great job!</strong> This is really working out great for us.
                  </Alert>
                }
                <CreateProjectForm handleSubmit={this.handleSubmitProject.bind(this)}/>
              </Tab>
              <Tab tabTitle="Create Stage">
                {this.state.showError &&
                  <Alert type="danger" persistent="true">
                    <strong>Hey there is a problem!</strong> Yeah this is really messed up and you should know about it.
                  </Alert>
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
