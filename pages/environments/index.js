import React from 'react';
import Layout from '../../components/Layout';
import WizardView from '../../components/Wizard/WizardView';
import c from '../common.css';
import constants from '../../core/constants';

class EnvironmentsPage extends React.Component {

  state = { wizardView: false };

  componentDidMount() {
    document.title = 'Patternfly React Boiler | Environments';
    document.body.style.backgroundColor = constants.bg_white;
  }

  handleClick = () => {
    this.setState({ wizardView: true });
  };

  handleClose = () => {
    this.setState({ wizardView: false });
  };

  render() {
    return (
      <Layout className="container-fluid container-pf-nav-pf-vertical" nav>
        <div className="page-header" key="evironments-page-header">
          <h2> Environments</h2>
        </div>
        <div className={c.add_layout}>
          <div className={c.add_container}>
            <div className={c.add_button} onClick={this.handleClick}>
              <i className="fa fa-4x fa-plus-circle" aria-hidden="true"></i>
              <h3>Add environments</h3>
            </div>
          </div>
        </div>
        {this.state.wizardView &&
          <WizardView handleClose={this.handleClose.bind(this)}/>
        }
      </Layout>
    );
  }

}

export default EnvironmentsPage;
