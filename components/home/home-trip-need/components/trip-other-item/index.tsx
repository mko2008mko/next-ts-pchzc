import React from 'react';
import './style.less';

import { ITripNeed } from '../../../../../model/home/index';

interface ITripNeedOtherProps {
  data: ITripNeed;
}

const TripNeedOtherItem = (props: ITripNeedOtherProps) => (
  <li>
    <a className="tno-wrap" href="/Mall/Shop/Goodsdetail?spgd=26&amp;tabsel=4" target="_blank">
      <div className="tn-other-img">
        <img width="137" height="137" src={props.data.imgUrl} title="惠租车,美国电话卡" alt="惠租车,美国电话卡" />
      </div>
      <div className="tn-other-cont">
        <h5>{props.data.title}</h5>
        <p>{props.data.desc}</p>
        <span>
          <i>￥</i>
          <em>{props.data.price}</em>
          <small>起</small>
        </span>
      </div>
    </a>
  </li>
);

export default TripNeedOtherItem;
