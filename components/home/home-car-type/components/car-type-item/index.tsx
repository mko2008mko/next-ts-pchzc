import * as React from 'react';
import './style.less';
import DetailPopup from '../detail-pop/index';
import { ICarType } from '../../../../../model/home/index';

interface ICarTypeProps {
  data: ICarType;
}
interface ICarTypeStates {
  popIsShow: boolean;
}
class CarTypeItem extends React.Component<ICarTypeProps, ICarTypeStates> {
  constructor(props: ICarTypeProps) {
    super(props);
    this.state = {
      popIsShow: false
    };
  }

  public handleOnMouseEnter = () => {
    this.setState({
      popIsShow: true
    });
  };

  public handleOnMouseLeave = () => {
    this.setState({
      popIsShow: false
    });
  };

  public render() {
    const { data } = this.props;
    const { popIsShow } = this.state;
    if (data.carLabel.length) {
      return (
        <div className="car-l-item" onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
          {popIsShow ? <DetailPopup v-if="popIsShow" linkUrl="https://www.baidu.com/" /> : null}
          <img src={data.imgUrl} alt="" />
          <div className="item-right">
            <p className="car-name">{data.carName}</p>
            <div className="car-label clearfix">
              <span>{data.carLabel[0]}</span>
              <span>{data.carLabel[1]}</span>
            </div>
            <div className="car-city">
              <i />
              {data.carCity}
            </div>
            <div className="car-price">
              <i>￥</i>
              <span className="num">{data.carPrice}</span>
              <span className="unit">/天起</span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="car-s-item" onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
          {popIsShow ? <DetailPopup v-if="popIsShow" linkUrl="https://www.baidu.com/" /> : null}
          <img src={data.imgUrl} alt="" />
          <p className="car-name">{data.carName}</p>
          <div className="car-city">
            <i />
            {data.carCity}
          </div>
          <div className="car-price">
            <i>￥</i>
            <span className="num">{data.carPrice}</span>
            <span className="unit">/天起</span>
          </div>
        </div>
      );
    }
  }
}

export default CarTypeItem;
