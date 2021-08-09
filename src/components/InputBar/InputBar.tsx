import React from 'react';

import { useDebounce } from '../../hooks/useDebounce';
import { FetchStandingArg } from '../../utils/fetchStanding';
import { CONST } from '../../shared/constansts';

import './InputBar.css';

const InputBar = ({
  onChangeHandler,
}: {
  onChangeHandler: (_: FetchStandingArg) => void;
}) => {
  const [inputContestId, setInputContestId] = React.useState<number>(
    CONST.contestId
  );
  const [from, setFrom] = React.useState<number>(CONST.from);
  const [count, setCount] = React.useState<number>(CONST.count);

  const contestId = useDebounce<number>(inputContestId, CONST.from);

  React.useEffect(() => {
    onChangeHandler({ contestId, from, count });
  }, [contestId, from, count]);

  function takeProperValue(
    e: React.ChangeEvent<HTMLInputElement>,
    setMethod: any
  ) {
    const value = parseInt(e.target.value.trim());
    if (value >= 0) setMethod(value);
  }

  return (
    <>
      <div className="input-container">
        <div className="input-holder">
          <label htmlFor="contest-id-input">Contest ID</label>
          <input
            id="contest-id-input"
            defaultValue={inputContestId}
            type="number"
            onChange={(e) => takeProperValue(e, setInputContestId)}
          ></input>
        </div>
        <div className="input-holder">
          <label htmlFor="from-input">From rank</label>
          <input
            id="from-input"
            defaultValue={from}
            type="number"
            onChange={(e) => takeProperValue(e, setFrom)}
          ></input>
        </div>
        <div className="input-holder">
          <label htmlFor="count-input">Count</label>
          <input
            id="count-input"
            defaultValue={count}
            type="number"
            onChange={(e) => takeProperValue(e, setCount)}
          ></input>
        </div>
      </div>
      <div id="seperator" />
    </>
  );
};

export default InputBar;
