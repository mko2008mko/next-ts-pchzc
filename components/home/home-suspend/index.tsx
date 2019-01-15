import * as React from 'react';
import './style.less';
import { CSSTransition } from 'react-transition-group';

interface IHomeSuspendStates {
  spsSqIsHover: boolean;
  spsCallIsHover: boolean;
  spsCodeIsHover: boolean;
}

export default class HomeSuspend extends React.Component<any, IHomeSuspendStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      spsSqIsHover: false,
      spsCallIsHover: false,
      spsCodeIsHover: false
    };
  }

  public handleOnMouseEnter = (index: number) => {
    switch (index) {
      case 1:
        this.setState({ spsSqIsHover: true });
        break;
      case 2:
        this.setState({ spsCallIsHover: true });
        break;
      case 3:
        this.setState({ spsCodeIsHover: true });
        break;
      default:
        break;
    }
  };

  public handleOnMouseLeave = (index: number) => {
    switch (index) {
      case 1:
        this.setState({ spsSqIsHover: false });
        break;
      case 2:
        this.setState({ spsCallIsHover: false });
        break;
      case 3:
        this.setState({ spsCodeIsHover: false });
        break;
      default:
        break;
    }
  };

  public render() {
    const { spsSqIsHover, spsCallIsHover, spsCodeIsHover } = this.state;
    return (
      <div id="suspend">
        <div id="popup">
          <CSSTransition classNames="sfade" timeout={200} in={spsSqIsHover} unmountOnExit={true}>
            <div className="spsSq-popup" style={{ left: '-198px' }}>
              <p>解答您的租车疑问</p>
            </div>
          </CSSTransition>
          {spsCallIsHover ? (
            <div className="spsCall-popup" style={{ left: '-198px' }}>
              <p>中国大陆 4001-888-820</p>
              <p>海外 +86-21-61514888</p>
            </div>
          ) : null}
          {spsCodeIsHover ? (
            <div className="spsCode-popup" style={{ left: '-198px' }}>
              <p>
                专属VIP租车顾问
                <br />
                <span>更多额外优惠</span>
                <span>尽在微信公众号</span>
              </p>
              <img src="https://www.huizuche.com/Content/Images/suspend/P-wechat.png?v=201701026" />
            </div>
          ) : null}
        </div>

        <div className="sps-wrap">
          <div
            id="spsSq"
            onMouseEnter={this.handleOnMouseEnter.bind(this, 1)}
            onMouseLeave={this.handleOnMouseLeave.bind(this, 1)}
          >
            <div className="sps-sq" />
            <p>在线</p>
            <p>咨询</p>
          </div>
          <div
            id="spsCall"
            onMouseEnter={this.handleOnMouseEnter.bind(this, 2)}
            onMouseLeave={this.handleOnMouseLeave.bind(this, 2)}
          >
            <div className="sps-call" />
            <p>电话</p>
            <p>咨询</p>
          </div>
          <div
            id="spsCode"
            onMouseEnter={this.handleOnMouseEnter.bind(this, 3)}
            onMouseLeave={this.handleOnMouseLeave.bind(this, 3)}
          >
            <div className="sps-code" />
            <p>微信</p>
            <p>咨询</p>
          </div>
        </div>
      </div>
    );
  }
}
