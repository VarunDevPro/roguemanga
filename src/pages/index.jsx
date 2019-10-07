import React from 'react';
import { css } from '@emotion/core';

import Layout from 'components/Layout';
import Hero from 'components/Hero';
import Wrapper from 'components/Wrapper';
import usePosts from 'hooks/usePosts';
import PostPreview from 'components/PostPreview';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Layout
        headerStyles={css`
          background-color: #fff;
        `}
      >
        <Hero />
        <Wrapper
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-gap: 1rem;
            justify-content: center;
            align-items: center;
          `}
        >
          {posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
          {posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
          {posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
          {posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </Wrapper>
      </Layout>
    </>
  );
};
