import React from 'react';

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

      {image}
      {children}

    </div>
  );
};

export default Parallax;