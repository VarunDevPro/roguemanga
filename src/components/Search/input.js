import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import WithIcon from './WithIcon';

export default connectSearchBox(({ refine, ...rest }) => (
  <form>
    <WithIcon>
      <input
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        {...rest}
      />
    </WithIcon>
  </form>
));
