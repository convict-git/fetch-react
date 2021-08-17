export const CONST = {
  contestId: 1548,
  from: 1,
  count: 9,
  retryCount: 5,
  retryTime: 2000,
  viewCards: false,
};

export const changeRetryCount = (newRetryCountValue: number) => {
  CONST.retryCount = newRetryCountValue;
};
