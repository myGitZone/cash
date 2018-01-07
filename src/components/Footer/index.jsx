import React from 'react';

import Credit from './images/credit.jpg';
import NetPolice from './images/netpolice.jpg';
import Police from './images/police.jpg';
import Record from './images/record.jpg';
import Safe from './images/safe.jpg';

import './index.scss';

class Footer extends React.PureComponent {
  render() {
    return (
      <div className="smart-footer">
        <img className="first-img" src={Credit} alt="" />
        <img className="second-img" src={NetPolice} alt="" />
        <img className="third-img" src={Police} alt="" />
        <img className="fouth-img" src={Record} alt="" />
        <img className="fifth-img" src={Safe} alt="" />
      </div>
    );
  }
}
export default Footer;
