import React from 'react';
import './style.less';
import { ITripNeed } from '../../../model/home/index';
import HomeTitleTab from '../home-title-tab/index';
import TripNeedList from './components/trip-need-list/index';

interface IHomeTripNeedProps {
  data: ITripNeed[];
}

interface IHomeTripNeedStates {
  currIndex: number;
  diveList?: ITripNeed[];
  setoutList?: ITripNeed[];
  currlist?: ITripNeed[];
}

export default class HomeTripNeed extends React.Component<IHomeTripNeedProps, IHomeTripNeedStates> {
  constructor(props: IHomeTripNeedProps) {
    super(props);
    this.state = {
      currIndex: 0,
      diveList: props.data.filter(item => item.type === 1),
      setoutList: props.data.filter(item => item.type === 2),
      currlist: props.data.filter(item => item.type === 1)
    };
  }

  public handleHTTChange = (index: number) => {
    // console.log(index);
    if (index === 0) {
      this.setState(prestate => ({ currlist: prestate.diveList }));
    } else {
      this.setState(prestate => ({ currlist: prestate.setoutList }));
    }
  };

  public getList = () => {
    const { currlist } = this.state;
    if (currlist.length) {
      let hotIndex: number;
      let hotData: ITripNeed;
      let otherList: ITripNeed[];
      const hasHot: boolean = currlist.some((item, index) => {
        if (item.isHot) {
          hotIndex = index;
          return true;
        }
      });
      if (hasHot) {
        hotData = currlist[hotIndex];
      }
      otherList = currlist.filter(item => {
        return !item.isHot;
      });
      return <TripNeedList hotData={hotData} otherList={otherList} />;
    }
    return null;
  };

  public render() {
    const titleTab = {
      title: '出行必备',
      tabs: ['自驾必备', '出行玩乐']
    };

    return (
      <section className="trip-need">
        <div className="tn-wrap">
          <HomeTitleTab data={titleTab} onChange={this.handleHTTChange} />
          <div className="tn-list-wrap1">{this.getList()}</div>
        </div>
      </section>
    );
  }
}
