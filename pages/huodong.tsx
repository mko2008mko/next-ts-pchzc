import React from 'react';
import Layout from '../components/Layout';
import { navData } from '../datas/home';

const Huodong = (props: any) => (
  <Layout title="Huodong" navData={navData} pathname={props.url.pathname}>
    <div>Huodong page</div>
  </Layout>
);

export default Huodong;
