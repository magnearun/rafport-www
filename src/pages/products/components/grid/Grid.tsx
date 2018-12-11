import React, { Children, cloneElement } from 'react';
import s from './Grid.scss';

interface IProps {
  children: React.ReactNode;
}

export default function Grid({ children }: IProps) {

  return (
    <div className={s.grid}>
      {Children.toArray(children).map((c: any) => (
        <div className={s.grid__item}>
          {cloneElement(c)}
        </div>
      ))}
    </div>
  );
}
