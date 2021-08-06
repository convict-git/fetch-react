import { User } from '../../../types/User';

export const ContestantCard = (user: User) => {
  return (
    <div>
      {user.handle} {user.rank} {user.rating}
      <img src={user.img} alt={`${user.handle}'s img`}></img>
    </div>
  );
};

export const ContestantCardWait = () => {
  return <div></div>;
};

export default ContestantCard;
