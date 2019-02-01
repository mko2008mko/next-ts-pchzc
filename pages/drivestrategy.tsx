import React from 'react';
import Layout from '../components/Layout';
import { navData } from '../datas/home';

const Drivestrategy = (props:any) => (
    <Layout title="Drivestrategy" navData={navData} pathname={props.url.pathname}>
    <div>Drivestrategy page</div>
  </Layout>
);

export default Drivestrategy;
