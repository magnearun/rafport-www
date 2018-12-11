import React from 'react';
import PropTypes from 'prop-types';
import { Parallax as Lax } from 'react-parallax';

import s from './Parallax.scss';

interface IProps {
  image: any;
  small?: boolean;
  spaced?: boolean;
  children?: React.ReactNode;
}

const Parallax = ({ children, image, small, spaced = false }: IProps) => {

  return (
    <div className={s(s.parallax, { [s.parallaxSpaced]: spaced })}>
      <Lax strength={200} bgImage={image} blur={{ min: -1, max: 3 }}>
        <div className={s(s.parallax__spacer, { isSmall: small } )} />
        {children}
      </Lax>
    </div>
  );
};

export default Parallax;