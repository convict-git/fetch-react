import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import { fetchStanding, ContestId } from '../../utils/fetchStanding';
import { Standing } from '../../types/Standing';
// import fetchUser from '../../utils/fetchUser';
// import { Handle } from '../../types/Handle';
// import { User } from '../../types/User';
// import { FetchReturn } from '../../types/FetchReturn';

const OutputBar = ({ contestId }: { contestId: ContestId }) => {
  const state = useFetch<ContestId, Standing>(contestId, fetchStanding);
  const ret = React.useRef<string>('');
  React.useEffect(() => {
    if (state.error) {
      ret.current = state.error;
    } else if (state.status === 'fetching') {
      ret.current = state.status;
    } else {
      ret.current = state.data?.rankList[0].handle || 'nothing';
    }
  }, [state]);
  return (
    <>
      {contestId} {ret.current}
    </>
  );
};

export default OutputBar;
