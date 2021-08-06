import { User } from '../../../types/User';
import { RankRow } from '../../../types/Standing';

const ContestantCard = ({
  user,
  rankRow,
}: {
  user: User;
  rankRow: RankRow;
}) => {
  return (
    <div>
      <div>
        {rankRow.handle} {rankRow.rank}
      </div>
      <div>
        {user.handle} {user.rank} {user.rating}
        <img src={user.img} alt={`${user.handle}'s img`}></img>
      </div>
    </div>
  );
};
export default ContestantCard;
