import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import _get from 'lodash/get';

import Hero from './home/components/hero/Hero';
import SlickCarousel from './home/components/slick-carousel/SlickCarousel';
import Collection from './home/components/collection/Collection';
import Clients from './home/components/clients/Clients';
import ABB from 'assets/svg/abb.svg';

export default class Home extends React.PureComponent<any> {

  render() {
    console.log(this.props)
    const { data } = this.props;
    const home = _get(data, 'prismicHome.data', {});
    const collections = _get(data, 'allShopifyCollection.edges', []);

    return (
      <React.Fragment>
        <Helmet title="Home" />

        <Hero
          title={_get(home, 'title.text', '')}
          description={_get(home, 'description.text', '')}
        />

        {/* <SlickCarousel>
          {collections.map((collection: any) => {
              console.log(collection);

              return (
                <Collection
                  key={_get(collection, 'node.id', '')}
                  title={_get(collection, 'node.title', '')}
                  image={_get(collection, 'node.image', []).localFile.childImageSharp.resolutions}
                />
              );
            })}
        </SlickCarousel> */}

        <Clients>
          <ABB />
          <ABB />
          <ABB />
          <ABB />
        </Clients>


      </React.Fragment>
    );
  }
}


export const query = graphql`
  query AllCollectionsQuery {
    allShopifyCollection {
      edges {
        node {
          id
          descriptionHtml
          handle
          image {
            localFile {
              childImageSharp {
                resolutions(width: 500, height: 500) {
                  ...GatsbyImageSharpResolutions_withWebp
                }
              }
            }
          }
          title
        }
      }
    }
    prismicHome {
      data {
        title {
          text
        }
        description {
          text
        }
      }
    }
  }
`;