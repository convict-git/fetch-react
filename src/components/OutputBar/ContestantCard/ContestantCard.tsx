import { Handle } from '../../../types/Handle';
import { User } from '../../../types/User';

import { useFetch } from '../../../hooks/useFetch';

import fetchUser from '../../../utils/fetchUser';

export const ContestantCard = ({ handle }: { handle: Handle }) => {
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
        {user?.handle} {user?.rank} {user?.rating}
        <img src={user?.img} alt={`${user?.handle}'s img`}></img>
      </div>
    );
  }
  return elem;
};

export const ContestantCardWait = () => {
  return <div></div>;
};
