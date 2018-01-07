import React from 'react';
import { connect } from 'dva';
import enquire from 'enquire.js';

import Nav from '../components/Nav';
import PicContent from '../components/PicContent';
import Provide from '../components/Provide';
import Imagine from '../components/Imagine';
import Scanus from '../components/Scanus';
import Footer from '../components/Footer'

import './IndexPage.css';

class IndexPage extends React.PureComponent {
  componentDidMount() {
    // 适配手机屏幕;

    this.enquireScreen((isMode) => {
      this.props.dispatch({
        type: 'global/isMode',
        payload: isMode,
      });
    });
  }

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  }

  render() {
    return (
      <div className="root-wrapper">
        <Nav />
        <PicContent />
        <Provide />
        <Imagine />
        <Scanus />
        <Footer />
      </div>
    );
  }
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
