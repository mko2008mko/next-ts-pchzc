import React from 'react';
import Layout from '../components/Layout';
import { navData } from '../datas/home';

const Zhuanche = (props: any) => (
  <Layout title="HZC ZHUANCHE" navData={navData} pathname={props.url.pathname}>
    <div>zhuanche page</div>
  </Layout>
);

// class Zhuanche extends React.Component<any> {
//   public render() {
//     return (
//       <Layout title="HZC ZHUANCHE" navData={navData} pathname={this.props.url.pathname}>
//         <div>zhuanche page</div>
//       </Layout>
//     );
//   }
// }

export default Zhuanche;
