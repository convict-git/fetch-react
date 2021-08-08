import { RankRow } from '../../../../types/Standing';

export const ContestantRow = ({ rankRow }: { rankRow: RankRow }) => {
  return (
    <div className="contestant-row">
      <div className="rank-side" id={`ranked-${rankRow.rank}`}>
        {rankRow.rank}
      </div>
      <div className="handle-side">{rankRow.handle}</div>
    </div>
  );
};
