import React from 'react';
import './style.less';
import CarTypeItem from './components/car-type-item/index';
import { ICarType } from '../../../model/home/index';

interface IHomeCarTypeProps {
  data: ICarType[];
}

const HomeCarType = (props: IHomeCarTypeProps) => (
  <section className="cartype-recommend">
    <div className="ctr-wrap">
      <div className="car-container">
        <div className="ctr-tab">
          <h3>精选车型</h3>
        </div>
        <div className="car-list-wrap">
          <div className="floor-label">爆款车型</div>
          {props.data.length ? props.data.map(item => <CarTypeItem key={item.id} data={item} />) : null}
        </div>
      </div>
    </div>
  </section>
);

export default HomeCarType;
