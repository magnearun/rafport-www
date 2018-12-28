import React from 'react';
import { Link } from 'gatsby';

import Logo from 'assets/images/download.png';
import BurgerMenu from 'assets/svg/shopping-cart.svg';
import Text from 'assets/svg/rafporttext.svg';
import { Badge, Icon } from 'antd'

import Navigation from 'components/navigation/Navigation';
import Button from 'components/button/Button';

import StoreContext, { withStoreContext, IStoreContext } from 'contexts/StoreContext';

import useProductNavigation from 'components/product-navigation/ProductNavigation';
import s from './Header.scss';

interface IProps {
  storeContext: IStoreContext;
}

function Header(props: IProps) {

  const openCart = () =>
    props.storeContext.toggleCart();

    console.log(props.storeContext.checkout.lineItems.length);

  const [isOpen, toggleNav, productNavigation] = useProductNavigation(false);


  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <div className={s.header__content}>
          <div className={s.header__row}>
            <Link to="/" className={s.header__logo}>
              <img src={Logo} />
            </Link>
          </div>

          <div className={s.header__row}>
            <Navigation>
              <button onClick={() => toggleNav(!isOpen)}>Vörur</button>
              <Link to="/port">Port</Link>
              <Link to="/about">Um okkur</Link>
            </Navigation>
            <div className={s.header__cart}>
              <Badge count={props.storeContext.checkout.lineItems.length} style={{ backgroundColor: '#9dc94a' }}>
                <Icon type="shopping-cart" className={s.header__cartSvg} onClick={openCart} />
              </Badge>
            </div>
          </div>
        </div>
      </div>
      {productNavigation}
    </header>
  );
}

export default withStoreContext(Header);