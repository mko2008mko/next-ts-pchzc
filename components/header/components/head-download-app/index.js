import React from 'react';
import './style.less';

const AppDownload = () => (
  <div className="app-download">
    <i className="new-index-icon lt-line" style={{ display: 'none' }} />
    <span>APP</span>
    <div className="appd-combobox">
      <i className="combobox-line" />
      <img src="https://www.huizuche.com/QRCode/AppDownload" className="app-download-erweima" />
      <p>扫码下载APP</p>
    </div>
  </div>
);

export default AppDownload;
