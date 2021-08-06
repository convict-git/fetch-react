import React from 'react';
import './style.css';

import InputBar from './components/InputBar/InputBar';
import { OutputBar } from './components/OutputBar/OutputBar';
import { FetchStandingArg } from './utils/fetchStanding';

export const App = () => {
  const [standingInput, setStandingInput] = React.useState<FetchStandingArg>({
    contestId: 1548,
    from: 1,
    count: 5,
  });

  function onChangeHandler(input: FetchStandingArg) {
    setStandingInput({
      ...standingInput,
      ...input,
    });
  }

  return (
    <>
      <InputBar onChangeHandler={onChangeHandler} />
      <OutputBar inputProps={standingInput} />
    </>
  );
};
