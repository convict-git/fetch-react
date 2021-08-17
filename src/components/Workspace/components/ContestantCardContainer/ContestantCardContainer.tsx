import { RankRow } from '../../../../types/cftypes';

import { ContestantCard } from './components/ContestantCard/ContestantCard';

import './ContestantCardContainer.css';

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
