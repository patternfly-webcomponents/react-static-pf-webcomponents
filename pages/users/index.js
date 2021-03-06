import React from 'react';
import Layout from '../../components/Layout';
import CardView from '../../components/CardView/CardView';
import constants from '../../core/constants';
import UsersApi from '../../data/UsersApi';

class UsersPage extends React.Component {

  state = { users: [] };

  componentWillMount() {
    this.getUsers();
  }

  componentDidMount() {
    document.title = 'Patternfly React Boiler | Users';
    document.body.style.backgroundColor = constants.bg_grey;
  }

  getUsers() {
    UsersApi.getUsers().then((data) => {
      this.setState({ users: data });
    }).catch(e => console.log(e));
  }

  render() {
    return (
      <Layout className="container-fluid container-pf-nav-pf-vertical" nav>
        <div className="page-header" key="users-page-header">
          <h2> Users</h2>
        </div>
        <CardView users={this.state.users}/>
      </Layout>
    );
  }
}

export default UsersPage;
