import './ContestantCardContainer.css';
import { ContestantCard } from './ContestantCard/ContestantCard';
import { RankRow } from '../../../types/Standing';

export const ContestantCardContainer = ({
  rankRowList,
  isFetchingList,
}: {
  rankRowList: Array<RankRow>;
  isFetchingList: boolean;
}): JSX.Element => {
  const cardList = rankRowList.map((rankRow, index) => {
    return (
      <ContestantCard
        key={index}
        handle={rankRow.handle}
        rank={rankRow.rank}
        isFetchingList={isFetchingList}
      />
    );
  });

  return <div className="contestant-card-container">{cardList}</div>;
};
