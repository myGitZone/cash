import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { connect } from 'dva';
import logo from '../../assets/images/logo.png';

import './index.scss';

const Item = Menu.Item;

@connect(state => ({
  isMode: state.global.isMode,
}))
class Nav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };
    this.phoneClick = this.phoneClick.bind(this);
  }
  phoneClick() {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }
  render() {
    const isMode = this.props.isMode;
    const navData = { home: 'HOME', aboutus: 'ABOUT US' };
    const navChildren = Object.keys(navData)
      .map((key, i) => (<Item key={i}>{navData[key]}</Item>));
    return (
      <TweenOne
        component="header"
        id="nav"
        className="nav-header"
        animation={{ opacity: 0, type: 'from' }}
      >
        <TweenOne
          className="nav-logo"
          animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
        >
          <img src={logo} alt="未加载" />
        </TweenOne>
        {
          isMode ? (<div className={`header-phone-nav${this.state.phoneOpen ? ' open' : ''}`}>
            <div
              className="header-phone-nav-bar"
              onClick={this.phoneClick}
            >
              <em />
              <em />
              <em />
            </div>
            <div className="header-phone-nav-text">
              <Menu
                defaultSelectedKeys={['0']}
                mode="inline"
              >
                {navChildren}
              </Menu>
            </div>
          </div>) : (<TweenOne
            className="header-nav"
            animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
          >
            <Menu
              mode="horizontal" defaultSelectedKeys={['0']}
              id="nav-menu"
            >
              {navChildren}
            </Menu>
          </TweenOne>)
        }
      </TweenOne>
    );
  }
}

export default Nav;
