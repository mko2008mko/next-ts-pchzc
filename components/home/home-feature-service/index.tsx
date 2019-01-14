import * as React from 'react';
import './style.less';
import { IFeatureService } from '../../../model/home/index';
import FeatureServiceItem from './components/feature-service-item/index';

interface IHomeFeatureServiceProps {
  data: IFeatureService[];
}
interface IHomeFeatureServiceStates {
  selected: number;
  current: any;
}

export default class HomeFeatureService extends React.Component<IHomeFeatureServiceProps, IHomeFeatureServiceStates> {
  constructor(props: IHomeFeatureServiceProps) {
    super(props);
    this.state = {
      selected: 0,
      current: {
        transform: 'scale(1.03)',
        transition: 'all 200ms ease-in-out'
      }
    };
  }

  public handleChange = (index: number) => {
    this.setState({ selected: index });
  };

  public render() {
    const { data } = this.props;
    const { selected } = this.state;
    return (
      <section className="feature-service">
        <div className="fs-wrap">
          <h3>国人特色服务</h3>
          <ul className="fs-list">
            {data.length
              ? data.map((item, index) => (
                  <FeatureServiceItem
                    onChange={this.handleChange}
                    currSelected={selected}
                    index={index}
                    data={item}
                    key={item.id}
                  />
                ))
              : null}
          </ul>
          <div className="fs-info-img">
            {data.length
              ? data.map((item, index) => (
                  <a
                    href="//www.huizuche.com/promotion/CDL"
                    target="_blank"
                    key={item.id}
                    style={selected === index ? { opacity: 1, zIndex: 2 } : null}
                  >
                    <img
                      src={item.adImgUrl}
                      width="1200"
                      height="317"
                      alt="惠租车,驾照全球通"
                      title="惠租车,驾照全球通"
                      style={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        backgroundImage: 'url(&quot;&quot;)',
                        display: 'inline'
                      }}
                    />
                  </a>
                ))
              : null}
          </div>
        </div>
      </section>
    );
  }
}
