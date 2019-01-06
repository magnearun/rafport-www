import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';

import Button from './Button';

import s from './SlickCarousel.scss';

export default class SlickCarousel extends PureComponent {

  sliderRef = React.createRef();

  static propTypes = {
    children: PropTypes.node,
    category: PropTypes.string,
    dots: PropTypes.bool,
    arrows: PropTypes.bool,
    infinite: PropTypes.bool,
    draggable: PropTypes.bool,
    speed: PropTypes.number,
    slidesToShow: PropTypes.number,
    slidesToScroll: PropTypes.number,
    nextArrow: PropTypes.node,
    prevArrow: PropTypes.node,
    responsive: PropTypes.array,
    inHeader: PropTypes.bool,
    touchThreshold: PropTypes.number,
  }

  static defaultProps = {
    dots: false,
    category: '',
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: false,
    touchThreshold: 20,
    nextArrow: <Button next />,
    prevArrow: <Button prev />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  render() {
    const { children, ...props } = this.props;

    const count = React.Children.count(children);

    const hideArrows = (count - 1) === this.props.slidesToShow;

    return (
      <div className={s('carousel', { [s.carouselDefault]: true, [s.carouselHideArrows]: hideArrows, [s.carouselPadding]: this.props.slidesToShow > 1 })}>
        <div className={s.carousel__container}>
          <Carousel
            className={s.slider}
            {...props}
          >
            {children}
          </Carousel>
        </div>
      </div>
    );
  }
}
