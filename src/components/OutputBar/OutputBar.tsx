import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import { fetchStanding, FetchStandingArg } from '../../utils/fetchStanding';
import { Standing } from '../../types/Standing';

export const OutputBar = ({ inputProps }: { inputProps: FetchStandingArg }) => {
  console.log(inputProps.contestId, inputProps.from, inputProps.count);
  const state = useFetch<FetchStandingArg, Standing>(inputProps, fetchStanding);

  const ret = React.useRef<string>('');
  if (state.error) {
    ret.current = state.error;
  } else if (state.status === 'fetching') {
    ret.current = state.status;
  } else {
    ret.current = state.data?.rankList[0].handle || 'nothing';
  }

  return (
    <>
      {inputProps.contestId} {ret.current}
    </>
  );
};
