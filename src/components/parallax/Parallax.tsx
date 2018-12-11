import React from 'react';
import PropTypes from 'prop-types';
import { Parallax as Lax, Background } from 'react-parallax';
import Img from "gatsby-image"

import s from './Parallax.scss';

interface IProps {
  image?: any;
  bgImage?: any;
  small?: boolean;
  spaced?: boolean;
  children?: React.ReactNode;
}

const Parallax = ({ children, image, bgImage, small, spaced = false }: IProps) => {

  return (
    <div className={s(s.parallax, { [s.parallaxSpaced]: spaced })}>
      <Lax strength={200} bgImage={image.src} blur={{ min: -1, max: 3 }}>
        <div className={s(s.parallax__spacer, { isSmall: small } )} />
        {/* {image && (
          <Background>
            <Img fixed={image} fadeIn={false} />
          </Background>
        )} */}
        {children}
      </Lax>
    </div>
  );
};

export default Parallax;