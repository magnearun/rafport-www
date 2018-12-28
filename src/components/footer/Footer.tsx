import React, { Children, cloneElement } from 'react';
import s from './footer.scss';
import Segment from 'components/segment/Segment';

interface IProps {
  children: React.ReactNode;
}

export default function Footer({ children }: IProps) {

  return (
    <div className={s.footer}>
      <ul>
        {Children.toArray(children).map((c: any) => (
          <li className={s.footer__item}>
            {cloneElement(c)}
          </li>
        ))}
      </ul>
    </div>
  );
}
