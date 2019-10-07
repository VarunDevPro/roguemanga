import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import Icon from 'components/Icon';
import Wrapper from 'components/Wrapper';

export default ({ headerStyles }) => (
  <header
    css={css`
      ${headerStyles}
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    `}
  >
    <Wrapper>
      <Link to="/">
        <Icon glyph="home" size={24} />
      </Link>
    </Wrapper>
  </header>
);
