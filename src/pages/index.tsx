import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import _get from 'lodash/get';
import Hero from './home/components/hero/Hero';
import Parallax from './home/components/parallax/Parallax';
import MailingList from 'components/mailing-list/MailingList';
import Image from 'components/image/Image';

export default class Home extends React.PureComponent<any> {

  onChange = (n) => {
    console.log(n);

  }

  render() {
    const { data } = this.props;
    const home = _get(data, 'prismicHome.data', {});
    console.log(_get(home, 'image.localFile.childImageSharp.fluid'))

    return (
      <React.Fragment>
        <Helmet title="Home" />

        <Hero
          title={_get(home, 'title.text', '')}
          description={_get(home, 'description.text', '')}
          image={<Image
            fluid={_get(home, 'image.localFile.childImageSharp.fluid')}
          />}
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

        <MailingList />

        {/* <Clients>
          <ABB />
          <ABB />
          <ABB />
          <ABB />
        </Clients> */}
      </React.Fragment>
    );
  }
}


export const query = graphql`
  query AllCollectionsQuery {
    prismicHome {
      data {
        title {
          text
        }
        description {
          text
        }
        image {
          localFile {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;