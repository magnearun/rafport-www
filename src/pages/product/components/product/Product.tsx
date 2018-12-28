import React, { Children, cloneElement } from 'react';
import s from './Product.scss';
import Button from 'components/button/Button';
import Img from 'gatsby-image'

interface IProps {
  title: string;
  variants: any;
  images: any;

}

export default function Product({ title, description, images, variants, onAddToCart }: any) {

  return (
    <div className={s.product}>
      <div className={s.product__image}>
        <Img fluid={images[0].localFile.childImageSharp.fluid} />
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
