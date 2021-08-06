import { Handle } from '../types/Handle';
import { RankRow, Standing } from '../types/Standing';

export type ContestId = number;

export const fetchStanding = async (
  contestId: ContestId
): Promise<Standing> => {
  return window
    .fetch(
      `https://codeforces.com/api/contest.standings?contestId=${contestId}&from=${1}&count=${5}`
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
        rankList,
      };
      return res;
    });
};
