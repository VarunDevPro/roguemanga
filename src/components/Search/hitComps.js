import React from 'react';
import { Highlight } from 'react-instantsearch-dom';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import WithIcon from './WithIcon';

export const PageHit = clickHandler => ({ hit }) => (
  <WithIcon
    css={css`
      outline: none;
      text-decoration: none;
      :hover,
      :active,
      :focus {
        color: #000;
        text-decoration: none;
        background-color: #e3e3e3;
      }
    `}
    as={Link}
    to={hit.slug}
    onClick={clickHandler}
  >
    <p
      css={css`
        mark {
          background-color: #ffff0044;
          font-weight: bolder;
        }
      `}
    >
      <Highlight attribute="artist" hit={hit} tagName="mark" />
    </p>
  </WithIcon>
);
