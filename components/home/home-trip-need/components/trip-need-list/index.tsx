import React from 'react';
import './style.less';
import { ITripNeed } from '../../../../../model/home/index';
import TripNeedHot from '../trip-need-hot/index';
import TripNeedOtherItem from '../trip-other-item/index';

interface ITripNeedListProps {
  hotData: ITripNeed;
  otherList: ITripNeed[];
}

const TripNeedList = (props: ITripNeedListProps) => (
  <div className="tn-list-box">
    <div className="tn-list-wrap">
      <TripNeedHot data={props.hotData} />
      <div className="tn-other" v-if="otherList.length">
        <ul>
          {props.otherList.length ? props.otherList.map(item => <TripNeedOtherItem key={item.id} data={item} />) : null}
        </ul>
      </div>
    </div>
  </div>
);

export default TripNeedList;
