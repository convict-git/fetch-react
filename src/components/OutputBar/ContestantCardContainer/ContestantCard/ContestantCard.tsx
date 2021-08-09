import { Handle } from '../../../../types/Handle';
import { User } from '../../../../types/User';

import { useFetch } from '../../../../hooks/useFetch';

import fetchUser from '../../../../utils/fetchUser';

import './ContestantCard.css';

export const ContestantCard = ({
  handle,
  rank,
}: {
  handle: Handle;
  rank?: number;
}) => {
  const state = useFetch<Handle, User>(handle, fetchUser);

  let elem: JSX.Element;
  if (state.error) {
    elem = <div>Error occurred: {state.error}</div>;
  } else if (state.status === 'fetching') {
    elem = <div>Fetching</div>;
  } else {
    const user = state.data;
    elem = (
      <div>
        <div className="overlay-img"></div>
        {rank ? <div className="rank-card-view">{rank}</div> : {}}
        <div className="contestant-card">
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
