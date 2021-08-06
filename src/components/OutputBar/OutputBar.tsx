import { useFetch } from '../../hooks/useFetch';
import { FetchStandingArg, fetchStanding } from '../../utils/fetchStanding';
import { Standing } from '../../types/Standing';

const OutputBar = ({ contestId }: { contestId: string }) => {
  const state = useFetch<FetchStandingArg, Standing>(contestId, fetchStanding);
  let ret = '';
  if (state.error) {
    ret = state.error;
  } else if (state.status === 'fetching') {
    ret = state.status;
  } else {
    ret = state.data?.rankList[0].handle || 'nothing';
  }
  return (
    <>
      {contestId} {ret}
    </>
  );
};

export default OutputBar;
