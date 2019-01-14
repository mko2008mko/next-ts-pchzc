import React from 'react';
import './style.less';

interface IDetailPopProps {
  linkUrl: string;
}
const DetailPop = (props: IDetailPopProps) => (
  <div className="detail-popup">
    <a href={props.linkUrl}>查看详情</a>
  </div>
);

export default DetailPop;
