import * as React from 'react';
import Head from '../components/head';
import Header from '../components/header/index';
import HomeCarousel from '../components/home/home-carousel/index';
import HomeFixFooter from '../components/home/home-fix-foot/index';
import HomeCoupon from '../components/home/home-coupon/index';
import HomeCarType from '../components/home/home-car-type/index';
import HomeFeatureService from '../components/home/home-feature-service/index';
import HomeVendorWall from '../components/home/home-vdndor-wall/index';
import { navData, carouselData, recommendcarType, fsList, vendorList } from '../datas/home';
import './style.less';
import { IndexProps } from '../model/home/index';

function getHomeData() {
  return new Promise(resolve => {
    // wait 3s before calling fn(par)
    setTimeout(() => resolve({ navData, carouselData, recommendcarType, fsList, vendorList }), 200);
  });
}

class Index extends React.Component<IndexProps> {
  public static async getInitialProps() {
    const homeData = await getHomeData();
    return { ...homeData };
  }

  public render() {
    return (
      <div className="home">
        <Head title="HZC" />
        <Header navData={this.props.navData} />
        <HomeFixFooter />
        <HomeCarousel data={this.props.carouselData} />
        <HomeCoupon />
        <HomeCarType data={this.props.recommendcarType} />
        <HomeFeatureService data={this.props.fsList} />
        <HomeVendorWall data={this.props.vendorList} />
      </div>
    );
  }
}

export default Index;
