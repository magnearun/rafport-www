import React from 'react';

import Plus from 'assets/svg/plus.svg';
import Minus from 'assets/svg/minus.svg';

import s from './Quantity.scss';
import { Icon } from 'antd';
import { withUIContext } from 'contexts/UIContext';

interface IProps {
  value: number;
  onUpdate: (value: number) => void;
}

function Quantity({ value, onUpdate, UIContext }: IProps) {

  console.log('theme', UIContext.theme);

  return (
    <div className={s.quantity}>
      <Icon
        type="minus-square"
        className={s.quantity__icon}
        onClick={() => onUpdate(Math.max(1, value - 1))}
        disabled={value <= 1}
      />
      <span className={s.quantity__value}>{value}</span>
      <Icon
        type="plus-square"
        className={s.quantity__icon}
        // onClick={() => onUpdate(value + 1)}
        onClick={() => UIContext.toggleTheme()}
      />
    </div>
  );
}

export default withUIContext(Quantity);