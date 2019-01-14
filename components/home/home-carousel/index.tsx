import * as React from 'react';
import './style.less';
import { ICarousel } from '../../../model/home/index';

interface IHomeCarouselProps {
  data: ICarousel[];
}
interface IHomeCarouselStates {
  currentIndex: number;
}

class HomeCarousel extends React.Component<IHomeCarouselProps, IHomeCarouselStates> {
  constructor(props: IHomeCarouselProps, public timerID: any) {
    super(props);
    this.props.data.map(item => {
      return (item.styleObj = {
        backgroundImage: `url(${item.imgUrl})`,
        backgroundRepeat: 'no-repeat'
      });
    });
    this.state = {
      currentIndex: 0
    };
  }

  public startCarousel = () => {
    this.clearCarouse();

    this.timerID = setInterval(() => {
      if (this.state.currentIndex >= 4) {
        this.setState({
          currentIndex: 0
        });
      } else {
        this.setState(preState => ({
          currentIndex: preState.currentIndex + 1
        }));
      }
    }, 3000);
  };

  public clearCarouse = () => {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  };

  public handleOnMouseEnter = (index: number) => {
    this.clearCarouse();
    this.setState({
      currentIndex: index
    });
  };

  public handleOnMouseLeave = () => {
    this.startCarousel();
  };

  public componentDidMount() {
    this.startCarousel();
  }

  public componentWillUnmount() {
    this.clearCarouse();
  }

  public render() {
    const { data } = this.props;
    const { currentIndex } = this.state;
    return (
      <section className="carousel-banner">
        <div className="cb-nav">
          <ul id="cbNavUl" style={{ display: 'inline-block' }}>
            {data.length
              ? data.map((item, index) => (
                  <li
                    onMouseEnter={this.handleOnMouseEnter.bind(this, index)}
                    onMouseLeave={this.handleOnMouseLeave}
                    key={item.title}
                    className={currentIndex === index ? 'currentdot' : null}
                  >
                    {item.title}
                  </li>
                ))
              : null}
          </ul>
        </div>
        {data.length
          ? data.map((item, index) => (
              <a
                key={item.imgUrl}
                href={item.linkUrl}
                className={currentIndex === index ? 'current' : null}
                target="_blank"
                title="惠租车,惠租车活动,机票酒店尽情领"
              >
                <div className="cb-img" style={item.styleObj} />
              </a>
            ))
          : null}
      </section>
    );
  }
}

export default HomeCarousel;
