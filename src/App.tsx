import React from 'react';

import { CONST } from './shared/constansts';

import InputBar from './components/InputBar/InputBar';
import { OutputBar } from './components/OutputBar/OutputBar';
import { FetchStandingArg } from './utils/fetchStanding';

import './style.css';

export const App = () => {
  const [standingInput, setStandingInput] = React.useState<FetchStandingArg>({
    contestId: CONST.contestId,
    from: CONST.from,
    count: CONST.count,
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
