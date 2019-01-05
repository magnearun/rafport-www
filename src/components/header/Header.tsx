import React from 'react';
import { Link } from 'gatsby';
import { navigate } from "@reach/router"

import Logo from 'assets/images/download.png';
import { Badge, Icon } from 'antd'

import Navigation from 'components/navigation/Navigation';

import { withStoreContext, IStoreContext } from 'contexts/StoreContext';

import useProductNavigation from 'components/product-navigation/ProductNavigation';
import s from './Header.scss';

interface IProps {
  storeContext: IStoreContext;
  white: boolean;
}

function Header(props: IProps) {

  const openCart = () =>
    props.storeContext.toggleCart();

    console.log(props.storeContext.checkout.lineItems.length);

  const [isOpen, toggleNav, productNavigation] = useProductNavigation(false);


  return (
    <header className={s(s.header, { white: props.white })}>
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
                <Icon type="shopping-cart" className={s.header__cartSvg} onClick={openCart} />
              {/* <Badge count={props.storeContext.checkout.lineItems.length} style={{ backgroundColor: '#fff', color: '#414042' }}>
              </Badge> */}
              <Icon type="user" className={s.header__user} onClick={() => navigate(`/app/dashboard`)} />

            </div>
          </div>
        </div>
      </div>
      {productNavigation}
    </header>
  );
}

export default withStoreContext(Header);