import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import _get from 'lodash/get';

import { withStoreContext, IStoreContext } from 'contexts/StoreContext';

import Segment from 'components/segment/Segment';
import Grid from 'components/grid/Grid';
import Product from 'components/product/Product';

import Hero from '../pages/products/components/hero/Hero';

function Collection(props: any) {

  const addToCart = (variantId: string) => {
    props.storeContext.addVariantToCart(variantId, 1);
  }

  console.log('collection', props);
  const collection = _get(props, 'data.prismicCollection.data', {});
  const products = _get(collection, 'products', []);

  return (
    <React.Fragment>

     <Hero
        image={_get(collection, 'collection_image.localFile.childImageSharp.fluid', {})}
        title={_get(collection, 'name.text', '')}
      />

      <Grid>
        {products.map(({ product }: any) => {
          console.log(product);

          return (
            <Product
              key={_get(product, 'id', '')}
              id={_get(product, 'id', '')}
              title={_get(product, 'title', '')}
              handle={_get(product, 'handle', '')}
              variants={_get(product, 'variants', [])}
              image={_get(product, 'image.src', '')}
              onAddToCart={addToCart}
            />

          );
        })}
      </Grid>
    </React.Fragment>
  );
}

export default withStoreContext(Collection);

export const query = graphql`
  query CollectionQuery($collectionId: String!) {
    prismicCollection(uid: { eq: $collectionId }) {
      id
      data {
        name {
          text
        }
        collection_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        products {
          product {
            id
            title
            handle
            vendor
            variants {
              id
              title
              price
            }
            image {
              width
              height
              src
            }
          }
        }
      }
    }
  }
`;