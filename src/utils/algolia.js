const artistQuery = `{
    artists: allMdx {
      edges {
        node {
          objectID: id
          frontmatter {
            artist
            slug
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }`;

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }));
const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
  {
    query: artistQuery,
    transformer: ({ data }) => flatten(data.artists.edges),
    indexName: `Artists`,
    settings,
  },
];

module.exports = queries;
