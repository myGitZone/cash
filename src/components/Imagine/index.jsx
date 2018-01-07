import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';

import Apply from './images/apply.png';
import Checking from './images/checking.png';
import Money from './images/money.png';

import './index.scss';

const ScrollOverPack = ScrollAnim.OverPack;

class Imagine extends React.PureComponent {
  getBlockChildren = (item, i) => (
    <li key={i} id={`${this.props.id}-block${i}`}>
      {i !== 0 ? <div className="segmenting-line" /> : null}
      <div className="icon">
        <img src={item.icon} width="100%" alt="" />
      </div>
      <h3>{item.title}</h3>
    </li>
  );
  render() {
    const dataSource = [
      { icon: Apply, title: 'Online Apply' },
      { icon: Checking, title: 'Online Checking' },
      { icon: Money, title: 'Get Money' },
    ];
    const listChildren = dataSource.map(this.getBlockChildren);
    return (
      <div id="imagine" className="imagine-wrapper">
        <ScrollOverPack className="imagine-container" location="imagine">
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={300}
          >
            As Easy As You Can Imagine
            <div style={{ fontSize: 0 }}>
              <span className="left-color" key="divspanleft" />
              <span className="right-color" key="divspanright" />
            </div>
          </TweenOne>
          <QueueAnim
            component="ul" type="bottom" key="block" leaveReverse
            id="imagine-contentWrapper"
          >
            {listChildren}
          </QueueAnim>
          <TweenOne key="tweenone" animation={{ y: '+=30', opacity: 0, type: 'from' }} component="div" className="btn-container">
            <Button className="apply-now-btn" type="primary">Apply Now</Button>
          </TweenOne>
        </ScrollOverPack>
      </div>
    );
  }
}
export default Imagine;
