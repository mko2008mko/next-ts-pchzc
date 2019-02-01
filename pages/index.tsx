import * as React from 'react';
import Layout from '../components/Layout';
import HomeCarousel from '../components/home/home-carousel/index';
import HomeFixFooter from '../components/home/home-fix-foot/index';
import HomeCoupon from '../components/home/home-coupon/index';
import HomeCarType from '../components/home/home-car-type/index';
import HomeFeatureService from '../components/home/home-feature-service/index';
import HomeVendorWall from '../components/home/home-vdndor-wall/index';
import HomeUserSare from '../components/home/home-user-share/index';
import HomeSuspend from '../components/home/home-suspend/index';
import HomeTripNeed from '../components/home/home-trip-need/index';
import {
  navData,
  carouselData,
  recommendcarType,
  fsList,
  vendorList,
  userShareList,
  tripNeedList
} from '../datas/home';
import './style.less';
import { IndexProps } from '../model/home/index';

function getHomeData() {
  return new Promise(resolve => {
    // wait 3s before calling fn(par)
    setTimeout(
      () => resolve({ navData, carouselData, recommendcarType, fsList, vendorList, userShareList, tripNeedList }),
      200
    );
  });
}

class Index extends React.Component<IndexProps> {
  public static async getInitialProps({ pathname }) {
    const homeData = await getHomeData();
    return { ...homeData, pathname };
  }

  public render() {
    return (
      <Layout title="Hzc" navData={this.props.navData} pathname={this.props.pathname}>
        <div className="home">
          <HomeFixFooter />
          <HomeCarousel data={this.props.carouselData} />
          <HomeCoupon />
          <HomeCarType data={this.props.recommendcarType} />
          <HomeFeatureService data={this.props.fsList} />
          <HomeVendorWall data={this.props.vendorList} />
          <HomeUserSare data={this.props.userShareList} />
          <HomeSuspend />
          <HomeTripNeed data={this.props.tripNeedList} />
        </div>
      </Layout>
    );
  }
}

export default Index;
