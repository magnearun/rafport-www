import React, { Children, cloneElement } from 'react';
import s from './Employees.scss';
import Heading from 'components/heading/Heading';

interface IProps {
  children: React.ReactNode;
}

export default function Employees({ children }: IProps) {

  return (
    <div className={s.employees}>
      <div className={s.employees__container}>
        <Heading>Starfsmenn</Heading>
        <div className={s.employees__divider}/>
        <div className={s.employees__row}>
          {Children.toArray(children).map((c: any) => (
            <div className={s.employees__item}>
              {cloneElement(c)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
