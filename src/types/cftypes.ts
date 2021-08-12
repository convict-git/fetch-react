export type Handle = string;

export interface User {
  handle: Handle;
  rank: string;
  rating: string;
  img: string;
}

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
