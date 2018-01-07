import React from 'react';
import ScrollAnim from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';

import Fast from './images/fast.png';
import Safe from './images/safe.png';
import Convenient from './images/convenient.png';
import Reliable from './images/reliable.png';

import './index.scss';

const ScrollOverPack = ScrollAnim.OverPack;

class Provide extends React.PureComponent {
  getBlockChildren = (item, i) => (
    <li key={i} id={`${this.props.id}-block${i}`}>
      { i !== 0 ? <div className="segmenting-line" /> : null }
      <div className="icon">
        <img src={item.icon} width="100%" alt="" />
      </div>
      <h3>{item.title}</h3>
    </li>
    );
  render() {
    const dataSource = [
      { icon: Fast, title: 'Fast' },
      { icon: Safe, title: 'Safe' },
      { icon: Convenient, title: 'Convenient' },
      { icon: Reliable, title: 'Reliable' },
    ];
    const listChildren = dataSource.map(this.getBlockChildren);
    return (
      <div id="provide" className="provide-wrapper">
        <ScrollOverPack className="provide-container" location="provide">
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={300}
          >
            Smart Cash Provides
            <div style={{ fontSize: 0 }}>
              <span className="left-color" key="divspanleft" />
              <span className="right-color" key="divspanright" />
            </div>
          </TweenOne>
          <QueueAnim
            component="ul" type="bottom" key="block" leaveReverse
            id="provide-contentWrapper"
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
export default Provide;
