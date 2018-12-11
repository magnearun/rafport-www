import React from 'react';
import Img from "gatsby-image"

import s from './Collection.scss';

interface IProps {
  title: string;
  image: any;
}

export default function Collection({ title, image }: IProps) {

  return (
    <div className={s.collection}>
      <Img resolutions={image} />
    </div>
  );
}
