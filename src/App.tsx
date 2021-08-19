import React from 'react';

import { CONST } from './shared/constansts';

import { InputState, Header } from './components/Header/Header';
import { Workspace, WorkspaceProps } from './components/Workspace/Workspace';

import { ThemeProvider } from './context/themeContext';

import './style.css';
import { CacheProvider } from './context/cacheContext';

import { useLocalStorage } from './hooks/useLocalStorage';

const initState: InputState = {
  contestId: CONST.contestId,
  from: CONST.from,
  count: CONST.count,
  viewCards: CONST.viewCards,
};

export const App = () => {
  const [standingInput, setStandingInput] = useLocalStorage<InputState>(
    'standingInputStorage',
    () => initState
  );

  const onChangeHandler = React.useCallback(
    (input: InputState) => {
      setStandingInput((prevState: InputState) => {
        return {
          ...prevState,
          ...input,
        };
      });
    },
    [setStandingInput]
  );

  return (
    <ThemeProvider>
      <CacheProvider>
        <Header onChangeHandler={onChangeHandler} initState={standingInput} />
        <Workspace props={standingInput as WorkspaceProps} />
      </CacheProvider>
    </ThemeProvider>
  );
};
