import { RankRow } from '../../../types/Standing';
import { ContestantRow } from './ContestantRow/ContestantRow';

import './ContestantRowList.css';

export const ContestantRowList = ({
  rankRowList,
}: {
  rankRowList: Array<RankRow>;
}): JSX.Element => {
  const retElement = rankRowList.map((rankRow, index) => {
    return <ContestantRow key={index} rankRow={rankRow} />;
  });
  return <div className="contestant-row-list">{retElement}</div>;
};
