import React, { useEffect, useState, useRef } from 'react';
import { Power4, TimelineLite, TweenLite } from 'gsap';
import Waypoint from 'react-waypoint';

import s from './Affix.scss';

interface IProps {
  image: any;
  text: any;
  imagePosition?: 'LEFT' | 'RIGHT';
}

export default function Affix({ text, image, imagePosition = 'RIGHT' }: IProps) {

  const textRef = useRef(null);
  const imageRef = useRef(null);
  const waypointRef = useRef(null);

  let isAnimationComplete = false;
  let isReady = false;

  useEffect(() => {
    isReady = true;
  });

  const animate = () => {
    const t = new TimelineLite();

    const targets = [
      textRef.current,
      imageRef.current,
    ];

    t.staggerFromTo(
      targets,
      1,
      { autoAlpha: 0, y: 100 },
      { autoAlpha: 1, y: 0, ease: Power4.easeInOut },
      0.3,
    );
  }

  const handlePositionChange = ({ currentPosition }: any) => {

    if (waypointRef && currentPosition === 'above' && !isAnimationComplete) {
      animate();
      isAnimationComplete = true;
    }
  }

  return (
    <div className={s.affix}>
      <Waypoint
        ref={waypointRef}
        topOffset="99.99%"
        onPositionChange={handlePositionChange}
        scrollableAncestor={isReady ? window : undefined}
      />
      <div className={s.affix__row}>
        <div ref={textRef} className={s(s.affix__text, { left: imagePosition === 'LEFT' })} dangerouslySetInnerHTML={{__html: text}}/>

        <div ref={imageRef} className={s(s.affix__image, { left: imagePosition === 'LEFT'} )}>
          {image}
        </div>
      </div>
    </div>
  );
}
