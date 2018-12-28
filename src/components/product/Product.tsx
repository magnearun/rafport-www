import React from 'react';
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import s from './Product.scss';
import Button from 'components/button/Button';

interface IProductProps {
  id: string;
  title: string;
  image: any;
  handle: string;
  onAddToCart: (variantId: string) => void;
  variants: any;
}

export default class Product extends React.PureComponent<IProductProps> {

  public render() {
    const { id, handle, title, image, variants, onAddToCart } = this.props;

    return (
      <Link to={`/products/${handle}`} className={s.product}>
        {/* <p>{description}</p> */}
        {/* <img src={image} /> */}
        {image && (
          <img src={image} className={s.product__image} />
          // <Img fluid={image} />
        )}

        <div className={s.product__footer}>
          <Link
            to={`/products/${handle}`}
            className={s.product__link}
            state={{
              id,
            }}
          >
            {title}
          </Link>

        </div>
        {/* <Button onClick={() => onAddToCart(variants[0].id)}>Add to cart</Button> */}
      </Link>
    );
  }
}
