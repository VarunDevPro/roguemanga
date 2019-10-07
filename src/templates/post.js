import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from '@emotion/styled';

import Image from 'gatsby-image';
import Icon from 'components/Icon';
import Wrapper from 'components/Wrapper';
import Layout from 'components/Layout';

export const query = graphql`
  query($slug: String!) {
    mdx(fileAbsolutePath: { regex: $slug }) {
      frontmatter {
        artist
        location
        pic {
          sharp: childImageSharp {
            fluid(
              maxWidth: 100
              maxHeight: 100
              traceSVG: { color: "#800080" }
              quality: 50
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`;

const PostBody = styled(Wrapper)`
  background-color: #fff;
  border-radius: 0.8rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0.65em 0 0.45em;
  }
  p {
    margin-top: 0.25em;
    margin-bottom: 0.65em;
  }
`;

const AuthorWrapper = styled.div`
  max-width: 320px;
  margin: 2rem auto;
  padding: 0.8rem 1rem;
  border-radius: 0.8rem;
  background-color: #fff;
`;

const AuthorDetailContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  display: inline-block;
  width: 60px;
  border-radius: 0.8rem;
  overflow: hidden;
  * {
    width: 100%;
    margin-top: 0;
  }
`;

const AuthorDetail = styled.div`
  margin: 0 1rem;
  h3 {
    margin: 0;
  }
  p {
    font-weight: 500;
    opacity: 0.7;
  }
`;

const AuthorButtonContainer = styled.div`
  display: flex;
  padding: 1rem 0;
  justify-content: space-between;
`;
const FollowBtn = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0.75rem 0.5rem;
  font-weight: 500;
  border-radius: 0.75rem;
  width: 78%;
  outline: none;
  transition: all 0.4s;
  :hover,
  :active,
  :focus {
    transition: all 0.4s;
    background-color: purple;
  }
`;
const FavBtn = styled.button`
  background-color: #ddd;
  color: #000;
  padding: 0.25rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  width: 18%;
  transition: all 0.4s;
  outline: none;
  border: 2px solid transparent;
  :hover,
  :active,
  :focus {
    transition: all 0.4s;
    color: purple;
    background-color: #eee;
    border: 2px solid #ddd;
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <PostBody>
      <MDXRenderer>{post.body}</MDXRenderer>
      <AuthorWrapper>
        <AuthorDetailContainer>
          <ImageWrapper>
            {post.frontmatter.pic && (
              <Image
                fluid={post.frontmatter.pic.sharp.fluid}
                alt={post.artist}
              />
            )}
          </ImageWrapper>
          <AuthorDetail>
            <h3>{post.frontmatter.artist}</h3>
            <p>{post.frontmatter.location}</p>
          </AuthorDetail>
        </AuthorDetailContainer>
        <AuthorButtonContainer>
          <FollowBtn>Follow us</FollowBtn>
          <FavBtn>
            <Icon glyph="heart" size={24} />
          </FavBtn>
        </AuthorButtonContainer>
      </AuthorWrapper>
    </PostBody>
  </Layout>
);

export default PostTemplate;
