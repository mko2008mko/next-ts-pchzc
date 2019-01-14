import * as React from 'react';
import './style.less';
import { IHomeVendor } from '../../../model/home/index';

interface IHomeVendorWallProps {
  data: IHomeVendor[];
}
interface IHomeVendorWallStates {
  currentHover: number;
}
export default class HomeVendorWall extends React.Component<IHomeVendorWallProps, IHomeVendorWallStates> {
  constructor(props: IHomeVendorWallProps) {
    super(props);
    this.state = {
      currentHover: 99
    };
  }

  public handleOnMouseEnter = (index: number) => {
    this.setState({
      currentHover: index
    });
  };

  public handleOnMouseLeave = () => {
    this.setState({
      currentHover: 99
    });
  };

  public render() {
    const { data } = this.props;
    const { currentHover } = this.state;
    return (
      <section className="vendor-wall">
        <div className="vw-wrap">
          <h5>全球顶级车行 支持100%提车</h5>
          <ul>
            {data.length
              ? data.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href="#"
                      onMouseEnter={this.handleOnMouseEnter.bind(this, index)}
                      onMouseLeave={this.handleOnMouseLeave}
                    >
                      <img src={currentHover === index ? item.hoverImgUrl : item.imgUrl} alt="" />
                    </a>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </section>
    );
  }
}
