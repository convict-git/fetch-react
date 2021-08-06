import React from 'react';
import './style.css';

import InputBar from './components/InputBar/InputBar';
import OutputBar from './components/OutputBar/OutputBar';

export const App = () => {
  const [contestId, setContestId] = React.useState<string>('');
  return (
    <>
      <InputBar onChangeHandler={(input: string) => setContestId(input)} />
      <OutputBar contestId={contestId} />
    </>
  );
};
