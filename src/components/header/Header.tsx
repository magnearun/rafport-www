import React from 'react';
import { Link } from 'gatsby';

import Logo from 'assets/svg/rafport.svg';
import BurgerMenu from 'assets/svg/menu.svg';

import Navigation from 'components/navigation/Navigation';
import Button from 'components/button/Button';

import { withStoreContext, IStoreContext } from 'contexts/StoreContext';

import s from './Header.scss';

interface IProps {
  storeContext: IStoreContext;
}

function Header(props: IProps) {

  const openCart = () =>
    props.storeContext.toggleCart();

  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <div className={s.header__content}>
          <div className={s.header__row}>
            <Link to="/" className={s.header__logo}>
              <Logo className={s.header__logoSvg} />
            </Link>

            <Navigation>
              <Link to="/products">Vörur</Link>
              <Link to="/port">Port</Link>
              <Link to="/about">Um okkur</Link>
            </Navigation>
          </div>

          <div className={s.header__row}>
            <Button to="/">Hafa samband</Button>
            <BurgerMenu className={s.header__menu} onClick={openCart} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default withStoreContext(Header);