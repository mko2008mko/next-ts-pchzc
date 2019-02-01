import * as React from 'react';
// import Link from 'next/link';
import Head from './head';
import Header from './header/index';
import { INav } from '../model/home/index';

interface IProps {
  title?: string;
  navData: INav[];
  children: any;
  pathname: string;
}
const Layout = ({ children, title = 'This is the default title', navData, pathname }: IProps) => (
  // const Layout: React.FunctionComponent<IProps> = ({ children, title = 'This is the default title', navData }) => (
  <div>
    <Head title={title} />
    <Header navData={navData} pathname={pathname} />

    {children}
  </div>
);

export default Layout;
