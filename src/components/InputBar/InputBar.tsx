import React from 'react';

import { useDebounce } from '../../hooks/useDebounce';
import { FetchStandingArg } from '../../utils/fetchStanding';
import { CONST } from '../../shared/constansts';

import './InputBar.css';

interface InputState {
  inputContestId: number;
  from: number;
  count: number;
}

const InputBar = ({
  onChangeHandler,
}: {
  onChangeHandler: (_: FetchStandingArg) => void;
}) => {
  const [state, setState] = React.useState<InputState>(() => {
    return {
      inputContestId: CONST.contestId,
      from: CONST.from,
      count: CONST.count,
    };
  });
  const contestId = useDebounce<number>(state.inputContestId, CONST.from);

  React.useEffect(() => {
    onChangeHandler({ contestId, from: state.from, count: state.count });
  }, [contestId, state.from, state.count]);

  function takeProperValue(
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) {
    const value = parseInt(e.target.value.trim());
    if (value >= 0) setState({ ...state, [key]: value });
  }

  return (
    <>
      <div className="input-container">
        <div className="input-holder">
          <label htmlFor="contest-id-input">Contest ID</label>
          <input
            id="contest-id-input"
            defaultValue={state.inputContestId}
            type="number"
            onChange={(e) => takeProperValue(e, 'inputContestId')}
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
      </div>
      <div id="seperator" />
    </>
  );
};

export default InputBar;
