import * as React from 'react';
import './style.less';

interface IHomeFixFooterStates {
  adIsShow: boolean;
  style1: any;
  style2: any;
}
class HomeFixFooter extends React.Component<any, IHomeFixFooterStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      adIsShow: true,
      style1: { transitionDelay: '500ms' },
      style2: { transitionDelay: '0ms' }
    };
  }

  public handleAdHide = () => {
    this.setState({ adIsShow: false, style1: { transitionDelay: '500ms' }, style2: { transitionDelay: '0ms' } });
  };

  public handleAdSHow = () => {
    this.setState({ adIsShow: true, style2: { transitionDelay: '500ms' }, style1: { transitionDelay: '0ms' } });
  };

  public render() {
    const { style1, style2, adIsShow } = this.state;
    return (
      <div>
        <section
          className={adIsShow ? 'advert_mini' : 'advert_mini advert_mini_xianshi'}
          onClick={this.handleAdSHow}
          style={style1}
        >
          <img src="https://cdn-qiniu-activity1.huizuche.com/PCIDLxiaotu.png" alt="暑期海外出行全场62折" />
        </section>
        <section className={adIsShow ? 'advert_bottom' : 'advert_bottom advert_bottom_hide'} style={style2}>
          <div className="da_cont">
            <div
              style={{
                backgroundImage: `url(https://cdn-aliyun-hzccontent.huizuche.com/IDLtonglan1.12.jpg)`,
                backgroundPosition: 'center',
                height: '120px'
              }}
            >
              <div className="fiex_box">
                <a
                  href="http://www.huizuche.com/promotion/CDL?tabsel=3?keywords=1yw_2lunbo_3cdl_4_5pc"
                  target="_blank"
                />
                <i className="ad_hide" style={{ left: '1200px' }} onClick={this.handleAdHide} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeFixFooter;
