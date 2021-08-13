import { Handle, User } from '../types/cftypes';
import { fetchRetry } from './fetchRetry';

const fetchUser = async (handle: Handle): Promise<User> => {
  return fetchRetry(
    `https://codeforces.com/api/user.info?handles=${handle};`,
    500,
    10
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
