import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import { fetchStanding, FetchStandingArg } from '../../utils/fetchStanding';
import { Standing } from '../../types/Standing';

import './OutputBar.css';
import { ContestantRowList } from './ContestantRowList/ContestantRowList';

export const OutputBar = ({ inputProps }: { inputProps: FetchStandingArg }) => {
  console.log(inputProps.contestId, inputProps.from, inputProps.count);
  const state = useFetch<FetchStandingArg, Standing>(inputProps, fetchStanding);

  return (
    <div id="output-wrapper">
      <div className="output-row-list-container">
        {state.error ? (
          <div>{state.error}</div>
        ) : state.status === 'fetching' ? (
          <div>{state.status}</div>
        ) : !state.data ? (
          <div>Failed somehow</div>
        ) : (
          <ContestantRowList rankRowList={state.data.rankList} />
        )}
      </div>
      <div className="output-cards-container"></div>
    </div>
  );
};
