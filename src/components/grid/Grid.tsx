import React, { Children, cloneElement } from 'react';
import s from './Grid.scss';

interface IProps {
  children: React.ReactNode;
}

export default function Grid({ children, col = 3 }: IProps) {

  return (
    <div className={s.grid}>
      <div className={s.grid__container}>
        <div className={s.grid__row}>
          {Children.toArray(children).map((c: any) => (
            <div className={s(s.grid__item, { grid__item4: col === 4 })}>
              {cloneElement(c)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
