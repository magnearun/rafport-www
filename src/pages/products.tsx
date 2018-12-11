import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import _get from 'lodash/get';

import { withStoreContext, IStoreContext } from 'contexts/StoreContext';

import Segment, { EColor } from 'components/segment/Segment';
import Product from 'components/product/Product';

import Grid from './products/components/grid/Grid';
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

      <Hero />

      <Segment color={EColor.WHITE}>
        <Grid>
          {products.map((product: any) => {
            console.log(product);

            return (
              <Product
                key={_get(product, 'node.id', '')}
                id={_get(product, 'node.id', '')}
                title={_get(product, 'node.title', '')}
                // description={_get(node, 'description', '')}
                variants={_get(product, 'node.variants', [])}
                image={_get(product, 'node.images', [])[0].localFile.childImageSharp.resolutions}
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
                resolutions(width: 300, height: 300) {
                  ...GatsbyImageSharpResolutions_withWebp
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