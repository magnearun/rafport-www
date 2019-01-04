import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import _get from 'lodash/get';
import Img from 'gatsby-image'

import Map from 'components/map/Map';
import Slices from './about/components/slices/Slices';
import Hero from '../pages/products/components/hero/Hero';
import Heading from 'components/heading/Heading';
import Image from 'components/image/Image';

interface IProps {
  data: object;
}

export default function About({ data }: IProps) {

  const about = _get(data, 'prismicAbout.data', {});

    console.log('about', about);


    return (
      <React.Fragment>
        <Helmet title="About" />

        <Hero
          image={<Image fluid={_get(about, 'image.localFile.childImageSharp.fluid')} />}
          title={_get(about, 'title.text', '')}
          spaced
        />

        <Slices
          slices={_get(about, 'body', [])}
        />

        <Map
          center={{
            lat: _get(about, 'location.latitude', 0),
            lng: _get(about, 'location.longitude', 0),
          }}
          zoom={15}
        />

      </React.Fragment>
    );
  }

export const query = graphql`
  query AboutQuery {
    prismicAbout {
      data {
        title {
          text
        }
        location {
          latitude
          longitude
        }
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 910) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        body {
          __typename
          ... on PrismicAboutBodyText {
            slice_type
            primary {
              content {
                html
              }
              position
            }
          }
          ... on PrismicAboutBodyImageSlider {
            slice_type
            items {
              slider_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 660) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
          ... on PrismicAboutBodyAffix {
            slice_type
            primary {
              image_position
              text {
                html
              }
              affix_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
          ... on PrismicAboutBodyDivider {
            slice_type
          }
          ... on PrismicAboutBodyEmployees {
            slice_type
            items {
              avatar {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              name {
                text
              }
              phone {
                text
              }
              email {
                text
              }
              job_title {
                text
              }
            }
          }
        }
      }
    }
  }
`;