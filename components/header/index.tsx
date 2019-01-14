import React from 'react';
import './style.less';
import HomeLogo from './components/home-head-logo';
import HeaderNav from './components/home-head-nav/index';
import AppDownLoad from './components/head-download-app';
import HeaderServicePhone from './components/head-service-phone';
import HeaderUserInfo from './components/header-userinfo';
import { INav } from '../../model/home/index';

interface IHeaderProps {
  navData: INav[];
}

const Header = (props: IHeaderProps) => (
  <header>
    <div className="sh-wrap">
      <HomeLogo />
      <HeaderNav navData={props.navData} />
      <AppDownLoad />
      <HeaderServicePhone />
      <HeaderUserInfo />
    </div>
  </header>
);

export default Header;
