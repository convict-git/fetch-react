import { CONST } from '../shared/constansts';

import { Handle, RankRow, Standing } from '../types/cftypes';
import { fetchRetry } from './fetchRetry';

export interface FetchStandingArg {
  contestId: number;
  from: number;
  count: number;
}

export const fetchStanding = async ({
  contestId,
  from,
  count,
}: FetchStandingArg): Promise<Standing> => {
  return fetchRetry(
    `https://codeforces.com/api/contest.standings?contestId=${contestId}&from=${from}&count=${count}`,
    CONST.retryTime,
    CONST.retryCount
  )
    .then((r) => {
      return r.json();
    })
    .then((rJson) => {
      const rankList: Array<RankRow> = rJson.result.rows.map((row: any) => {
        const elem: RankRow = {
          handle: row.party.members[0].handle as Handle,
          rank: row.rank as number,
        };
        return elem;
      });

      const res: Standing = {
        contestId,
        from,
        count,
        rankList,
      };
      return res;
    });
};
