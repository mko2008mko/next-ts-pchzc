import React from 'react';
import './style.less';
import { IUserShare } from '../../../../../model/home/index';

interface IUserShareItemProps {
  data: IUserShare;
}

const UserShareItem = (props: IUserShareItemProps) => (
  <li className="us-li-wrap">
    <a href="/Comment/list?commentid=13673" target="_blank">
      <div className="us-img">
        <img
          src={props.data.imgUrl}
          style={{
            backgroundColor: 'rgb(255, 255, 255)',
            backgroundImage: 'url(&quot;&quot;)',
            display: 'inline'
          }}
        />
        <span className="us-country">
          <img title="法兰克福自驾" alt="法兰克福自驾" src={props.data.nationalFlag} />
        </span>
      </div>
      <div className="us-cont">
        <h5>{props.data.desc}</h5>
        <span className="user-name">{props.data.name}</span>
        <div className="us-location">
          <i className="new-index-icon local" />><span>{props.data.city}</span>
          <i className="new-index-icon car" />><span>{props.data.carType}</span>
        </div>
        <div className="us-time">{props.data.time}</div>
      </div>
    </a>
  </li>
);

export default UserShareItem;
