import { User } from '../types/User';

const fetchUser = async (handle: string): Promise<User> => {
  return window
    .fetch(`https://codeforces.com/api/user.info?handles=${handle};`)
    .then((r) => {
      return r.json();
    })
    .then((rJson) => {
      const resUser: User = {
        handle,
        rating: rJson.result.data[0].maxRating,
        rank: rJson.result.data[0].maxRank,
        img: rJson.result.data[0].titlePhoto,
      };
      return resUser;
    });
};

export default fetchUser;
