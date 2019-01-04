import React, { Children, cloneElement } from 'react';
import { Icon } from 'antd';

import Quantity from '../quantity/Quantity';

import s from './LineItem.scss';

interface IProps {
  id: string;
  title: string;
  quantity: number;
  variant: any;
  onUpdate: (value: number) => void;
  onRemove: () => void;
}

export default function LineItem({ title, quantity, variant, onUpdate, onRemove }: IProps) {

  return (
    <div className={s.lineItem}>
      <div className={s.lineItem__image}>
        <img src={variant.image.src} />
      </div>
      <div className={s.lineItem__details}>
        <div className={s.lineItem__title}>{title}</div>
        <div className={s.lineItem__price}>{variant.price}</div>

        <div className={s.lineItem__row}>
          <Quantity value={quantity} onUpdate={onUpdate} />
          <Icon type="delete" className={s.lineItem__delete} onClick={onRemove} />
        </div>
      </div>
    </div>
  );
}
