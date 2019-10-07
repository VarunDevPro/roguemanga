const path = require('path');
// const queries = require('./src/utils/algolia');

const here = (...p) => path.join(__dirname, ...p);

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'RogueManga',
    description: 'A place where you can find amazing mangakas!',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: here('./src/components/Layout.jsx'),
        },
        extensions: ['.mdx', '.md', '.markdown'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // sizeByPixelDensity: true,
              wrapperStyle: `margin-bottom:1em;`,
              backgroundColor: `transparent`,
              withWebp: true,
              tracedSVG: {
                color: '#800080',
                turnPolicy: 'TURNPOLICY_MAJORITY',
              },
            },
          },
        ],
      },
    },
    'gatsby-remark-images', // without this blurred image is getting displayed even after normal image loads
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'content/posts',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins:300,400,500,600,700'],
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     queries,
    //     chunkSize: 10000, // default: 1000
    //   },
    // },
  ],
};
