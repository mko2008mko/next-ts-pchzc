import * as React from 'react';
import './style.less';

interface IHomeCouponStates {
  isShow: boolean;
}

class HomeCoupon extends React.Component<any, IHomeCouponStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      isShow: false
    };
  }

  public handleCouponClick = () => {
    this.setState({ isShow: true });
  };

  public handleCloseClick = () => {
    this.setState({ isShow: false });
  };

  public render() {
    const { isShow } = this.state;
    return (
      <div>
        <i className={isShow ? 'show-coupon hidecoupon' : 'show-coupon'} onClick={this.handleCouponClick} />
        {isShow ? (
          <section className="get-coupon-popup">
            <div className="coupon-content">
              <div className="coupon-list">
                <div className="coupon-list-title">
                  <h3>新人海外自驾大礼包 </h3>
                  <span>注册即赠百元租车立减券</span>
                </div>
                <ul>
                  <li>
                    <div className="coupon-info">
                      <h6>满3000减100元抵用券</h6>
                      <p>有效期：2019-01-07 至 2019-02-06</p>
                      <span>海外自驾100元优惠券</span>
                    </div>
                    <div className="discount">
                      100<em>元</em>
                    </div>
                  </li>
                  <li>
                    <div className="coupon-info">
                      <h6>首单满500减50优惠券</h6>
                      <p>有效期：2019-01-07 至 2019-01-22</p>
                      <span>新人首单50元优惠券</span>
                    </div>
                    <div className="discount">
                      50<em>元</em>
                    </div>
                  </li>
                </ul>
              </div>
              <i className="close-icon" id="closeCouponList" onClick={this.handleCloseClick} />
              <span className="title-bg" />
              <div className="line-style" />
              <div className="get-coupon-btn">
                <span id="getAllCoupon">限时领券（1月9日截止）</span>
              </div>
              <div className="how-look-coupon">您可以在“个人中心”-“优惠券”中查看已领取的优惠券</div>
            </div>
          </section>
        ) : null}
      </div>
    );
  }
}

export default HomeCoupon;
