import { Handle } from '../../../../types/Handle';
import { User } from '../../../../types/User';

import { useFetch } from '../../../../hooks/useFetch';

import fetchUser from '../../../../utils/fetchUser';

import './ContestantCard.css';
import { CoverLink } from '../../../../utils/CoverLink';

export const ContestantCard = ({
  handle,
  rank,
  isFetchingList,
}: {
  handle: Handle;
  rank?: number;
  isFetchingList?: boolean;
}): JSX.Element => {
  const state = useFetch<Handle, User>(handle, fetchUser);

  let elem: JSX.Element;
  if (typeof isFetchingList !== 'undefined' && isFetchingList) {
    elem = <div className="yet-to-fetch"></div>;
  } else if (state.error) {
    elem = <div className="error-state"></div>;
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
  return <div className="card-holder"> {elem}</div>;
};
