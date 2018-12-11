import React, { Fragment } from 'react';
import { Power4, TimelineLite, TweenLite } from 'gsap';

import Segment from 'components/segment/Segment';
import hero from 'assets/images/hero.jpg' // Tell Webpack this JS file uses this image
import Parallax from 'components/parallax/Parallax';
import s from './Hero.scss';

interface IProps {
  title: string;
  description: string;
}

export default class Hero extends React.PureComponent<IProps> {

  heading: any = React.createRef();
  description: any = React.createRef();

  componentDidMount() {
    const t = new TimelineLite({ onComplete: () => {
      TweenLite.set(heading, { clearProps: 'opacity' });
    }});

    const heading = this.heading.current;
    const description = this.description.current;
    const targets = [
      heading,
      description,
    ];

    t.staggerFromTo(
      targets,
      1,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, ease: Power4.easeInOut },
      1 / 2,
    );


    window.addEventListener('scroll', this.handleScroll);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.heading.current.style.setProperty('--opacity', 1 - window.scrollY / 150);
  }

  public render() {
    const { title, description } = this.props;

    return (
      <div className={s.hero}>
        <Parallax image={hero}>
          <div className={s.hero__overlay}>
            <h1 className={s.hero__heading} ref={this.heading}>{title}</h1>
            <p className={s.hero__description} ref={this.description}>
              {description}
            </p>
          </div>
        </Parallax>
      </div>
    );
  }
}
