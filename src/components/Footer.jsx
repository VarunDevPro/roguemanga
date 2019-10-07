import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  font-weight: bold;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Footer = () => {
  return (
    <nav
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <NavLink to="/about/" activeClassName="current-page">
        About
      </NavLink>
      <NavLink to="/contact/" activeClassName="current-page">
        Contact
      </NavLink>
    </nav>
  );
};

export default Footer;
