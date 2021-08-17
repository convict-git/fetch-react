import { RankRow } from '../../../../../../types/codeforces-types';

import { CoverLink } from '../../../../../helper/CoverLink';

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
          <CoverLink
            link={`https://codeforces.com/profile/${rankRow.handle}`}
          />
          <div className="contestant-row" id={`ranked-${rankRow.rank}`}>
            <div className="rank-side">{rankRow.rank}</div>
            <div className="handle-side">{rankRow.handle}</div>
          </div>
        </>
      )}
    </div>
  );
};
