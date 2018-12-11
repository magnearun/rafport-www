import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import _get from 'lodash/get';

import Segment, { EColor } from 'components/segment/Segment';
import Product from 'components/product/Product';

export default class About extends React.PureComponent<any> {
  render() {

    return (
      <React.Fragment>
        <Helmet title="About" />


      <h1>About</h1>

      </React.Fragment>
    );
  }
}

// export const query = graphql`
//   query AboutQuery {
//     prismicAbout {
//       edges {
//         node {
//           id
//           descriptionHtml
//           handle
//           image {
//             localFile {
//               childImageSharp {
//                 resolutions(width: 500, height: 500) {
//                   ...GatsbyImageSharpResolutions_withWebp
//                 }
//               }
//             }
//           }
//           title
//         }
//       }
//     }
//   }
// `;