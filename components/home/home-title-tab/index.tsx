import React from 'react';
import './style.less';
import { ItitleTab } from '../../../model/home/index';

interface IHomeTitleTabProps {
  data: ItitleTab;
  onChange: (index: number) => void;
}
interface IHomeTitleTabStates {
  currentIndex: number;
}
export default class HomeTitleTab extends React.Component<IHomeTitleTabProps, IHomeTitleTabStates> {
  constructor(props: IHomeTitleTabProps) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  public handleClick = (index: number) => {
    this.props.onChange(index);
    this.setState({
      currentIndex: index
    });
  };

  public render() {
    const { data } = this.props;
    const { currentIndex } = this.state;
    return (
      <div className="ht-tab-wrap">
        <h3>{data.title}</h3>
        <ul className="ul-tab">
          {data.tabs.length
            ? data.tabs.map((item, index) => (
                <li
                  key={item}
                  className={currentIndex === index ? 'selected' : null}
                  onClick={this.handleClick.bind(this, index)}
                >
                  {item}
                  <span className="underline" />
                </li>
              ))
            : null}
        </ul>
      </div>
    );
  }
}
