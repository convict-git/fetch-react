import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import { fetchStanding, FetchStandingArg } from '../../utils/fetchStanding';
import { RankRow, Standing } from '../../types/cftypes';

import { ContestantRowList } from './ContestantRowList/ContestantRowList';
import { ContestantCardContainer } from './ContestantCardContainer/ContestantCardContainer';
import { InputState } from '../Header/Header';

import './Workspace.css';

export type WorkspaceProps = InputState;

export const Workspace = ({
  props,
}: {
  props: WorkspaceProps;
}): JSX.Element => {
  const state = useFetch<FetchStandingArg, Standing>(props, fetchStanding);
  const fakeArray: Array<RankRow> = React.useMemo(
    () =>
      Array(props.count).fill({
        handle: '',
        rank: 0,
      }),
    [props.count]
  );

  return (
    <div id="workspace-wrapper">
      {state.error ? (
        <div>{state.error}</div>
      ) : (
        <>
          <div className="workspace-row-list-container">
            <ContestantRowList
              isFetching={state.status === 'fetching'}
              rankRowList={state.data ? state.data.rankList : fakeArray}
            />
          </div>
          {props.viewCards ? (
            <ContestantCardContainer
              isFetchingList={state.status === 'fetching'}
              rankRowList={state.data ? state.data.rankList : fakeArray}
            />
          ) : (
            ''
          )}
        </>
      )}
    </div>
  );
};
