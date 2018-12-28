const path = require('path');

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-decorators',
    options: {
      legacy: true,
    },
  });
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }, { postCssPlugins, ...sassOptions }) => {

  const PRODUCTION = stage !== 'develop';
  const isSSR = stage.includes('html');

  const sassLoader = {
    loader: require.resolve('sass-loader'),
    options: {
      sourceMap: !PRODUCTION,
      ...sassOptions,
    },
  };

  actions.setWebpackConfig({
    module: {
      rules: [{
        test: /\.s(a|c)ss$/,
        use: [
          { loader: require.resolve('classnames-loader') },
          !isSSR && loaders.miniCssExtract(),
          loaders.css({ modules: true, importLoaders: 2 }),
          loaders.postcss({ plugins: postCssPlugins }),
          sassLoader,
        ].filter(Boolean),
      }],
    },
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules'
      ],
    },
  });
}


exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        allShopifyProduct {
          edges {
            node {
              id
              handle
            }
          }
        }

        allPrismicCollection {
          edges {
            node {
              uid
            }
          }
        }
      }
    `)
    .then((result) => {
      result.data.allShopifyProduct.edges.forEach(({ node }) => {
        actions.createPage({
          path: `products/${node.handle}`,
          component: path.resolve('./src/templates/product.tsx'),
          context: {
            productId: node.id,
          },
        });
      });

      result.data.allPrismicCollection.edges.forEach(({ node }) => {
        actions.createPage({
          path: `collections/${node.uid}`,
          component: path.resolve('./src/templates/collection.tsx'),
          context: {
            collectionId: node.uid,
          },
        });
      });
      resolve();
    });
  });
}
