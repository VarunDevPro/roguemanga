import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import useSiteMetadata from '../hooks/use-sitemetadata';

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html,
  body {
    margin: 0;
    font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    line-height: 1.4;
    background-color: #e5eaf4;
    /* remove margin for the main div that Gatsby mounts into */
    > div {
      margin-top: 0;
    }
  }
  .gatsby-resp-image-wrapper {
    border-radius: 0.85rem;
    overflow: hidden;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    color: inherit;
    :hover,
    :active,
    :focus {
      color: purple;
      text-decoration: underline;
    }
  }

  /* ---- Super Form Reset  ----*/

  input,
  label,
  select,
  button,
  textarea {
    margin: 0;
    border: 0;
    padding: 0;
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
    background: none;
    line-height: 1;

    /* Browsers have different default form fonts */
    font-size: 1rem;
    font-family: inherit;
  }

  /* Remove the stupid outer glow in Webkit */
  input:focus {
    outline: 0;
  }

  /* Button Controls */

  input[type='checkbox'],
  input[type='radio'] {
    width: 13px;
    height: 13px;
  }

  /* Search Input 
           Make webkit render the search input like a normal text field */
  input[type='search'] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
  }

  /* Turn off the recent search for webkit. It adds about 15px padding on the left */
  ::-webkit-search-decoration {
    display: none;
  }

  /* Buttons */

  button,
  input[type='reset'],
  input[type='button'],
  input[type='submit'] {
    /* Fix IE7 display bug */
    overflow: visible;
    width: auto;
  }

  /* IE8 and FF freak out if this rule is within another selector */
  ::-webkit-file-upload-button {
    padding: 0;
    border: 0;
    background: none;
  }

  /* Textarea */

  textarea {
    /* Move the label to the top */
    vertical-align: top;

    /* Turn off scroll bars in IE unless needed */
    overflow: auto;
  }

  /* Selects */

  select[multiple] {
    /* Move the label to the top */
    vertical-align: top;
  }
`;
const Layout = ({ children, headerStyles }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global styles={globalStyles} />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header headerStyles={headerStyles} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
