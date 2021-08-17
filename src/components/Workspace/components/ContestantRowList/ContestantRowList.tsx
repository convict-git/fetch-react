import { RankRow } from '../../../../types/cftypes';

import { ContestantRow } from './components/ContestantRow/ContestantRow';

import './ContestantRowList.css';

export const ContestantRowList = ({
  rankRowList,
  isFetching,
}: {
  rankRowList: Array<RankRow>;
  isFetching: boolean;
}): JSX.Element => {
  const retElement = rankRowList.map((rankRow, index) => {
    return (
      <ContestantRow key={index} isFetching={isFetching} rankRow={rankRow} />
    );
  });
  return <div className="contestant-row-list">{retElement}</div>;
};
