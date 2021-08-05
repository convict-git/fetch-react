import { Handle } from './Handle';

export interface RankRow {
  handle: Handle;
  rank: number;
}

export interface Standing {
  constestId: number;
  from: number;
  count: number;
  rankList: Array<RankRow>;
}
