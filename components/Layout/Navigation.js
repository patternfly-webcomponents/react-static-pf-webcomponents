import React from 'react';
import Link from '../Link';
import history from '../../core/history';
import PfBreakpoints from './PfBreakpoints';
import PfVerticalNavigation from './PfVerticalNavigation';

class Navigation extends React.Component {

  componentDidMount() {
    // Initialize the vertical navigation
    $().setupVerticalNavigation(true);
  }

  render() {
    let location = history.getCurrentLocation();
    let homeRoutes = ['/', '/home', '/stages'];
    return (
      <div className="nav-pf-vertical">
        <ul className="list-group">
          <li className={"list-group-item secondary-nav-item-pf" + (homeRoutes.indexOf(location.pathname) >= 0 ? ' active' : '')}
              data-target="#ipsum-secondary">
            <a>
              <span className="fa fa-dashboard" data-toggle="tooltip"></span>
              <span className="list-group-item-value">Overview</span>
            </a>
            <div id="-secondary" className="nav-pf-secondary-nav">
              <div className="nav-item-pf-header">
                <a className="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
                <span>Overview</span>
              </div>
              <ul className="list-group">
                <li className={"list-group-item " + (location.pathname == '/home' || location.pathname == '/' ? ' active' : '')}>
                  <Link to="/home">
                    <span className="list-group-item-value">Projects</span>
                  </Link>
                </li>
                <li className={"list-group-item " + (location.pathname == '/stages' ? ' active' : '')}>
                  <Link to="/stages">
                    <span className="list-group-item-value">Stages</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={"list-group-item" + (location.pathname == '/apps' ? ' active' : '')}>
            <Link to="/apps">
              <span className="fa fa-shield" data-toggle="tooltip" title="Apps"></span>
              <span className="list-group-item-value">Apps</span>
            </Link>
          </li>
          <li className={"list-group-item" + (location.pathname == '/users' ? ' active' : '')}>
            <Link to="/users">
              <span className="fa fa-users" data-toggle="tooltip" title="Users"></span>
              <span className="list-group-item-value">Users</span>
            </Link>
          </li>
          <li className={"list-group-item" + (location.pathname == '/groups' ? ' active' : '')}>
            <Link to="/groups">
              <span className="fa fa-space-shuttle" data-toggle="tooltip" title="Groups"></span>
              <span className="list-group-item-value">Groups</span>
            </Link>
          </li>
          <li className={"list-group-item" + (location.pathname == '/environments' ? ' active' : '')}>
            <Link to="/environments">
              <span className="fa fa-paper-plane" data-toggle="tooltip" title="Environments"></span>
              <span className="list-group-item-value">Environments</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }

}

export default Navigation;
