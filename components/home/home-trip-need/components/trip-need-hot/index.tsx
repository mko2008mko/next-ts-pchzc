import React from 'react';
import './style.less';
import { ITripNeed } from '../../../../../model/home/index';

interface ITripNeedHotProps {
  data: ITripNeed;
}

const TripNeedHot = (props: ITripNeedHotProps) => (
  <div className="tn-hot">
    <a href="/Mall/Shop/Goodsdetail?spgd=24&amp;tabsel=4" target="_blank">
      <img width="282" height="300" src={props.data.imgUrl} title="惠租车,安联境外旅游险" alt="惠租车,安联境外旅游险" />
      <div className="tn-hot-cont">
        <p>{props.data.title}</p>
        <span>
          <i>￥</i>
          <em>{props.data.price}</em>
          <small>起</small>
        </span>
      </div>
    </a>
  </div>
);

export default TripNeedHot;
