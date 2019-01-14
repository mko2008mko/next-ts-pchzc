import * as React from 'react';
import './style.less';
import { IUserShare } from '../../../model/home/index';
import UserShareItem from './components/user-share-item/index';

interface IHomeUserSareProps {
  data: IUserShare[];
}

interface IHomeUserSareStates {
  leftDisable: boolean;
  rightDisable: boolean;
  ulStyle: IUlStyle;
}

interface IUlStyle {
  left: string;
  width: string;
}

export default class HomeUserSare extends React.Component<IHomeUserSareProps, IHomeUserSareStates> {
  constructor(props: IHomeUserSareProps) {
    super(props);
    this.state = {
      leftDisable: true,
      rightDisable: false,
      ulStyle: {
        left: '0px',
        width: Math.ceil(this.props.data.length / 3) * 1224 + 'px'
      }
    };
  }

  public handleLeftClick = () => {
    const { ulStyle } = this.state;
    let currLeft = parseInt(ulStyle.left, 10);
    this.setState({ rightDisable: false });
    if (currLeft >= 0) {
      this.setState({ leftDisable: true });
      // this.leftDisable = true;
    } else {
      currLeft += 1224;
      // ulStyle.left = currLeft + 'px';
      this.setState({
        leftDisable: false,
        ulStyle: {
          left: currLeft + 'px',
          width: ulStyle.width
        }
      });
      // this.leftDisable = false;

      // this.ulStyle.left = currLeft + 'px';
      if (currLeft >= 0) {
        this.setState({
          leftDisable: true
        });
        // this.leftDisable = true;
      }
    }
  };

  public handleRightClick = () => {
    const { ulStyle } = this.state;
    let currLeft = parseInt(ulStyle.left, 10);
    const lastLeft = parseInt(ulStyle.width, 10) - 1224;
    this.setState({ leftDisable: false });
    // this.leftDisable = false;
    if (currLeft > -lastLeft) {
      // this.rightDisable = false;
      currLeft -= 1224;
      // this.ulStyle.left = currLeft + 'px';
      this.setState({
        rightDisable: false,
        ulStyle: {
          left: currLeft + 'px',
          width: ulStyle.width
        }
      });
      if (currLeft <= -lastLeft) {
        this.setState({
          rightDisable: true
        });
        // this.rightDisable = true;
      }
    }
  };

  public render() {
    const { data } = this.props;
    const { leftDisable, rightDisable, ulStyle } = this.state;
    return (
      <section className="user-share">
        <div className="user-wrap">
          <div className="user-tab">
            <h3>
              用户分享
              <small>百万+</small>
            </h3>
            {/* <ul className="tab-item">

        </ul> */}
            <span className="all-share">
              <a href="/Comment/list" target="_blank">
                全部&gt;
              </a>
            </span>
          </div>
          <div className="us-list-box">
            <span
              className={
                leftDisable ? 'new-index-icon previous us-prev leftdisable' : 'new-index-icon previous us-prev'
              }
              style={{ left: '-64px' }}
              onClick={this.handleLeftClick}
            />
            <span
              className={rightDisable ? 'new-index-icon next us-next rightdisable' : 'new-index-icon next us-next'}
              style={{ right: '-88px' }}
              onClick={this.handleRightClick}
            />
            <div className="us-list-cont">
              <ul className="us-list" style={ulStyle}>
                {data.length ? data.map(item => <UserShareItem data={item} key={item.id} />) : null}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
