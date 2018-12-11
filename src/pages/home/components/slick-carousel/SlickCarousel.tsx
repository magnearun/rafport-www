import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Button from './Button';

import s from './SlickCarousel.scss';

export default class SlickCarousel extends PureComponent {

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
    slidesToShow: 1,
    slidesToScroll: 1,
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
        breakpoint: 600,
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

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.slider.slickGoTo(0);
    }
  }

  render() {
    const { children, inHeader, ...props } = this.props;

    const count = React.Children.count(children);

    const hideArrows = (count - 1) === this.props.slidesToShow;

    return (
      <div className={s('carousel', { [s.carouselHeader]: inHeader, [s.carouselDefault]: !inHeader, [s.carouselHideArrows]: hideArrows })}>
        <div className={s.carousel__container}>
          <Slider
            className={s.slider}
            ref={(el) => { this.slider = el; }}
            {...props}
          >
            {children}
          </Slider>
        </div>
      </div>
    );
  }
}
