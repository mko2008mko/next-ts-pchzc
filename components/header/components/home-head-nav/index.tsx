import React from 'react';
import './style.less';
import HeaderNavCombox from '../header-nav-combox/index';
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link';

import { INav } from '../../../../model/home/index';

interface IHeaderProps {
  navData: INav[];
  pathname: string;
}
interface INavState {
  currHoverIndex: number;
  currSelectIndex: number;
}
class HeaderNav extends React.Component<IHeaderProps, INavState> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      currHoverIndex: 999,
      currSelectIndex: 0
    };
  }

  public handleClick = (index: number) => {
    this.setState({ currSelectIndex: index });
  };

  public handleMouseEnter = (index: number) => {
    this.setState({ currHoverIndex: index });
  };

  public handleMouseLeave = () => {
    this.setState({ currHoverIndex: 999 });
  };

  public render() {
    const { navData, pathname } = this.props;
    return (
      <nav>
        <ul className="nav-ul-wrap">
          {navData.length
            ? navData.map((item, index) => (
                <li
                  className={pathname === item.linkUrl ? 'nav-li-wrap selected' : 'nav-li-wrap'}
                  key={item.id}
                  onMouseEnter={this.handleMouseEnter.bind(this, index)}
                  onMouseLeave={this.handleMouseLeave}
                  // onClick={this.handleClick.bind(this, index)}
                >
                  {!item.sub.length ? (
                    <Link href={item.linkUrl}>
                      <a>
                        <span className="ss">
                          {item.title}
                          {item.sub.length ? <i className="new-index-icon nav-down" /> : null}
                          {item.isRecommend ? <small className="new-index-icon nav-recommend">荐</small> : null}
                        </span>
                        {item.sub.length ? <i v-if="item.sub.length" className="new-index-icon lt-line" /> : null}
                        {item.sub.length ? <i v-if="item.sub.length" className="new-index-icon rt-line" /> : null}
                        <span className="nav-underline" />
                      </a>
                    </Link>
                  ) : (
                    <a>
                      <span className="ss">
                        {item.title}
                        {item.sub.length ? <i className="new-index-icon nav-down" /> : null}
                        {item.isRecommend ? <small className="new-index-icon nav-recommend">荐</small> : null}
                      </span>
                      {item.sub.length ? <i v-if="item.sub.length" className="new-index-icon lt-line" /> : null}
                      {item.sub.length ? <i v-if="item.sub.length" className="new-index-icon rt-line" /> : null}
                      <span className="nav-underline" />
                    </a>
                  )}

                  <CSSTransition
                    in={this.state.currHoverIndex === index && item.sub.length !== 0}
                    classNames="fade"
                    timeout={300}
                    unmountOnExit={true}
                  >
                    <HeaderNavCombox data={item.sub} />
                  </CSSTransition>
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
