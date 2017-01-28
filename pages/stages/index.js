import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import EmptyState from '../../components/EmptyState/EmptyState';
import constants from '../../core/constants';

class StagesPage extends React.Component {

  componentDidMount() {
    document.title = 'Patternfly React Boiler | Stages';
    document.body.style.backgroundColor = constants.bg_grey;
  }

  render() {
    return (
      <Layout className="container-fluid container-pf-nav-pf-vertical" nav= { true }>
        <EmptyState title="Stages"/>
      </Layout>
    );
  }

}

export default StagesPage;
