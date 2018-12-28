import React, { useRef } from 'react';
import { Power4, TimelineLite, TweenLite } from 'gsap';
import Waypoint from 'react-waypoint';

import s from './Text.scss';

interface IProps {
  content: any;
  position?: 'LEFT' | 'RIGHT';
}

export default function Text({ content, position = 'RIGHT' }: IProps) {

  const contentRef = useRef(null);
  const waypointRef = useRef(null);

  let isAnimationComplete = false;

  const animate = () => {
    const t = new TimelineLite();

    const targets = [
      contentRef.current,
    ];

    t.staggerFromTo(
      targets,
      1,
      { autoAlpha: 0, y: 200 },
      { autoAlpha: 1, y: 0, ease: Power4.easeInOut },
      1 / 2,
    );
  }

  const handlePositionChange = ({ currentPosition }: any) => {

    if (waypointRef && currentPosition === 'above' && !isAnimationComplete) {
      animate();
      isAnimationComplete = true;
    }
  }

  return (
    <div className={s.text}>
      {/* <Waypoint
        ref={waypointRef}
        topOffset="99.99%"
        onPositionChange={handlePositionChange}
        scrollableAncestor={window}
      /> */}
      <div
        ref={contentRef}
        className={s(s.text__content, { right: position === 'RIGHT' })}
        dangerouslySetInnerHTML={{__html: content }}
      />

    </div>
  );
}
