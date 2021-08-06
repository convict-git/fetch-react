import { Handle } from './Handle';

export interface RankRow {
  handle: Handle;
  rank: number;
}

export interface Standing {
  contestId: number;
  rankList: Array<RankRow>;
}
