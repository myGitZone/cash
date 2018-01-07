import React from 'react';
import { connect } from 'dva';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';

import './index.scss';

const ScrollOverPack = ScrollAnim.OverPack;

@connect(state => ({
  isMode: state.global.isMode,
}))
class PicContent extends React.PureComponent {
  render() {
    return (
      <ScrollOverPack
        replay
        playScale={[0.8, 0.1]}
        id="pic-content"
      >
        <QueueAnim
          type={['bottom', 'top']}
          key="queueAnim"
        >
          <div
            className={this.props.isMode ? 'pic-content-phone-wrapper' : 'pic-content-wrapper'}
            key="pic-content-wrapper"
          >
            <div className="wrapper-title">
              GET IT NOW
           </div>
            <div className="btn-container">
              <Button className="sign-in-btn" type="primary">Sign in</Button>
            </div>
            <div className="btn-container">
              <Button className="login-btn" type="primary">Login</Button>
            </div>
          </div>
        </QueueAnim>
      </ScrollOverPack>
    );
  }
}
export default PicContent;
