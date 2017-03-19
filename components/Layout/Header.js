import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-pf-vertical">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a href="/" className="navbar-brand">
          <img className="navbar-brand-icon" src="/logo-alt.svg" alt=""/>
          <img className="navbar-brand-name" src="/brand-alt.svg" alt="PatternFly Enterprise Application"/>
        </a>
      </div>
      <nav className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li><a href="#" target="_blank" className="nav-item-iconic nav-item-iconic-new-window">
            <span title="Launch" className="fa fa-external-link"></span></a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right navbar-iconic">
          <li className="dropdown">
            <a className="dropdown-toggle nav-item-iconic"
              id="notifications" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span title="Notifications" className="fa pficon-flag"></span>
              <span className="badge">2</span>
            </a>
            <div className="dropdown-menu infotip bottom-right">
              <div className="arrow"></div>
              <ul className="list-group">
                <li className="list-group-item">
                  <span className="i pficon pficon-info"></span> Modified Datasources ExampleDS
                </li>
                <li className="list-group-item">
                  <span className="i pficon pficon-info"></span> Error: System Failure
                </li>
              </ul>
              <div className="footer">
                <a>Clear Messages</a>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle nav-item-iconic"
              id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span title="Help" className="fa pficon-help"></span>
              <span className="caret"></span>
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Help</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle nav-item-iconic"
              id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span title="Username" className="fa pficon-user"></span>
              <span className="caret"></span>
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li><a href="#">Preferences</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </nav>
  );
}

export default Header;
