import * as React from 'react';
import './style.less';
import { IFeatureService } from '../../../../../model/home/index';

interface IFeatureServiceItemProps {
  data: IFeatureService;
  index: number;
  currSelected: number;
  onChange: (index: number) => void;
}

const FeatureServiceItem = (props: IFeatureServiceItemProps) => {
  const { data, index, currSelected, onChange } = props;
  if (data.isDrive) {
    return (
      <li
        className={currSelected === index ? 'drive-wrper fs-item-scale' : 'drive-wrper'}
        onMouseEnter={() => {
          onChange(index);
        }}
      >
        <div className="fs-img">
          <a href="//www.huizuche.com/promotion/CDL" target="_blank">
            <img
              src={data.imgUrl}
              alt="惠租车,驾照全球通"
              title="惠租车,驾照全球通"
              width="282"
              height="212"
              style={{
                backgroundColor: 'rgb(255, 255, 255)',
                backgroundImage: 'url(&quot;&quot;)',
                display: 'inline'
              }}
            />
          </a>
        </div>
        <div className="fs-intro">
          <h6>{data.title}</h6>
          <div className="driving-service">
            <a href="//www.huizuche.com/promotion/CDL" target="_blank">
              <div className="item">
                <h4>{data.driveData[0].subTitle}</h4>
                <span>{data.driveData[0].subDesc}</span>
              </div>
            </a>
            <a href="//www.huizuche.com/jiazhao/License" className="fs01" target="_blank">
              <div className="item">
                <h4>{data.driveData[1].subTitle}</h4>
                <span>{data.driveData[1].subDesc}</span>
              </div>
            </a>
            <small>{data.label}</small>
          </div>
        </div>
      </li>
    );
  } else {
    return (
      <li
        className={currSelected === index ? 'other-wraper fs-item-scale' : 'other-wraper'}
        onMouseEnter={() => {
          onChange(index);
        }}
      >
        <a href="//www.huizuche.com/VAP/CarGuide" target="_blank">
          <div className="fs-img">
            <img
              src={data.imgUrl}
              alt="惠租车,华人取车向导"
              title="惠租车,华人取车向导"
              width="282"
              height="212"
              data-original="/Content/Images/index/indexnew/fsImg-02.png"
              style={{
                backgroundColor: 'rgb(255, 255, 255)',
                backgroundImage: 'url(&quot;&quot;)',
                display: 'inline'
              }}
            />
          </div>
          <div className="fs-intro">
            <h6>{data.title}</h6>
            <p>{data.desc}</p>
          </div>
        </a>
      </li>
    );
  }
};

export default FeatureServiceItem;
