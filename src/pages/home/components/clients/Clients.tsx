import React, { Children, cloneElement } from 'react';

import s from './Clients.scss';
import Segment from 'components/segment/Segment';

interface IProps {
  children: React.ReactNode;
}

export default function Clients({ children }: IProps) {

  return (
    <div className={s.clients}>
      <ul className={s.clients__list}>
          {Children.toArray(children).map((c: any) => (
            <li className={s.clients__item}>
              {cloneElement(c, {
                className: s.clients__img,
              })}
            </li>
          ))}
      </ul>
    </div>
  );
}
