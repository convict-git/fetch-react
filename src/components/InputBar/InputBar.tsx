import React from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { FetchStandingArg } from '../../utils/fetchStanding';

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
      <fieldset>
        <input
          value={inputContestId}
          type="number"
          onChange={(e) => setInputContestId(parseInt(e.target.value.trim()))}
        ></input>
        <input
          value={from}
          type="number"
          onChange={(e) => setFrom(parseInt(e.target.value.trim()))}
        ></input>
        <input
          value={count}
          type="number"
          onChange={(e) => setCount(parseInt(e.target.value.trim()))}
        ></input>
      </fieldset>
    </>
  );
};

export default InputBar;
