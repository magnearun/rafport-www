import { Link } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import React from 'react';

import linkResolver from './linkResolver';

export default (type: string, element: any, content: any, children: any, key: string) => {
  switch (type) {
    case RichText.Elements.hyperlink: {
      const target = element.data && element.data.target;

      if (element.data && element.data.url) {
        return (
          <a key={key} href={linkResolver(element.data)} target={target}>
            {children}
          </a>
        );
      }

      return (
        <Link key={key} to={linkResolver(element.data)} target={target}>{children}</Link>
      );
    }

    // Return null to stick with the default behavior
    default:
      return null;
  }
};