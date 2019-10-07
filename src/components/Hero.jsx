import React from 'react';
import { css } from '@emotion/core';

import Wrapper from 'components/Wrapper';
// import Search from 'components/Search';

// const searchIndices = [
//   { name: `Artists`, title: `Artists Names`, hitComp: `PageHit` },
// ];
export default () => {
  return (
    <div
      css={css`
        border-radius: 0 0 1rem 1rem;
        overflow: hidden;
        padding-bottom: 3rem;
        background-color: #fff;
      `}
    >
      <Wrapper>
        <h1
          css={css`
            font-weight: normal;
          `}
        >
          Find your{' '}
          <strong
            css={css`
              font-weight: 700;
            `}
          >
            mangaka
          </strong>
        </h1>
        {/* <Search collapse indices={searchIndices} /> */}
      </Wrapper>
    </div>
  );
};
