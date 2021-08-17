import React from 'react';

import { useDebounce } from '../../hooks/useDebounce';
import { CONST, changeRetryCount } from '../../shared/constansts';
import { ThemeToggle } from './components/ThemeToggle';

import './Header.css';

export interface InputState {
  contestId: number;
  from: number;
  count: number;
  viewCards: boolean;
}

export const Header = ({
  onChangeHandler,
  initState,
}: {
  onChangeHandler: (_: InputState) => void;
  initState: InputState;
}) => {
  const [state, setState] = React.useState<InputState>(initState);
  const contestId = useDebounce<number>(state.contestId, CONST.from);

  React.useEffect(() => {
    onChangeHandler({
      contestId: contestId,
      from: state.from,
      count: state.count,
      viewCards: state.viewCards,
    });
  }, [contestId, state.from, state.count, state.viewCards]);

  function takeProperValue(
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) {
    const value = parseInt(e.target.value.trim());
    if (value >= 0) setState({ ...state, [key]: value });
  }

  return (
    <>
      <div className="header-container">
        <div className="input-holder">
          <label htmlFor="contest-id-input">Contest ID</label>
          <input
            id="contest-id-input"
            defaultValue={state.contestId}
            type="number"
            onChange={(e) => takeProperValue(e, 'contestId')}
          ></input>
        </div>
        <div className="input-holder">
          <label htmlFor="from-input">From rank</label>
          <input
            id="from-input"
            defaultValue={state.from}
            type="number"
            onChange={(e) => takeProperValue(e, 'from')}
          ></input>
        </div>
        <div className="input-holder">
          <label htmlFor="count-input">Count</label>
          <input
            id="count-input"
            defaultValue={state.count}
            type="number"
            onChange={(e) => takeProperValue(e, 'count')}
          ></input>
        </div>
        <div className="input-holder">
          <label htmlFor="retry-count-input">Retry Count</label>
          <input
            id="retry-count-input"
            defaultValue={CONST.retryCount}
            type="number"
            onChange={(e) =>
              changeRetryCount(
                parseInt(e.target.value.trim()) || CONST.retryCount
              )
            }
          ></input>
        </div>
        <button
          className="flip-show-cards"
          id={state.viewCards ? 'show-cards-btn' : 'hide-cards-btn'}
          onClick={() => setState({ ...state, viewCards: !state.viewCards })}
        >
          {state.viewCards ? `Hide Cards` : `Show Cards`}
        </button>
        <ThemeToggle />
      </div>
      <div id="seperator" />
    </>
  );
};
