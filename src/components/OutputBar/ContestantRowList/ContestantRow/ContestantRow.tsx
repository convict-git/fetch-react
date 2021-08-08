import { RankRow } from '../../../../types/Standing';

import './ContestantRow.css';

export const ContestantRow = ({ rankRow }: { rankRow: RankRow }) => {
  return (
    <div className="contestant-row" id={`ranked-${rankRow.rank}`}>
      <div className="rank-side">{rankRow.rank}</div>
      <div className="handle-side">{rankRow.handle}</div>
    </div>
  );
};
