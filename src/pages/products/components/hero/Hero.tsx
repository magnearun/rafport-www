import React, { useEffect, useRef } from 'react';
import { Power4, TimelineLite, TweenLite } from 'gsap';

import Segment from 'components/segment/Segment';
import hero from 'assets/images/hero.jpg' // Tell Webpack this JS file uses this image
import Parallax from 'components/parallax/Parallax';
import s from './Hero.scss';

export default function Hero() {

  return (
    <div className={s.hero}>
      <Parallax
        image={hero}
        small
      />
    </div>
  );
}
