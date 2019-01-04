import React from 'react';

import Parallax from 'components/parallax/Parallax';
import s from './Hero.scss';
import Heading from 'components/heading/Heading';

export default function Hero({ image, title }: any) {

  const heading: any = React.createRef();

  return (
    <div className={s.hero}>
      <Parallax
        image={image}
        small
      >
      <div className={s.hero__overlay}>
        <div className={s.hero__heading} ref={heading}>
          <Heading>
            {title}
          </Heading>
        </div>
      </div>
      </Parallax>
    </div>
  );
}
