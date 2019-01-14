import React from 'react';
import './style.less';

const HeaderUserInfo = () => (
  <div className="user-info">
    <i className="new-index-icon lt-line" />
    <i className="new-index-icon rt-line" />
    <div className="no-login">
      <a href="/Account/regist?ReturnUrl=https://www.huizuche.com/" id="btnRegist" className="JsBtnRegist btn_regist">
        注册
      </a>
      /
      <a id="btnLogin" className="JsLoginBtn btn_regist" href="/Account/login">
        登录
      </a>
      <span className="gift-icon">
        <img src="https://www.huizuche.com/Content/Images/index/indexnew/gift.png" />
      </span>
    </div>
  </div>
);

export default HeaderUserInfo;
