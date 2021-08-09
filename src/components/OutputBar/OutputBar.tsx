import { useFetch } from '../../hooks/useFetch';

import { fetchStanding, FetchStandingArg } from '../../utils/fetchStanding';
import { RankRow, Standing } from '../../types/Standing';

import { ContestantRowList } from './ContestantRowList/ContestantRowList';
import { ContestantCardContainer } from './ContestantCardContainer/ContestantCardContainer';
import { InputState } from '../InputBar/InputBar';

import './OutputBar.css';

export const OutputBar = ({ inputProps }: { inputProps: InputState }) => {
  const state = useFetch<FetchStandingArg, Standing>(inputProps, fetchStanding);
  const fakeArray: Array<RankRow> = Array(inputProps.count as number)
    .fill()
    .map((_) => {
      return (_ += 1), { handle: '', rank: 0 };
    });

  return (
    <div id="output-wrapper">
      <div className="output-row-list-container">
        {state.error ? (
          <div>{state.error}</div>
        ) : (
          <ContestantRowList
            isFetching={state.status === 'fetching'}
            rankRowList={state.data ? state.data.rankList : fakeArray}
          />
        )}
      </div>
      {state.data && inputProps.viewCards ? (
        <ContestantCardContainer rankRowList={state.data.rankList} />
      ) : (
        <></>
      )}
    </div>
  );
};
