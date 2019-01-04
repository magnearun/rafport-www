import React, { Children, cloneElement } from 'react';
import s from './Footer.scss';
import { Divider, Icon  } from 'antd';
import { Link } from 'gatsby';

interface IProps {
  children: React.ReactNode;
}

export default function Footer({ children }: IProps) {

  return (
    <div className={s.footer}>
      <Divider type="horizontal" />

      <div className={s.footer__row}>

        <div className={s.footer__col}>
          <p className={s.footer__name}>
            Rafport
          </p>
          <ul className={s.footer__list}>
            <li className={s.footer__item}>
              <Icon type="home" className={s.footer__icon} />

              Auðbrekka 9, 204 Kópavogur
            </li>
            <li className={s.footer__item}>
            <Icon type="phone" className={s.footer__icon} />

              588-9988
            </li>
            <li className={s.footer__item}>
              <Link to="/">
              <Icon type="mail" className={s.footer__icon} />

                rafport@rafport.is
              </Link>
            </li>
          </ul>

        </div>

        <div className={s.footer__col}>
          <p className={s.footer__name}>
            Opnunartímar
          </p>
          <div className={s.footer__list}>
            <p className={s.footer__item}>Mánudaga - Föstudaga: Frá 08:00 - 17:00</p>
            <p className={s.footer__item}>Laugardaga: LOKAÐ</p>
            <p className={s.footer__item}>Sunnudaga: LOKAÐ</p>
          </div>
        </div>

        <div className={s.footer__col}>
          <div className={s.footer__social}>
            <Icon type="mail" className={s.footer__socialIcon} />
            <Icon type="facebook" className={s.footer__socialIcon}/>
          </div>
        </div>

      </div>
    </div>
  );
}
