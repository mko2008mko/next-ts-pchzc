import React from 'react';
import './style.less';
import HeaderNavCombox from '../header-nav-combox/index';
import { CSSTransition } from 'react-transition-group';

import { INav } from '../../../../model/home/index';

interface IHeaderProps {
  navData: INav[];
}
interface INavState {
  currIndex: number;
}
class HeaderNav extends React.Component<IHeaderProps, INavState> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      currIndex: 0
    };
  }

  public handleMouseEnter = (index: number) => {
    this.setState({ currIndex: index });
  };

  public handleMouseLeave = () => {
    this.setState({ currIndex: 999 });
  };

  public render() {
    const navData = this.props.navData;
    return (
      <nav>
        <ul className="nav-ul-wrap">
          {navData.length
            ? navData.map((item, index) => (
                <li
                  className="nav-li-wrap"
                  key={item.id}
                  onMouseEnter={this.handleMouseEnter.bind(this, index)}
                  onMouseLeave={this.handleMouseLeave}
                >
                  <span className="ss">
                    {item.title}
                    {item.sub.length ? <i className="new-index-icon nav-down" /> : null}
                    {item.isRecommend ? <small className="new-index-icon nav-recommend">荐</small> : null}
                  </span>
                  {item.sub.length ? <i v-if="item.sub.length" className="new-index-icon lt-line" /> : null}
                  {item.sub.length ? <i v-if="item.sub.length" className="new-index-icon rt-line" /> : null}
                  <span className="nav-underline" />
                  {/* {this.state.currIndex === index && item.sub.length ? ( */}
                  <CSSTransition
                    in={this.state.currIndex === index && item.sub.length !== 0}
                    classNames="fade"
                    timeout={300}
                    unmountOnExit={true}
                  >
                    <HeaderNavCombox data={item.sub} />
                  </CSSTransition>
                  {/* ) : null} */}
                </li>
              ))
            : null}
        </ul>
      </nav>
    );
  }
}

// function HeaderNav(props) {
//   const [isshow, setIsSHow] = useState(false);
//   const navData = props.data;
//   return (
//     <nav>
//       <ul>
//         {navData.length
//           ? navData.map(item => (
//               <li key={item.id}>
//                 <span className="ss">
//                   {item.title}
//                   {item.sub.length ? <i className="new-index-icon nav-down" /> : null}
//                   {item.isRecommend ? <small className="new-index-icon nav-recommend">荐</small> : null}
//                 </span>
//                 {item.sub.length ? <i v-if="item.sub.length" className="new-index-icon lt-line" /> : null}
//                 {item.sub.length ? <i v-if="item.sub.length" className="new-index-icon rt-line" /> : null}
//                 <span className="nav-underline" />
//               </li>
//             ))
//           : null}
//       </ul>
//     </nav>
//   );
// }

export default HeaderNav;
