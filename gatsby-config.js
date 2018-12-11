require('dotenv').config();
const path = require('path');
const config = require('gatsby-plugin-config').default;


module.exports = {
  siteMetadata: {
    title: 'Ueno Gatsby Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets/images`),
      },
    },

    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'rafport-www.cdn',
        accessToken: 'MC5YQS1IVXhFQUFGRkliRDNl.JT3vv73vv73vv709Ru-_vWPvv73vv73vv73vv73vv712ZFvvv73vv716Ce-_ve-_ve-_ve-_vUQhKlbvv73vv73vv70',
        // linkResolver: () => require('./src/utils/linkResolver'),
        lang: '*',
      },
    },

    // In your gatsby-config.js
      /*
      * Gatsby's data processing layer begins with “source”
      * plugins. Here the site sources its data from Shopify.
      */
    {
      resolve: 'gatsby-source-shopify',
      options: {
        // The domain name of your Shopify shop. This is required.
        // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
        // 'gatsby-source-shopify-test-shop.myshopify.com'.
        shopName: 'rafport-www',

        // An API access token to your Shopify shop. This is required.
        // You can generate an access token in the "Manage private apps" section
        // of your shop's Apps settings. In the Storefront API section, be sure
        // to select "Allow this app to access your storefront data using the
        // Storefront API".
        // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
        accessToken: '87d1b887f908b5df03595e3953a05a93',

        // Set verbose to true to display a verbose output on `npm run develop`
        // or `npm run build`. This prints which nodes are being fetched and how
        // much time was required to fetch and process the data.
        // Defaults to true.
        verbose: true,
      },
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/svg/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/app-layout/AppLayout.tsx'),
      },
    },
  ],
}
