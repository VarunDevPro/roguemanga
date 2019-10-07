import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const PostPreview = ({ post }) => (
  <article>
    <Link
      to={post.slug}
      css={css`
        position: relative;
        display: block;
        margin-top: 1rem;
        width: 100%;
        border-radius: 1rem;
        overflow: hidden;
        outline: none;
        border: 2px solid transparent;
        :hover,
        :active,
        :focus {
          transition: all 0.85s;
          border: 2px solid purple;
        }
      `}
    >
      {post.cover && (
        <Image
          css={css`
            filter: brightness(0.8);
            * {
              width: 100%;
              margin-top: 0;
            }
          `}
          fluid={post.cover.sharp.fluid}
          alt={'Cover Art by ' + post.artist}
        />
      )}
      <div
        css={css`
          display: inline-block;
          position: absolute;
          bottom: 0.5rem;
          right: 0.5rem;
          filter: drop-shadow(0 0.125rem 1rem #000);
        `}
      >
        {post.pic && (
          <Image
            css={css`
              width: 2rem;
              height: 2rem;
              border-radius: 50%;
              * {
                width: 100%;
                margin-top: 0;
              }
            `}
            fluid={post.pic.sharp.fluid}
            alt={post.artist}
          />
        )}
      </div>
    </Link>
  </article>
);

export default PostPreview;
