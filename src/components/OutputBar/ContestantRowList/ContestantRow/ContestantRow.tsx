import { RankRow } from '../../../../types/Standing';

import './ContestantRow.css';

export const ContestantRow = ({
  rankRow,
  isFetching,
}: {
  rankRow: RankRow;
  isFetching: boolean;
}) => {
  return (
    <div className="contestant-row-container">
      {isFetching ? (
        <div className="fetching-state"></div>
      ) : (
        <>
          <a
            className="covered-link"
            href={`https://codeforces.com/profile/${rankRow.handle}`}
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <div className="contestant-row" id={`ranked-${rankRow.rank}`}>
            <div className="rank-side">{rankRow.rank}</div>
            <div className="handle-side">{rankRow.handle}</div>
          </div>
        </>
      )}
    </div>
  );
};