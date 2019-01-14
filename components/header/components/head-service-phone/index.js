import React from 'react';
import './style.less';

const HeaderServicePhone = () => (
  <div className="service-phone">
    <i className="new-index-icon lt-line" />
    <i className="new-index-icon rt-line" />
    <div className="sp-cont">
      <span>7*24h</span>
      <i className="new-index-icon phone" />
    </div>
    <div className="sp-combobox">
      <i className="combobox-line" />
      <div className="phone-list">
        <p>中国大陆 4001-888-820</p>
        <p>海外 +86-21-61514888</p>
      </div>
      <div className="code-list">
        <span>
          <i>专属VIP租车顾问</i>
          <b>更多额外优惠</b>
          <b>尽在微信公众号</b>
          <img src="https://www.huizuche.com/Content/Images/suspend/P-wechat.png?v=201701026" />
        </span>
      </div>
      <div className="service-inline">
        <span className="new-index-icon si-btn">在线客服</span>
      </div>
    </div>
  </div>
);

export default HeaderServicePhone;
