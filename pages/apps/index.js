import React from 'react';
import Layout from '../../components/Layout';
import AppListView from '../../components/ListView/AppListView';
import constants from '../../core/constants';

class AppsPage extends React.Component {

  state = { apps: [] };

  componentWillMount() {
    this.getApps();
  }

  componentDidMount() {
    document.title = 'Patternfly React Boiler | Apps';
    document.body.style.backgroundColor = constants.bg_grey;
  }

  getApps() {
    const that = this;
    fetch(constants.get_apps_url).then(r => r.json())
      .then(data => {
        that.setState({ apps: data });
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <Layout className="container-fluid container-pf-nav-pf-vertical" nav>
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <h1>Apps</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <AppListView apps={this.state.apps}/>
          </div>
        </div>
      </Layout>
    );
  }

}

export default AppsPage;
