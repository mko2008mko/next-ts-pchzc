import * as React from 'react';
import './style.less';
import { IHNCbox } from '../../../../model/home/index';

interface IHNCboxProps {
  data: IHNCbox[];
}

const HeaderNavCombox = (props: IHNCboxProps) => {
  // {props.data.length?}
  const data = props.data;
  if (!data.length) {
    return null;
  }
  return (
    <div className="combobox">
      <i className="combobox-line" />
      <ul className="combobox-ul">
        {data.map(item => (
          <li key={item.id}>
            <a href={item.subLinkUrl}>{item.subTitle}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderNavCombox;
