import React, { useState, createRef } from 'react';
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import { css } from '@emotion/core';

import { Root, PoweredBy, HitsWrapper } from './styles';
import Input from './Input';
import * as hitComps from './hitComps';
import useClickOutside from 'hooks/useClickOutside';

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? (
      children
    ) : (
      <div
        css={css`
          padding: 0.75rem 0.75rem 0.75rem 2.5rem;
        `}
      >
        No results for '{state.query}'
      </div>
    ),
);

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`,
);

export default function Search({ indices, collapse, hitsAsGrid }) {
  const ref = createRef();
  const [query, setQuery] = useState(``);
  const [focus, setFocus] = useState(false);
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  );
  useClickOutside(ref, () => setFocus(false));
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
      root={{ Root, props: { ref, focus } }}
    >
      <Input onFocus={() => setFocus(true)} {...{ collapse, focus }} />
      <HitsWrapper show={query.length > 0 && focus} asGrid={hitsAsGrid}>
        {indices.map(({ name, title, hitComp }) => (
          <Index key={name} indexName={name}>
            <Results>
              <Hits hitComponent={hitComps[hitComp](() => setFocus(false))} />
            </Results>
          </Index>
        ))}
        <PoweredBy />
      </HitsWrapper>
    </InstantSearch>
  );
}
