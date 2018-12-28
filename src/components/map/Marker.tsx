import React from 'react';

import MarkerSvg from 'assets/svg/map-marker.svg';

import s from './Map.scss';

interface IProps {
  lat: number;
  lng: number;
  text: string;
}

export default function Marker({ text }: IProps) {

  return (
    <MarkerSvg className={s.map__marker} />
  );
}
