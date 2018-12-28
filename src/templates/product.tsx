import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import _get from 'lodash/get';
import Img from 'gatsby-image'
import { withStoreContext, IStoreContext } from 'contexts/StoreContext';

import Segment from 'components/segment/Segment';
import ProductView from 'pages/product/components/product/Product';

function Product(props: any) {

  const addToCart = (variantId: string) => {
    props.storeContext.addVariantToCart(variantId, 1);
  }

  console.log('product', props);
  const product = _get(props, 'data.shopifyProduct', {});


  return (
    <React.Fragment>
      <Segment>
        <ProductView
          title={_get(product, 'title', '')}
          description={_get(product, 'description', '')}
          variants={_get(product, 'variants', [])}
          images={_get(product, 'images', [])}
          onAddToCart={(variantId: string) => addToCart(variantId)}
        />
      </Segment>

    </React.Fragment>
  );
}

export default withStoreContext(Product);

export const query = graphql`
  query ProductQuery($productId: String!) {
    shopifyProduct(id: { eq: $productId }) {
      id
      title
      description
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
`;