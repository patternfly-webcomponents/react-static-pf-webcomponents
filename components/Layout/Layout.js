import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from './Header';
import Navigation from './Navigation';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    nav: PropTypes.bool,
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <Header/>
        {(() => {
          if (this.props.nav) {
            return <Navigation/>;
          }
        })()}
        <div className={cx(this.props.className)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
