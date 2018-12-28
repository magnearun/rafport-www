import React, { useEffect, useRef } from 'react';
import { Power4, TimelineLite, TweenLite } from 'gsap';

import Segment from 'components/segment/Segment';
import Parallax from 'components/parallax/Parallax';
import s from './Hero.scss';

export default function Hero({ image, title }: any) {

  const heading: any = React.createRef();

  return (
    <div className={s.hero}>
      <Parallax
        image={image}
        small
      >
      <div className={s.hero__overlay}>
        <h1 className={s.hero__heading} ref={heading}>{title}</h1>
      </div>
      </Parallax>
    </div>
  );
}
