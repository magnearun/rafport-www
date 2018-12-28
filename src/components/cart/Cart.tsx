import React, { Children, useEffect } from 'react';
import { withStoreContext, IStoreContext } from 'contexts/StoreContext';
import _get from 'lodash/get';

import { Drawer } from 'antd'

import LineItem from 'components/line-item/LineItem';

import s from './Cart.scss';
import Button from 'components/button/Button';

interface IProps {
  children: React.ReactNode;
  storeContext: IStoreContext;
}

function Cart({ children, storeContext }: IProps) {

  console.log('cart', storeContext.checkout.lineItems);

  return (
    <Drawer
    className={s.cart}
    title="Karfan þín"
    placement="right"
    closable
    width={400}
    onClose={() => storeContext.toggleCart()}
    bodyStyle={{
      height: '100%',
    }}
    visible={storeContext.isCartOpen}>
      <div className={s.cart__panel}>
        <div className={s.cart__list}>
          {storeContext.checkout.lineItems.map((item: any) => (
            <LineItem
              key={_get(item, 'id', '')}
              id={_get(item, 'id', '')}
              title={_get(item, 'title', '')}
              quantity={_get(item, 'quantity', 0)}
              variant={_get(item, 'variant', 0)}
              onUpdate={(quantity) => storeContext.updateLineItem(_get(item, 'id', ''), quantity)}
              onRemove={() => storeContext.removeLineItem(_get(item, 'id', ''))}
            />
          ))}
        </div>
        <div className={s.cart__buttonWrapper}>
          <Button className={s.cart__button} onClick={() => window.open(storeContext.checkout.webUrl)}>Ganga frá pöntun</Button>
        </div>
      </div>
    </Drawer>
  );
}

export default withStoreContext(Cart);