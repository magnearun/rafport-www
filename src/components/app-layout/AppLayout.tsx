import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { get } from 'lodash';

import Header from 'components/header/Header';
import Devtools from 'components/devtools/Devtools';
import s from './AppLayout.scss';
import { StoreProvider } from 'contexts/StoreContext';
import { UIProvider } from 'contexts/UIContext';
import Cart from 'components/cart/Cart';
import Footer from 'components/footer/Footer';

interface IProps {
  children: React.ReactNode;
}

export default class AppLayout extends React.PureComponent<IProps> {

  public get options() {
    return {
      header: true,
      ...get(React.Children.toArray(this.props.children), '0.type.layoutOptions', {}),
    };
  }

  public renderLayout = (data: any) => {
    const { title } = data.site.siteMetadata;

    return (
      <React.Fragment>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <UIProvider>
          <StoreProvider>
            {this.options.header && <Header title={title} />}

            <div className={s.layout}>
              {this.props.children}

              <Footer />
            </div>

            <Cart/>
          </StoreProvider>
        </UIProvider>

        <Devtools />
      </React.Fragment>
    );
  }

  public render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={this.renderLayout}
      />
    );
  }
}
