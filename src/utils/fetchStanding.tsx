import { Handle } from '../types/Handle';
import { RankRow, Standing } from '../types/Standing';

const fetchStanding = async (
  constestId: number,
  from: number,
  count: number
): Promise<Standing> => {
  return window
    .fetch(
      `https://codeforces.com/api/contest.standings?contestId=${constestId}&from=${from}&count=${count}&showUnofficial=true`
    )
    .then((r) => {
      return r.json();
    })
    .then((rJson) => {
      const rankList: Array<RankRow> = rJson.result.rows.reduce(
        (prevState: Array<RankRow>, row: any) => {
          const elem: { handle: Handle; rank: number } = {
            handle: row.party.members[0].handle as Handle,
            rank: row.rank as number,
          };
          prevState.push(elem);
          return prevState;
        },
        []
      );

      const res: Standing = {
        constestId,
        from,
        count,
        rankList,
      };
      return res;
    });
};

export default fetchStanding;
