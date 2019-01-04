import Img from 'gatsby-image';
import React, { PureComponent } from 'react';

interface IProps {
  src?: string;
  src2x?: string;
  alt?: string;
  fluid?: any;
  width?: number | string;
  height?: number | string;
}

export default class Image extends PureComponent<IProps> {

  render() {
    const { src, src2x, alt, width, height, fluid } = this.props;
    const srcSet = !src2x ? undefined : `${src} 1x, ${src2x} 2x`;

    if (fluid) {
      return (
        <Img
          fluid={fluid}
          alt={alt}
        />
      );
    }

    if (!src || src === undefined) { return null; }

    return (
      <img
        src={src}
        srcSet={srcSet}
        alt={alt}
        width={width}
        height={height}
      />
    );
  }
}