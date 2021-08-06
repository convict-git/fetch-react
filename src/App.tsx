import React from 'react';
import './style.css';

import InputBar from './components/InputBar/InputBar';
import OutputBar from './components/OutputBar/OutputBar';

export const App = () => {
  const [contestId, setContestId] = React.useState<number>(0);
  function onChangeHandler(input: string) {
    if (input.trim()) {
      setContestId(parseInt(input.trim()));
    }
  }
  return (
    <>
      <InputBar onChangeHandler={onChangeHandler} />
      <OutputBar contestId={contestId} from={1} count={2} />
    </>
  );
};
