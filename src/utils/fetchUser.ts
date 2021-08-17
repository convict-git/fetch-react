import { Handle, User } from '../types/codeforces-types';
import { fetchRetry } from './fetchRetry';

import { CONST } from '../shared/constansts';

const fetchUser = async (handle: Handle): Promise<User> => {
  return fetchRetry(
    `https://codeforces.com/api/user.info?handles=${handle};`,
    CONST.retryTime,
    CONST.retryCount
  )
    .then((r: any) => {
      return r.json();
    })
    .then((rJson: any) => {
      const resUser: User = {
        handle,
        rating: rJson.result[0].maxRating,
        rank: rJson.result[0].maxRank,
        img: rJson.result[0].titlePhoto,
      };
      return resUser;
    });
};

export default fetchUser;
