import React from 'react';
import s from './Product.scss';
import Button from 'components/button/Button';
import Image from 'components/image/Image';

interface IProps {
  title: string;
  variants: any;
  images: any;

}

export default function Product({ title, description, image, variants, onAddToCart }: any) {

  return (
    <div className={s.product}>
      <div className={s.product__imageWrapper}>
        <div className={s.product__image}>
          <Image fluid={image} />
        </div>
      </div>

      <div className={s.product__details}>
        <h2 className={s.product__title}>{title}</h2>
        {/* <div className={s.product__price}>{price}</div> */}
        <div className={s.product__description}>{description}</div>

          <Button onClick={() => onAddToCart(variants[0].id)}>Bæta við körfu</Button>
        </div>
    </div>
  );
}
