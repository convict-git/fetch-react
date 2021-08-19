import { ErrorBoundary } from 'react-error-boundary';

import { Handle, User } from '../../../../../../types/codeforces-types';

import { useFetch } from '../../../../../../hooks/useFetch';

import fetchUser from '../../../../../../utils/fetchUser';

import { CoverLink } from '../../../../../helper/CoverLink';

import './ContestantCard.css';
import RETRY_IMG from '../../../../../../../static/icons8-synchronize.svg';

export interface ContestantCardProps {
  handle: Handle;
  rank?: number;
  isFetchingList?: boolean;
}

const ContestantCardHelper = ({
  handle,
  rank,
}: {
  handle: Handle;
  rank?: number;
}): JSX.Element => {
  const state = useFetch<Handle, User>(handle, fetchUser);

  let elem: JSX.Element;
  if (state.error) {
    throw state.error;
  } else if (state.status === 'fetching') {
    elem = <div className="fetching-state"></div>;
  } else {
    const user = state.data;
    elem = (
      <div>
        {rank ? <div className="rank-card-view">{rank}</div> : {}}
        <div className="contestant-card">
          <CoverLink link={`https://codeforces.com/profile/${user?.handle}`} />
          <div className="overlay-img"></div>
          <img
            className="card-img"
            src={user?.img}
            alt={`${user?.handle}'s img`}
          ></img>
          <div className="info-container">
            <div className="card-handle">{user?.handle}</div>
            <div className="card-rank">{user?.rank}</div>
            <div className="card-rating">{user?.rating}</div>
          </div>
        </div>
      </div>
    );
  }
  return elem;
};

const ContestantCardFallback = ({ resetErrorBoundary }): JSX.Element => {
  return (
    <div className="error-state">
      <button className="retry-btn" onClick={resetErrorBoundary}>
        <img src={RETRY_IMG} alt={'retry'} />
      </button>
    </div>
  );
};

export const ContestantCard = ({
  handle,
  rank,
  isFetchingList,
}: ContestantCardProps) => {
  let elem;
  if (typeof isFetchingList !== 'undefined' && isFetchingList) {
    elem = <div className="yet-to-fetch"></div>;
  } else {
    elem = (
      <ErrorBoundary
        FallbackComponent={ContestantCardFallback}
        resetKeys={[handle, rank, isFetchingList]}
        onReset={() => null}
      >
        <ContestantCardHelper handle={handle} rank={rank} />
      </ErrorBoundary>
    );
  }
  return <div className="card-holder"> {elem}</div>;
};
