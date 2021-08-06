import { Handle } from './Handle';

export interface RankRow {
  handle: Handle;
  rank: number;
}

export interface Standing {
  contestId: number;
  from: number;
  count: number;
  rankList: Array<RankRow>;
}
