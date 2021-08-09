import React from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { FetchStandingArg } from '../../utils/fetchStanding';

import './InputBar.css';

const InputBar = ({
  onChangeHandler,
}: {
  onChangeHandler: (_: FetchStandingArg) => void;
}) => {
  const [inputContestId, setInputContestId] = React.useState<number>(1548);
  const [from, setFrom] = React.useState<number>(1);
  const [count, setCount] = React.useState<number>(5);

  const contestId = useDebounce<number>(inputContestId, 1548);

  React.useEffect(() => {
    onChangeHandler({ contestId, from, count });
  }, [contestId, from, count]);

  return (
    <>
      <div className="input-container">
        <div className="input-holder">
          <label htmlFor="contest-id-input">Contest ID</label>
          <input
            id="contest-id-input"
            value={inputContestId}
            type="number"
            onChange={(e) =>
              setInputContestId(parseInt(e.target.value.trim()) || 1)
            }
          ></input>
        </div>
        <div className="input-holder">
          <label htmlFor="from-input">From rank</label>
          <input
            id="from-input"
            value={from}
            type="number"
            onChange={(e) => setFrom(parseInt(e.target.value.trim()) || 1)}
          ></input>
        </div>
        <div className="input-holder">
          <label htmlFor="count-input">Count</label>
          <input
            id="count-input"
            value={count}
            type="number"
            onChange={(e) => setCount(parseInt(e.target.value.trim()) || 1)}
          ></input>
        </div>
      </div>
      <div id="seperator" />
    </>
  );
};

export default InputBar;
