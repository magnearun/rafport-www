import React from 'react';
import Img from "gatsby-image"

import s from './Product.scss';
import Button from 'components/button/Button';

interface IProductProps {
  title: string;
  image: any;
  // description: string;
  onAddToCart: (variantId: string) => void;
  variants: any;
}

export default class Product extends React.PureComponent<IProductProps> {

  public render() {
    const { id, title, image, variants, onAddToCart } = this.props;

    return (
      <div className={s.product}>
        <h2>{title}</h2>
        {/* <p>{description}</p> */}
        {/* <img src={image} /> */}
        <Img resolutions={image} />
        <Button onClick={() => onAddToCart(variants[0].id)}>Add to cart</Button>
      </div>
    );
  }
}
