import React from 'react';

import Scan from './images/scan.png';
import Phone from './images/phone.png';

import './index.scss';

class ScanUs extends React.PureComponent {
  render() {
    return (
      <div className="scan-us">
        <div className="scan-container">
          <span>Scan us</span>
          <img width={109} height={109} src={Scan} alt="" />
        </div>
        <div className="scan-container">
          <img src={Phone} alt="" />
          <div className="phone-container">
            <div>13121759575</div>
            <div>17718469187</div>
          </div>
        </div>
      </div>
    );
  }
}
export default ScanUs;
