import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import _get from 'lodash/get';

import { withStoreContext, IStoreContext } from 'contexts/StoreContext';

import Segment, { EColor } from 'components/segment/Segment';
import Product from 'components/product/Product';
import Grid from 'components/grid/Grid';

import Hero from './products/components/hero/Hero';

interface IProps {
  data: any;
  storeContext: IStoreContext;
}

function Products({ data, storeContext }: IProps) {

  const addToCart = (variantId: string) => {
    storeContext.addVariantToCart(variantId, 1);
  }

  const products = _get(data, 'allShopifyProduct.edges', []);

  console.log(products);
  console.log(storeContext);


  return (
    <React.Fragment>
      <Helmet title="About" />

      <Segment color={EColor.WHITE}>
        <Grid>
          {products.map((product: any) => {
            console.log(product);

            return (
              <Product
                key={_get(product, 'node.id', '')}
                id={_get(product, 'node.id', '')}
                title={_get(product, 'node.title', '')}
                handle={_get(product, 'node.handle', '')}
                variants={_get(product, 'node.variants', [])}
                image={_get(product, 'node.images', [])[0].localFile.childImageSharp.fluid}
                onAddToCart={addToCart}
              />

            );
          })}
        </Grid>
      </Segment>

    </React.Fragment>
  );
}

export default withStoreContext(Products);


export const query = graphql`
  query AllProductsQuery {
    allShopifyProduct {
      edges {
        node {
          id
          title
          handle
          productType
          vendor
          images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 910) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          variants {
            id
            title
            price
          }
        }
      }
    }
  }
`;