import React, { Children, cloneElement } from 'react';
import s from './Navigation.scss';

interface IProps {
  children: React.ReactNode;
}

export default function Navigation({ children }: IProps) {

  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        {Children.toArray(children).map((c: any, i) => (
          <li className={s.nav__item} key={i + 1}>
            {cloneElement(c, {
              className: s.nav__link,
              activeClassName: s.nav__linkActive,
            })}
          </li>
        ))}
      </ul>
    </nav>
  );
}
