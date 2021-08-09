import React from 'react';

import { CONST } from './shared/constansts';

import { InputState, InputBar } from './components/InputBar/InputBar';
import { OutputBar } from './components/OutputBar/OutputBar';

import './style.css';

const initState: InputState = {
  contestId: CONST.contestId,
  from: CONST.from,
  count: CONST.count,
  viewCards: CONST.viewCards,
};

const getInitState = (): InputState => {
  return JSON.parse(window.localStorage.getItem('initObj') || '') || initState;
};

export const App = () => {
  const [standingInput, setStandingInput] =
    React.useState<InputState>(getInitState);

  function onChangeHandler(input: InputState) {
    setStandingInput({
      ...standingInput,
      ...input,
    });
  }

  React.useEffect(() => {
    window.localStorage.setItem('initObj', JSON.stringify(standingInput));
  }, [standingInput]);

  return (
    <>
      <InputBar onChangeHandler={onChangeHandler} initState={getInitState()} />
      <OutputBar inputProps={standingInput} />
    </>
  );
};
