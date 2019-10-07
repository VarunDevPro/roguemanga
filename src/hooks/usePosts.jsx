import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            artist
            slug
            pic {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 800
                  maxHeight: 800
                  traceSVG: { color: "#800080" }
                  quality: 50
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            cover {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 600
                  maxHeight: 400
                  traceSVG: { color: "#800080" }
                  quality: 50
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    artist: post.frontmatter.artist,
    slug: post.frontmatter.slug,
    cover: post.frontmatter.cover,
    pic: post.frontmatter.pic,
    excerpt: post.excerpt,
  }));
};

export default usePosts;
