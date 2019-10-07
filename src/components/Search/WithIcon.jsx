import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Icon from 'components/Icon';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  min-height: 3.2rem;
  padding-left: 3rem;
  padding-right: 0.75rem;
  color: #222;
  align-items: center;
  input {
    width: 100%;
    height: 3.2rem;
  }
`;

export default function WithIcon({ children, ...restProps }) {
  return (
    <StyledWrapper {...restProps}>
      <div
        css={css`
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translate3d(0, -50%, 0);
          display: inline-flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <Icon glyph="search" size={16} />
      </div>
      {children}
    </StyledWrapper>
  );
}
