import React from 'react';

import { CONST } from './shared/constansts';

import { InputState, Header } from './components/Header/Header';
import { Workspace, WorkspaceProps } from './components/Workspace/Workspace';

import './style.css';

const initState: InputState = {
  contestId: CONST.contestId,
  from: CONST.from,
  count: CONST.count,
  viewCards: CONST.viewCards,
};

const getInitState = (): InputState => {
  const strObj = window.localStorage.getItem('initObj');
  return strObj ? JSON.parse(strObj) : initState;
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
      <Header onChangeHandler={onChangeHandler} initState={getInitState()} />
      <Workspace props={standingInput as WorkspaceProps} />
    </>
  );
};
